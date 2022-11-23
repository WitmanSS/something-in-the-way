import React, {Component} from "react";
import Name from "./Name";
import Kurs from "./Kurs";
import Group from "./Group"
import './index1.css'
class Student extends Component{
    render(){
        const {ad, soyad , kurs,group }= this.props
        return(
             <div className="block">
            <Kurs kurs={kurs} />
            <Name ad={ad} soyad={soyad} />
            <Group group={group} />
              </div>
        )
    }
}
export default Student