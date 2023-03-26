import './App.css';
import {AuthContextProvider} from '../context/AuthContext'
import {Routes, Route} from 'react-router-dom'
import Login from '../Login';
import Signup from '../Signup'
import Home from '../home/Home';
import Updates from '../update/Update';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/todos/:id' element={<Updates />}></Route>
      </Routes>
      
    </AuthContextProvider>
  );
}

export default App;
