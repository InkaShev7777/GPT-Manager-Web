import './AuthenticationPage.css';
import axios, { Axios } from 'axios';
function Authentication() {
    return (
        <div className='mainDiv'>
            <div id='form'>
                <h1>Authentication Form</h1>
                <input id='login' type="text" placeholder="Login..." />
                <input id='pass' type="password" placeholder="Password..." />
                <button onClick={() => {
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
                            // console.log(item.expiry);
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
                    
                }}>Confirm</button>
                <p>No Account?</p>
                <a href="/registration">Sign Up</a>
            </div>
        </div>
    );
}
export default Authentication;