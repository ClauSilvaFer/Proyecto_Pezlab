import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import {withRouter} from "../../utils";
import SweetAlert from 'react-bootstrap-sweetalert';
import ConnectionManager from "../../ConnectionManager";

class CreateMoviePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            yourName: "",
            rating: 1,
            review: "",
            error: "",
            success: "",
        }
    }

    createMovie = async () => {
        const {title, review, rating, yourName} = this.state;
        let error = "";

        if (!title.trim()) {
            error = "Movie title is required"
        }

        if (!yourName.trim()) {
            error = "Your name is required"
        }

        if (review.trim().length < 10) {
            error = "The review should be at least 10 characters long"
        }

        if (error !== "") {
            this.setState({
                error: error
            })
        } else {
            let connection = new ConnectionManager();
            let data = await connection.createMovie(title, rating, review, yourName)

            if (data !== null)
                this.setState({
                    title: "",
                    yourName: "",
                    rating: 1,
                    review: "",
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
                                    <h1>Create Movie</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-8">
                                    <div className="form-group">
                                        <label htmlFor="title">Movie title</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            id="title" required
                                            value={this.state.title}
                                            onChange={(event) => {
                                                this.setState({
                                                    title : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yourName">Your Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="yourName"
                                            id="yourName" required
                                            value={this.state.yourName}
                                            onChange={(event) => {
                                                this.setState({
                                                    yourName : event.target.value
                                                })
                                            }}/>
                                    </div>
                                    









                                    
                                    <div className="form-group">
                                        <label htmlFor="review">Review</label>
                                        <textarea className="form-control" id="review" rows="3" value={this.state.review} onChange={ (event) => {
                                            this.setState({
                                                review: event.target.value
                                            })
                                        }}></textarea>
                                    </div>
                                    <button className="btn btn-primary mr-2" onClick={this.createMovie}>Create</button>
                                    <button className="btn btn-danger" onClick={this.goBack}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateMoviePage = withRouter(CreateMoviePage);