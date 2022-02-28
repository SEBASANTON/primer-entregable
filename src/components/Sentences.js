import React from 'react';
import quotes from'../quotes.json'
import { useState } from 'react';
import Icon from './Icon';

const colors=["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

const Sentences = () => {
   const [sentence, setSentence] = useState(quotes[getRandom()]);

    const changeSentence = () =>{
        setSentence(quotes[getRandom()]);
    } 

    const color = colors[Math.floor(Math.random()*6)];

    document.body.style = `background: ${color}`;

    return (
        <div className="QuoteBox" style={{color:color}}>
            <div className="responsive-sentence">
                <div className="quotes"><Icon/></div>
                <div><p>{sentence.quote}</p></div>
            </div>
            <div className="author">
                <p>{sentence.author}</p>
                <button style={{background:color}} onClick={changeSentence} ><i className="fa-solid fa-angle-right"></i></button>
                
            </div>
        </div>
    );

};

const getRandom = () => Math.floor(Math.random()*quotes.length);

export default Sentences;