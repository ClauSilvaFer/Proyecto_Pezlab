import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import {withRouter} from "../../utils";
import SweetAlert from 'react-bootstrap-sweetalert';
import ConnectionManager from "../../ConnectionManager";

class CreateProductoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            image: "",
            description: "",
            stock: 0,
            size: "",
            color: "",
            type: "",
            error: "",
            success: ""
        }
    }

    createProducto = async () => {
        const {name, price, image, description, stock, size, color, type} = this.state;
        let error = "";

        if (!name.trim()) {
            error = "Producto name is required"
        }

        if (!Number(price)>0) {
            error = "Price is required"
        }

        if (error !== "") {
            this.setState({
                error: error
            })
        } else {
            let connection = new ConnectionManager();
            let data = await connection.createProducto(name, price, image, description, stock, size, color, type)
            console.log(data)

            if (data !== null)
                this.setState({
                    name: "",
                    price: 0,
                    image: "",
                    description: "",
                    stock: 0,
                    size: "",
                    color: "",
                    type: "",
                    error: "",
                    success: "You have been register successfully"
                });
            else
                this.setState({
                    error: "Error"
                });
        }
    }

    goBack = () => {
        this.props.navigate("/movies/");
    }

    onCloseModal = () => {
        this.setState({
            error: "",
            success: ""
        })
    }

    render() {
        let user = JSON.parse(localStorage.getItem("user"));
        return (
            <>
                {this.state.error !== "" ?
                    <SweetAlert
                        title={"Error"}
                        danger
                        onConfirm={this.onCloseModal}
                    >
                        {this.state.error}
                    </SweetAlert> : null
                }
                {this.state.success !== "" ?
                    <SweetAlert
                        title={"Success"}
                        success
                        onConfirm={() => {
                            this.onCloseModal();
                            this.goBack();
                        }}
                    >
                        {this.state.success}
                    </SweetAlert> : null
                }
                <HeaderComponent />
                <div className="container" >
                    <div className="row">
                        <div className="col-12">
                            <div className="row justify-content-between">
                                <div className="col col-4">
                                    <h1>Create Producto</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-8">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            id="name" required
                                            value={this.state.name}
                                            onChange={(event) => {
                                                this.setState({
                                                    name : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="price"
                                            id="price" required
                                            value={this.state.price}
                                            onChange={(event) => {
                                                this.setState({
                                                    price : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="image"
                                            id="image" required
                                            value={this.state.image}
                                            onChange={(event) => {
                                                this.setState({
                                                    image : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            id="description" required
                                            value={this.state.description}
                                            onChange={(event) => {
                                                this.setState({
                                                    description : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="stock">Stock</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="stock"
                                            id="stock" required
                                            value={this.state.stock}
                                            onChange={(event) => {
                                                this.setState({
                                                    stock : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="size">Size</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="size"
                                            id="size" required
                                            value={this.state.size}
                                            onChange={(event) => {
                                                this.setState({
                                                    size : event.target.value
                                                })
                                            }}/>
                                    </div><div className="form-group">
                                        <label htmlFor="color">Color</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="color"
                                            id="color" required
                                            value={this.state.color}
                                            onChange={(event) => {
                                                this.setState({
                                                    color : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    </div><div className="form-group">
                                        <label htmlFor="type">Type</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="type"
                                            id="type" required
                                            value={this.state.type}
                                            onChange={(event) => {
                                                this.setState({
                                                    type : event.target.value
                                                })
                                            }}/>
                                    </div>                                   
                                    
                                    <button className="btn btn-primary mr-2" onClick={this.createProducto}>Create</button>
                                    <button className="btn btn-danger" onClick={this.goBack}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default CreateProductoPage = withRouter(CreateProductoPage);