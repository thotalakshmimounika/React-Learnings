/*function Comp1(props){
    return(
        <h2>
            {props.msg}// props are immutable
        </h2>
    )
}*/
function Comp1({msg,country}){
    return(
        <h2>
            {msg} - {country}
        </h2>
    )
    }
export default Comp1