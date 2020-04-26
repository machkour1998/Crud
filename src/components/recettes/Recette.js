import React, { Component } from 'react';
import Modal from './modal.js';

class Recette extends Component {
  
  state={
    showListeIngredients : null,
    requiredItem:0
  }

  replaceModalItem=(index)=> {
    this.setState({
      requiredItem: index
    });

  }
/*******methode pour supprimer une  recette *******/
  deleteRecette=(id)=>{    
    this.props.deleteRecette(id);
   }

/*******methode pour affcher les ingredients d'une recette *******/
showIngredients=()=>{
  
      this.setState({showListeIngredients : !this.state.showListeIngredients
      })

}

  render() {  
     
    
    const recetteslist = this.props.recettes.map((item, index) => {
      const ingredientsString =  new   String(item.ingrédients);
    const ingredientsList = ingredientsString.split(',');
    console.log('item.ingrédients');
      return (
        <>
        <tr key={index}  onClick={this.showIngredients} style={{cursor:'pointer'}} >
        <td className="classtd"><img  src={item.image}/></td>
        <td><h5 className="titre">{item.titre}</h5></td>
        <td><i className="fa fa-edit fa-l"data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>  Edit </i> </td>
        <td ><i className="fa fa-trash fa-l"  onClick={this.deleteRecette.bind(this,item.id)}>  Delet</i></td>
        </tr>

        {(this.state.showListeIngredients) ?(
        <tr  style={{backgroundColor:'#FFA07A'}} >
        <td colSpan="4">
           <div >
                  <ul >
                      {ingredientsList.map((ingredint,index)=>(
                        <li key={index}>{ingredint}</li>
                      ))}
                  </ul>
            </div>
        </td>
        </tr>
          
        
        ) : null}
        </>
      )
    });
    
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.props.recettes[requiredItem];
    return (
      
        <>
        <div className="container-fluid">
            < div className="row mt-3"><div className="col-lg-12">
            <div className="card">
            <div className="card-body">
            <table className="table table-hover">
            
            <tbody >
            {recetteslist}
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
  </div>
  </div>
  {(modalData!=null)?( <Modal
  titre={modalData.titre}
  ingrédients={modalData.ingrédients}
  image={modalData.image}
  index={requiredItem}
  recipe={modalData}
  enregistrerModal={this.props.enregistrerModal}
/>):null}
</>
    );
    
    
  }
}

export default Recette;