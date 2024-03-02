import React from 'react';

function Namelist(props) {
    let names=["dinesh","sachin","dhoni","virat","ashwin"]
    let listitems=names.map((name,index)=><li key={index}>{name}</li>)
   //let li_array=[<li>1</li>,<li>2</li>]
    return (
        <div>
            <ul>
             {listitems}
            </ul>
        </div>
    );
}

export default Namelist;