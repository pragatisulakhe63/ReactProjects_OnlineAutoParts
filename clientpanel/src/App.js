import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './componant/Navbar/MainNavBar';
import HomeBanner from './componant/Home/HomeBanner';
import Features from './componant/Features/Features';
import Services from './componant/Services/Services';
import Products from './componant/Products/Products';
import Placeorder from './componant/Orders/Placeorder';
import CustomerForms from './componant/Orders/CustomerForms';
import CartContainer from './componant/Cart/CartContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Profile from "./componant/Profile/Profile"
import Login from "./componant/LoginPage/Login"
import Registration from "./componant/RegistrationPage/Registration"
import CustomerDetails from './componant/Orders/CustomerDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <MainNavBar />
              <HomeBanner />
               <Features /> 
               <Services /> 
              <Products />
            </div>
          } />
          
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/placeorder' element={<Placeorder/>}/>
          <Route path='/customerform' element={<CustomerForms/>}/>
          <Route path='/customerdetails' element={<CustomerDetails/>}/>
         
        </Routes>
      </Router> 
     {/* <Placeorder/> */}
     {/* <CustomerDetailsForm/> */}
    </div >
  );
}

export default App;