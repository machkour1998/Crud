import React, { Component } from "react";
import Swal from "sweetalert2";

import { successNotification } from "../notifications";
class EditRecette extends Component {
  addNewRecette = () => {
    if (
      this.titreInput.value === "" ||
      this.ingrédientsInput.value === "" ||
      this.imageInput.value === ""
    ) {
      Swal.fire(
        "Champ non remplie ?",
        "Il faut remplir tous les champs",
        "warning"
      );
    } else {
      const titre = this.titreInput.value;
      const ingrédients = this.ingrédientsInput.value;
      const image = URL.createObjectURL(this.imageInput.files[0]);
      const recette = { titre: titre, ingrédients: ingrédients, image: image };
      this.props.addNewRecette(recette);
      successNotification("Addition", "Recette bien Ajouter");

      this.titreInput.value = "";
      this.imageInput.value = "";
      this.ingrédientsInput.value = "";
    }
  };

  render() {
    return (
      <>
        <form>
          <div className="card bg-light mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="text_label_form_style">
                      Titre Recette :
                    </label>
                    <input
                      ref={(titreInput) => (this.titreInput = titreInput)}
                      type="text"
                      name="name"
                      placeholder="Enter le nom du recette "
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>URL Image Recette :</label>
                    <input
                      ref={(imageInput) => (this.imageInput = imageInput)}
                      type="file"
                      name="image"
                      placeholder="Enter image du recette "
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Liste Ingrédients :</label>
                    <textarea
                      ref={(ingrédientsInput) =>
                        (this.ingrédientsInput = ingrédientsInput)
                      }
                      type="text"
                      name="ingredients"
                      placeholder="Enter les ingredients"
                      className="form-control"
                      required
                    />
                  </div>

                  <input
                    style={{ width: "100px" }}
                    className="btn btn-primary"
                    type="button"
                    value="Save"
                    onClick={this.addNewRecette}
                  />
                  {` `}
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default EditRecette;
