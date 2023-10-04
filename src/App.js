
import './App.css';
import Home from './components/screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom" ;
import Login from './components/screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Signup } from './components/screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './components/screens/MyOrder';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="creatuser" element={<Signup/>}/>
          <Route exact path="/myOrder" element={<MyOrder/>}/>
        </Routes>
      </div>
      
    </Router>
    </CartProvider>
  );
}

export default App;
 