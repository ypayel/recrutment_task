import { Routes, Route } from 'react-router-dom';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<MainPage/>}/>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
