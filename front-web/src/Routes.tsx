
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";
  
  function Routers() {
    return (
      <BrowserRouter>
        <Navbar/ >
        <Switch></Switch>
          <Route path="/">
            <Home/>
              </Route>   
          <Route path="Orders" >

            <Orders/>
          </Route>
    
      
      </BrowserRouter>
    );
  }

export default Routers;