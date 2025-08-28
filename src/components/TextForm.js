import React,{useState} from 'react'
 
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked "+text)
        let newText=text.toUpperCase();
        // setText("you have clicked on handleUPClick")
          setText(newText);
          props.showAlert("Converted to UpperCase","success");
    }
      const handleloClick=()=>{
        let newText=text.toLowerCase();
          setText(newText);
           props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
          setText(" ");
           props.showAlert(" ClearText","success");
    }
    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value);
         props.showAlert("ChangeText","success");
    }
    const handleCopy =()=>{
      navigator.clipboard.writeText(text);
       props.showAlert("Copy to clipboard!","success");
      //  document.getSelection().removeAllRanges();
    }
    const handleExtraSpaces=()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("ExtraSpace is removed","success");
    }
     const [text , setText] = useState('Enter text here');
    //  text="new text";//wrong way to change a state
    // setText("new text");//correct way
//   console.log(useState('Enter text here'));
//   setText("hjghgfjhfh");
  return (
    <>
    <div className="container">
         <h1 className='mb-4'>{props.heading}</h1>
        {/* <h1>{props.heading}- {text}</h1> */}
<div className="mb-3">

  <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange}
  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
    color:props.mode==='dark'?'white':'#042743'
  }} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button  disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3">
    <h2>Your text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{
      return element.length!==0}).length} words and {text.length} characters</p>
    {/* <p>{text.split(" ").length}words and {text.length} characters</p> */}
    <p>{0.008*text.split(" ").filter((element)=>{
      return element.length!==0}).length}Minutes Read</p>
    <h2>Preview</h2>
    {/* <p>{text}</p> */}
     <p>{text.length>0?text:"Nothing to Preview!"}</p>
</div>
</>  )
}
