import './MainPage.css';
import Header from './Elements Page/Header';
import React, { useRef } from 'react';
import axios, { Axios } from 'axios';
import { useEffect } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useAudioRecorder } from 'react-audio-voice-recorder';

function MainPage() {
    const recorderControls = useAudioRecorder();
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        var nameRecord = url.split('/')[3];
        console.log(nameRecord);
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };
    useEffect(() => {
        if (recorderControls.isRecording) {
            if (recorderControls.recordingTime >= parseInt(15)) {
                alert('Время записи истекло!');
                recorderControls.stopRecording();
            }
        }
    });
    const inputFile = useRef(null);
    function addText() {
        //
        //  user query
        //
        let text = document.getElementById('query').value;
        let div = document.getElementById('OutputDiv');
        let msg = document.getElementById('helpMSG');
        msg.className = "dontView";
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
        let nameFile = document.getElementById('files').value;
        divForQuery.append(iconUser);
        divForQuery.append(h1);
        div.append(divForQuery);

        //
        //  charGPT response -> div -> response text
        //
        axios({
            method: 'get',
            url: `https://localhost:7073/api/controller/QueryGPT?qwery=${text}&idUser=${sessionStorage.getItem('idUser')}`,

            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res['data']);
            let imageGPT = document.createElement('img');
            imageGPT.src = "./GPTLogo.png";
            imageGPT.className = "iconUser";
            let responseGPT = document.createElement('h1');
            responseGPT.textContent = res['data'];
            let divForReguesr = document.createElement('div');
            divForReguesr.className = "divQiery";
            divForReguesr.appendChild(imageGPT);
            divForReguesr.appendChild(responseGPT);
            div.append(divForReguesr);
        });
    }
    return (
        <div>
            <Header></Header>
            <button onClick={() => { window.location.href = "/historypage" }}>Get History</button>
            <div id='OutputDiv'>
                <h1 id='helpMSG'>Enter new query...</h1>
            </div>
            <div className='inputDiv'>
                <input id='query' type="text" placeholder='Enter a query...' />
                <button id='buttonSend' onClick={addText}>Send</button>
                <form id='uploadForm' name="uploadForm" encType="multipart/form-data">

                    <input id='files' name='files' type='file' ref={inputFile} style={{ display: 'none' }} onChange={() => {
                        var upload = document.getElementById('files');
                        let tempMas = upload.value.split('\\');
                        console.log(tempMas[tempMas.length - 1]);
                        let s = this;
                        const data = new FormData(document.getElementById('uploadForm'))
                        let imagefile = document.querySelector('#files')
                        data.append('file', imagefile.files[0]);
                        axios.post(`https://localhost:7073/api/controller/QueryGPTImage?idUser=${sessionStorage.getItem('idUser')}`, data, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                            .then(res => {
                                console.log(res);
                                let div = document.getElementById('OutputDiv');
                                let imageGPT = document.createElement('img');
                                imageGPT.src = "./GPTLogo.png";
                                imageGPT.className = "iconUser";
                                let responseGPT = document.createElement('h1');
                                responseGPT.textContent = res['data'];
                                let divForReguesr = document.createElement('div');
                                divForReguesr.className = "divQiery";
                                divForReguesr.appendChild(imageGPT);
                                divForReguesr.appendChild(responseGPT);
                                div.append(divForReguesr);
                            })
                            .catch(error => {
                                console.log(error.response)
                            })
                    }} ></input>
                    <img className='iconUser' src="./iconUploadFile-bg.png" alt="upload file" onClick={() => {
                        let imageText = document.getElementById('files');
                        console.log(imageText.value);
                        inputFile.current.click();
                    }}></img>
                   
                </form>
                <AudioRecorder onRecordingComplete={addAudioElement} recorderControls={recorderControls} />
                <form id='uploadFormAudio' name="uploadFormAudio" encType="multipart/form-data">
                    <input id='filesAudio' name='filesAudio'  type="file" onChange={()=>{
                        var upload = document.getElementById('filesAudio');
                        let tempMas = upload.value.split('\\');
                        console.log(tempMas[tempMas.length - 1]);
                        let s = this;
                        const data = new FormData(document.getElementById('uploadFormAudio'))
                        let imagefile = document.querySelector('#filesAudio')
                        data.append('file', imagefile.files[0]);
                        axios.post(`https://localhost:7073/api/controller/QueryGPTAudio?idUser=${sessionStorage.getItem('idUser')}`, data, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                            .then(res => {
                                console.log(res);
                                let div = document.getElementById('OutputDiv');
                                let imageGPT = document.createElement('img');
                                imageGPT.src = "./GPTLogo.png";
                                imageGPT.className = "iconUser";
                                let responseGPT = document.createElement('h1');
                                responseGPT.textContent = res['data'];
                                let divForReguesr = document.createElement('div');
                                divForReguesr.className = "divQiery";
                                divForReguesr.appendChild(imageGPT);
                                divForReguesr.appendChild(responseGPT);
                                div.append(divForReguesr);
                            });
                    }} />
                </form>
            </div>
        </div>
    );
}
export default MainPage;