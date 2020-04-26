import React, { Component } from 'react';
import "./styles/dashboard.css";
import "./styles/styleModal.css";
import Recette from './components/recettes/Recette';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import EditRecette from './components/recettes/EditRecette';




class App extends Component {
  state ={
    recettes :[
        {id:1,titre:"Tacos mexicains",ingrédients:"2 tomates,250 g de boeuf haché,1 petite boîte de haricots rouges",image:'../images/chawarma.jpg'},
        {id:2,titre:"Enchilladas au boeuf gratinés",ingrédients:"8 tortillas,450 gruyère râpé,20 cl de crème fraîche",image:'../images/gratin.jpg'},
        {id:3,titre:"Gaspacho au Thermomix",ingrédients:"1 tranche de pain de mie,1 oignon,1/2 concombre",image:'../images/gaspacho.jpg'}
  
    ]
  }
/****************************************************************************/ 

 storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
/****************************************************************************/ 
componentWillUpdate =(nextProps, nextState) =>{ 
  if(this.storageAvailable('localStorage')){
 const ref = localStorage.setItem('recettes',
JSON.stringify(nextState.recettes))
  }else {
    console.error('Your browser doesn\'t support local storage');
    }
 
}
/****************************************************************************/
 componentWillMount =()=>{
  if(this.storageAvailable('localStorage')) {
          const localRef = localStorage.getItem('recettes',JSON.stringify(this.state.recettes));
           if(localRef) {
          this.setState({recettes: JSON.parse(localRef)})
          }
          else {
            localStorage.setItem('recettes',JSON.stringify(this.state.recettes));
          } 
        }else {
          console.error('Your browser doesn\'t support local storage');
          }               
   }
/****************************************************************************/
enregistrerModal = (id,item) => {
    
    let temprecipes = this.state.recettes;
temprecipes[id] = item;
this.setState({ recettes: temprecipes });
localStorage.setItem(
  'recettes',
  JSON.stringify(temprecipes)
);
   }
   
   
 
/****************************************************************************/

addNewRecette= (recette) => {
  const last = Date.now();
  
  recette.id=last;
  this.setState(previousState => ({
    recettes: [...previousState.recettes, recette]
  }));
  
}
/****************************************************************************/

deleteRecette=(id)=> {
  let r = window.confirm("voullez-vous supprimer cette recette");
  if (r === true) {
    let resteRecettes = this.state.recettes.filter(
      x => x.id !== id
    );
     this.setState((prevState, props) => ({
      recettes: resteRecettes
     }));
     
  }
  
}


/****************************************************************************/

  render() {
  
  return (
    <>
    <nav  className="navbar navbar-dark fixed-top  flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/#/">
            <i className="fa fa-home">{``}</i>
          </a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      <i className="fa fa-users">{``}</i>Users{` `}
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          
          
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Recettes</h1>
            </div>
            <div className="row" style={{ paddingTop: "20px" }}>
              <div className="col-md-12">{``}</div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ marginBottom: "10px" }}>
                
                
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a  className="nav-link active " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" >Recettes</a>
                      </li>
                      <li className="nav-item">
                        <a  className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" >Ajouter Recette</a>
                      </li>
                     
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Recette recettes={this.state.recettes}  
                         deleteRecette={this.deleteRecette.bind(this)}
                         enregistrerModal={this.enregistrerModal.bind(this)}
                      /></div>
                      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><EditRecette  addNewRecette={this.addNewRecette.bind(this)} 
                      editStudentSubmit={this.editStudentSubmit}/></div>
                      
                    </div>

              </div>
            </div>
           
        </div>
        </>
  );
}
}

export default App;
