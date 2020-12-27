import React from 'react';
import tree from './images/tree.svg';
import santa from './images/undraw_santa_visit_loux.svg';
import './index.css';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const Title = () => {
    return(
        <div className="div" style={{display: "flex", width:"100%", margin:"auto", justifyContent:"space-evenly"}}>
            <a href="https://repl.it/@rakshaa2000/Christmas-Hangman#main.py" target="_blank" rel="noreferrer"><img className="img-left" src={tree} alt="" height="200px" width="200px"/></a>
            <div style={{margin:"10px", alignItems:"center"}}>
            <h1 className="typewriting" style={{textAlign:"center",  wordWrap:"break-word"}}>Christmas for Everyone- Joy of Giving <CardGiftcardIcon fontSize="large"></CardGiftcardIcon></h1>
            <h1 className="caption" style={{fontFamily:"'Satisfy', cursive"}}>Lifting up with hands of help</h1>
            </div>
            <a href="https://repl.it/@rakshaa2000/Box-it#main.py" target="_blank" rel="noreferrer"><img className="img-right" src={santa} alt="" height="200px" width="200px"/></a>
        </div>
    )
};

export default Title;