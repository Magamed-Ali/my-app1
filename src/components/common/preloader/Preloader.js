import React from 'react';
import preloader from "../../../assets/images/loading-6.gif";
import ploader from "./ploader.module.css"

let Preloader = (props)=>{
    return <div>
        <img className={ploader.ploader} src={preloader}/>
    </div>
}
export default Preloader;