import Login from "./Register";
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Home(){
    return(
        <div className="nav justify-content-end">
           
           <div className="nav-item">
                  <Link
                    className="nav-link"
                    to="register"
                    style={{ color: "black" }}
                  >
                    Register
                  </Link>
                </div>
                <div className="nav-item">
                  <Link
                    className="nav-link"
                    to="login"
                    style={{ color: "black" }}
                  >
                    Login
                  </Link>
                </div>
                <div className="nav-item">
                  <Link
                    className="nav-link"
                    to="Help"
                    style={{ color: "black" }}
                  >
                    Help
                  </Link>
                </div>
                <div className="container">
        <Outlet />
      </div>
        </div>
  
    )
}
export default Home;
