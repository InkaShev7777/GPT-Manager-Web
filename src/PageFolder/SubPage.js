import './SubPage.css';
import Header from './Elements Page/Header';
import axios, { Axios } from 'axios';
import { useState } from 'react';
function SubPage() {
    //
    //axis get all sub category && map 
    //
    const [listSub, setLisSub] = useState([]);
    axios({
        method: 'get',
        url: 'https://localhost:7073/api/controller/GetSub',

        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        // setLisSub(res['data']['value']);
        console.log(res['data']['value']);
        let divSub = document.getElementsByClassName('containerCard')[0];
        for (const iterator of res['data']['value']) {
            let div = document.createElement('div');
            div.className = "cardSub";
            let h1 = document.createElement('h1');
            h1.textContent = iterator['title'];
            h1.id = 'titleCard';
            let h2 = document.createElement('h1');
            h2.textContent = "Price: "+iterator['price'] + " $";
            let Description = document.createElement('h1');
            Description.textContent = "Description: "+iterator['description'];
            let buttonConfirm = document.createElement('button');
            buttonConfirm.textContent = "Confirm";
            buttonConfirm.addEventListener('click',()=>{
                // const item = {
                //     value:iterator['id'],
                //     expiry: new Date().getTime() + 3600
                // }
                // console.log(iterator['id']);
                // localStorage.setItem('subID', JSON.stringify(item));
                axios({
                    method: 'post',
                    url: 'https://localhost:7073/api/controller/GetSub',
            
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                }).then(data => {

                });

                
                window.location.href = "/mainpage";
            });

            div.append(h1);
            div.append(h2);
            div.append(Description);
            div.append(buttonConfirm);
            divSub.appendChild(div);
        }
    });
    return (
        <div>
            <Header></Header>
            <div className='containerCard'>

            </div>
        </div>
    );
}
export default SubPage;