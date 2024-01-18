const LoadP=()=>{

    setTimeout(()=>{
        document.getElementById("note").value=localStorage.getItem("texxx");

    },0)
    }

function TexN(){
    localStorage.setItem("texxx", document.getElementById("note").value);
}
export default function Note(){
    const brand="My Report";
    return(
        <div onLoad={LoadP()}>

<div id="nav">
        <a>{brand}</a>
        </div>
<br/>
<br/>


<textarea className="note" placeholder="add note +" id="note" onKeyUp={TexN}></textarea>


<button style={{position:"fixed", bottom:"30px", right:"20px",padding:"10px 12px",borderRadius:"20px",border:"1px solid green",background:"transparent"}} onClick={()=>{window.location.href="/"}}>Back</button>
        </div>
    )
}