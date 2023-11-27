import React from "react";
import {withRouter} from "../utils";

class HeaderComponent extends React.Component {

    render() {
        return (
            <div className="row justify-content-between mb-5" style={{marginTop: "100px", borderStyle: "dashed"}}>
                <div className="col col-4" style={{marginLeft: "20px"}}>
                    <h1>Moldy Tomatoes</h1>
                </div>
            </div>
        )
    }
}

export default HeaderComponent = withRouter(HeaderComponent);