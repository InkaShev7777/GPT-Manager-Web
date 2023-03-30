import './AuthenticationPage.css';
import axios from 'axios';
function Registration() {
    return (
        <div className='mainDiv'>
            <div id='form'>
                <h1>Authentication Form</h1>
                <input id='login' type="text" placeholder="Login..." />
                <input id='pass' type="password" placeholder="Password..." />
                <input type="password" placeholder="Confirm Password..." />
                <input id='mail' type="mail" placeholder="Main..." />
                <button onClick={()=>{
                    axios({
                        method: 'post',
                        url: 'https://localhost:7073/api/controller/regUser',
                        data: {
                            "userName": document.getElementById('login').value,
                            "password": document.getElementById('pass').value,
                            "email":  document.getElementById('mail').value
                        },
                        dataType: "dataType",
                        headers: {
                            'Accept': '*/*',
                            'Content-Type': 'application/json'
                        }
                    }).then(data => {
                        console.log(data);
                        axios({
                            method: 'post',
                            url: 'https://localhost:7073/api/controller/Login',
                            data: {
                                "userName": document.getElementById('login').value,
                                "password": document.getElementById('pass').value
                            },
                            dataType: "dataType",
                            headers: {
                                'Accept': '*/*',
                                'Content-Type': 'application/json'
                            }
                        }).then(data => {
                            let token = data['data']['token'];
                            let idUser = data['data']['id'];
                            console.log(data);
                            if(token){
                                sessionStorage.setItem('token', token);
                                sessionStorage.setItem('idUser',idUser);
                                let idSub = localStorage.getItem('subID');
                                const item = JSON.parse(idSub);
                                if(idSub){
                                    if(new Date().getTime() > item.expiry){
                                        window.location.href = "/mainpage";
                                    }
                                    else{
                                        window.location.href = '/subpage';
                                    }
                                }
                                else{
                                    window.location.href = '/subpage';
                                }
                            }
                        });
                    });
                }}>Confirm</button>
            </div>
        </div>
    );
}
export default Registration;