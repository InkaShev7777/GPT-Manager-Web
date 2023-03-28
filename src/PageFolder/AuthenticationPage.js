import './AuthenticationPage.css';
function Authentication() {
    return (
        <div className='mainDiv'>
            <div id='form'>
                <h1>Authentication Form</h1>
                <input type="text" placeholder="Login..." />
                <input type="password" placeholder="Password..." />
                <button onClick={()=>{window.location.href = '/subpage'}}>Confirm</button>
                <p>No Account?</p>
                <a href="/registration">Sign Up</a>
            </div>
        </div>
    );
}
export default Authentication;