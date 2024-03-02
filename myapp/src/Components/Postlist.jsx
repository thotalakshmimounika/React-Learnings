import React from 'react';
import { useFetch } from './Customhook';

function Postlist(props) {
    let postlist=useFetch("https://jsonplaceholder.typicode.com/posts")
    let postitems=postlist.map((post)=><li>{post.title}</li>)
    //let [counter,inc,dec]=useCounter(10,0)
    return (
        <div>
            {postitems}
        </div>
    );
}

export default Postlist;