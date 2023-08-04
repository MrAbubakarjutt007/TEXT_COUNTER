import React, {useState} from 'react'

export default function Formtext(props) {
     const clickme = () =>
     {
       let newDatas= datachange.toUpperCase();
        setData(newDatas)
        props.alertData("Data converted into  upper case", "success")   
     }
     const clicklow= () =>
     {
       let newDatas= datachange.toLowerCase();
        setData(newDatas) 
        props.alertData("Data converted into lower case", "success")  
     }
     const cleandata= () =>
     {
       let newDatas='';
       setData(newDatas)
       props.alertData("clear data","success")

     }
     const  hendalcopy= ()=>
     {
      
        navigator.clipboard.writeText(datachange);
        document.getSelection().removeAllRanges();
        props.alertData("data copyed", "success")

     } 
     const removespaces= () =>
     {
       let newDatas= datachange.split(/[ ]+/);
       setData(newDatas.join(" "))
       props.alertData("removed spaces", "success")
     }
     const changedata = (event) =>//parameter
     {
        
        setData(event.target.value); 
     }


    const [datachange, setData] = useState("");
  
    
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={changedata} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" value={datachange} rows="8"></textarea>
            </div>
             <button disabled={datachange.length===0} className="btn btn-success mx-2 my-2" onClick={clickme}>change data into uppercase</button>
             <button disabled={datachange.length===0} className="btn btn-danger mx-2 my-2" onClick={clicklow}>change data into lowercase</button>
             <button disabled={datachange.length===0} className="btn btn-danger mx-2 my-2" onClick={cleandata}>clear text</button>
             <button disabled={datachange.length===0} className="btn btn-danger mx-2 my-2" onClick={removespaces}>clear space</button>
             <button disabled={datachange.length===0} className="btn btn-danger mx-2 my-2" onClick={hendalcopy}>copy data</button>           
           </div>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>text updates</h3>
      <p>word and {datachange.split("/\S+/").filter((removespaces)=>{return removespaces.length!=0}).length},char{datachange.length}</p>
      <p>{0.008*datachange.split(" ").filter((removespaces)=>{return removespaces.length!=0}).length} read minutes</p>
      <h3>VIEW DETAIL</h3>
      <p>{datachange.length>0?datachange:"plese enter your data for VIEW DETAIL"}</p>
    </div> 
    </>
  )
}