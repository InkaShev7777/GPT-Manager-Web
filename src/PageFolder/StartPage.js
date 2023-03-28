import Header from "./Elements Page/Header";
import './Startpage.css';
function StartPage() {
    return(
        <div className="mainStyle">
            <Header></Header>
            <div>
                {/* <h1 id="h1Text">To get stared you need to register or log in your account</h1> */}
                <video style={{marginLeft:'8%',marginTop:'5%'}} src='./startVideo.MOV' width="80%" height="80%" controls autoPlay='autoplay'>
                    {/* <source src="" autoPlay/> */}
                </video>
            </div>
        </div>
    );
}
export default StartPage;