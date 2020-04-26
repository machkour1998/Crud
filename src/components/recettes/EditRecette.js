import React, { Component } from 'react';

 class EditRecette extends Component {
 
  addNewRecette = () =>{
     const titre = this.titreInput.value;
     const ingrédients = this.ingrédientsInput.value;
     const image = this.imageInput.value;
    const recette={titre:titre,ingrédients:ingrédients,image:image};
    this.props.addNewRecette(recette);
  }


    render() {
      
        return (
            <>
            <form >
              <div className="card bg-light mb-3">
                <div className="card-header">nouvelle recette</div>
                <div className="moncard-body">
                  <div className="card-text">
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label >Titre Recette :</label>
                        <input
                         ref={titreInput => this.titreInput = titreInput} 
                          
                          type="text"
                          name="name"
                          placeholder="Enter le nom du recette "
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>URL Image Recette :</label>
                        <input
                         ref={imageInput => this.imageInput = imageInput} 
                          
                          type="text"
                          name="name"
                          placeholder="Enter image du recette "
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Liste Ingrédients :</label>
                        <textarea
                         ref={ingrédientsInput => this.ingrédientsInput = ingrédientsInput}
                          type="text"
                          name="ingredients"
                          placeholder="Enter les ingredients"
                          className="form-control"
                          required   
                        />
                      </div>
                    
                    </div>
                    <input className="btn btn-outline-primary" type="submit" value="Save" onClick={this.addNewRecette} />{` `}
                    
                  </div>
                </div>
              </div>
            </form>
          </>
        )
    }
}
export default EditRecette;