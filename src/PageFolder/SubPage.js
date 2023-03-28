import './SubPage.css';
import Header from './Elements Page/Header';
function SubPage() {
    //
    //axis get all sub category && map 
    //
    return (
        <div>
            <Header></Header>
            <div className='containerCard'>
                <div className='cardSub' onClick={()=>{window.location.href = 'mainpage'}}>
                    <h1>Free</h1>
                    <p>Description</p>
                </div>
            </div>
        </div>
    );
}
export default SubPage;