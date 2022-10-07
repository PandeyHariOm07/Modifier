import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
      // console.log("Uppercase Was Clicked");
      let newText = text.toLowerCase();
      setText(newText);
  }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleFirstCapital =()=>{
      let a = text.split(" ");
      let b="";
      for(let i=0;i<a.length;i++){
          b+=a[i].charAt(0).toUpperCase();
          b+=a[i].substring(1);
          b+=" ";
      }
      setText(b.trim());

    }
    const [text,setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleFirstCapital}>Convert To CapitalCase</button>
    </div>
    <div className="container my-4">
      <h3>Your Text Summery</h3>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>You Will Take {0.008 * text.split(" ").length} Minutes To Read The Above Paragraph</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
