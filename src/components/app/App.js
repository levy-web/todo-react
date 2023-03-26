import './App.css';
import {AuthContextProvider} from '../context/AuthContext'
import {Routes, Route} from 'react-router-dom'
import Login from '../Login';
import Signup from '../Signup'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      
    </AuthContextProvider>
  );
}

export default App;
