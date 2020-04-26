import React, { Component } from 'react'
import '../../styles/styleModal.css';
export default class modal extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            titre: '',
            ingrédients: '',
            image:'../images/chawarma.jpg',
            id:''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            titre: nextProps.recipe.titre,
            ingrédients: nextProps.recipe.ingrédients,
            image:nextProps.recipe.image,
            id:nextProps.recipe.id
        });
    }

    titleHandler(e) {
        this.setState({ titre: e.target.value });
    }
    
    imageHandler(e) {
        this.setState({ image: e.target.value });
    }
    msgHandler(e) {
        this.setState({ ingrédients: e.target.value });
    }

    
    render() {
        return (
            <div   className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Recette</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div  className="modal-body">
                        <p><span className="modal-lable"><label className="labTitre">Title:</label></span><input value={this.state.titre} onChange={(e) => this.titleHandler(e)} /></p>
                        <p><span className="modal-lable"><label className="labIngrédients">Ingrédients:</label></span><input value={this.state.ingrédients} onChange={(e) => this.msgHandler(e)} /></p>
                        <p><span className="modal-lable"><label className="labImage">Image:</label></span><input value={this.state.image} onChange={(e) => this.imageHandler(e)} /></p>
                    </div>
                    <div className="modal-footer">
                        <button style={{backgroundColor:'#DCDDDD', color:'black'}} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button style={{backgroundColor:'#0f4c81', color:'white'}}type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.props.enregistrerModal.bind(this,this.props.index,this.state)}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
