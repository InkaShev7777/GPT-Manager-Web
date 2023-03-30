import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import StartPage from './PageFolder/StartPage';
import Authentication from './PageFolder/AuthenticationPage';
import Registration from './PageFolder/RegistrationForm';
import SubPage from './PageFolder/SubPage';
import MainPage from './PageFolder/MainPage';
import HistoryPage from './PageFolder/HistoryPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage></StartPage>}></Route>
        <Route path='/authentication' element={<Authentication/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/subpage' element={<SubPage/>}></Route>
        <Route path='/mainpage' element={<MainPage/>}></Route>
        <Route path='/historypage' element={<HistoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
