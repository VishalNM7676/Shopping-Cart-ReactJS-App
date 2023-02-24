import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon="fa-solid fa-truck-fast" />

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

        <div className="container-fluid ">
          <div className="row text-center " id="return">
            <div className="col-md d-flex justify-content-around">
              <h5>EASY RETURNS</h5>
              
              <h5>PROFILE</h5>
              <h5>FREE SHIPPING</h5>
              <h5>CASH ON DELIVERY</h5>
              <h5>SECURE PAYMENTS</h5>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row text-center" id="row">
            <div className="col-md-3">
              <h3 className="mb-4">About</h3> 
              <FontAwesomeIcon icon="fa-solid fa-truck-fast" />
              <h5>Contact Us</h5>
              <h5>About Us</h5>
              <h5>Corporate Information</h5>

            </div>
            <div className="col-md-3">
            <h3 className="mb-4"> Help </h3>
            <h5>Payments</h5>
            <h5>Shipping</h5>
            <h5>Returns</h5>
            </div>
            <div className="col-md-3">
            <h3 className="mb-4">Policy</h3>
            <h5>Return Policy</h5>
            <h5>Terms to use</h5>
            <h5>Security</h5>
            </div>
            <div className="col-md-3">
            <h3 className="mb-4 font-weight-normal">Social</h3>
            <h5>Email</h5>
            <h5>Facebook</h5>
            <h5>Youtube</h5>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;