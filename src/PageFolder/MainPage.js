import './MainPage.css';
import Header from './Elements Page/Header';
import React, {useRef} from 'react';

function MainPage() {

    const inputFile = useRef(null); 
    function addText() {
        //
        //  user query
        //
        let text = document.getElementById('query').value;
        let div = document.getElementById('OutputDiv');
        div.innerHTML="";
        let iconUser = document.createElement('img');
        iconUser.src = "./iconUser-bg.png";
        iconUser.className = "iconUser";
        let h1 = document.createElement('h1');
        h1.textContent = text;
        let divForQuery = document.createElement('div');
        divForQuery.className = "divQiery";
        //
        //  name select file
        //
        let nameFile = document.getElementById('uploadFile').value;
        divForQuery.append(iconUser);
        divForQuery.append(h1);
        div.append(divForQuery);

        //
        //  charGPT response -> div -> response text
        //

    }
    return(
        <div>
            <Header></Header>
            <div id='OutputDiv'>
                <h1>Enter new query...</h1>
            </div>
            <div className='inputDiv'>
                <input id='query' type="text"  placeholder='Enter a query...'/>
                <button id='buttonSend' onClick={addText}>Send</button>
                <input id='uploadFile' type='file' ref={inputFile} style={{display: 'none'}}></input>
                <img className='iconUser' src="./iconUploadFile-bg.png" alt="upload file" onClick={()=>{inputFile.current.click();}}></img>
            </div>
        </div>
    );
}
export default MainPage;