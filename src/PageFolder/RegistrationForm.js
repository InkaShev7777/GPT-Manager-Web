import './AuthenticationPage.css';
function Registration() {
    return (
        <div className='mainDiv'>
            <div id='form'>
                <h1>Authentication Form</h1>
                <input type="text" placeholder="Login..." />
                <input type="password" placeholder="Password..." />
                <input type="password" placeholder="Confirm Password..." />
                <input type="password" placeholder="Main..." />
                <button>Confirm</button>
            </div>
        </div>
    );
}
export default Registration;