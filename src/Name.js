import React, {Component} from "react";
class Name extends Component{
    render(){
        return(
            <>
              <p>Name: {this.props.ad} </p>
              <p>Surname: {this.props.soyad} </p>
            </>
        )
    }
}
export default Name