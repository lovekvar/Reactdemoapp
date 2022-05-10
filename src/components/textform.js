import React, {useState} from 'react'


export default function Textform(props) {
    // const [text, setText] = useState('Lets write whatever comes in your mind');
    const [text, setText] = useState('');
    // Note : To use states, always make the function name start with a capital letter.


    let handleOnChange = (event)=>{
        // console.log("clicked");
        setText(event.target.value);
    }
    let CtoUpper = ()=>{
        setText(text.toUpperCase());
    } 
    let CtoLower = ()=>{
        setText(text.toLowerCase());
    }  
    let Clear = ()=>{
        setText('');
    }    
    let Speak = ()=>{
        let signal = new SpeechSynthesisUtterance(text);
        signal.volume = 0.9;
        window.speechSynthesis.speak(signal);
    }

    let bgCol = 'bg-light';
    let Col = 'text-dark';
    if(props.mode === 'dark'){
        bgCol = 'bg-secondary';
        Col = 'text-light';
    }

    return (
    <>
        <form className='container my-3'>
            <div className="mb-3">
                <label htmlFor="require" className="form-label">{props.title}</label>
                <textarea id="require" value={text} className={`form-control ${bgCol} ${Col}`} name="w3review" rows="4" cols="50" onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={CtoUpper}>Convert into UpperCase</button>
            <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={CtoLower}>Convert into LowerCase</button>
            <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={Clear}>Reset</button>
            <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={Speak}>Speaker</button>
        </form>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters.</p>
        </div>
    </>
    )
}
