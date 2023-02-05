
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";
  
  function Routers() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Switch>
        <Route path="/Orders" ><Orders /></Route>
          <Route path="/"><Home /></Route>  

              
              </Switch>
         
    
      
      </BrowserRouter>
    );
  }

export default Routers;