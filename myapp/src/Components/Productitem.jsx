import React from 'react';
//import "./Productitem.css"
import modulestyle from "./Productitem.module.css"

function Productitem(props) {
    let aval_prod={
        backgroundColor:"darkcyan",
        padding:"0px"
    }
    let notaval_prod={
        filter:"grayscale(1)"
    }
    return (
        <div className={modulestyle.proditem} style={props.prod_item.instock?aval_prod:notaval_prod}>
            <img className={modulestyle.prodimg} src={'./assets/'+props.prod_item.category+'.jpg'}/>
            <h1>{props.prod_item.name}</h1>
            <h3>{props.prod_item.brand}</h3>
            <h4>{props.prod_item.price}</h4>
            <p>Rating:{props.prod_item.rating}</p>
            {props.prod_item.instock?<button>Buy now</button>:<p className={`${modulestyle.redtext} ${modulestyle.font30}`}>outoff stock!!</p>}
            
        </div>
    );
}

export default Productitem;

//cond?true statement:false statement