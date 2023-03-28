import './Header.css';
function Header() {
    return(
        <div className="headerStyle">
            <img id='logoHeader' src="./GPT_Logo2.png" alt="gptLogo"/>
            <img onClick={()=>{window.location.href = '/authentication'}} id='iconProfile' src="./profileicon.png" alt="icon"/>
        </div>
    );
}
export default Header;