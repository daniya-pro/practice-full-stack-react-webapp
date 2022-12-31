import './App.css';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  return (
<BrowserRouter>     
<Routes>
<Route path="/login" element={<LoginPage/>}/>   <Route path="/" element={<Home/>}/></Routes> 
</BrowserRouter>    
 
 
    );
}

export default App; 
