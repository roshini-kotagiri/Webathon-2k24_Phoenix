import React from "react";
// import { Link } from "react-router-dom";
import "./index.css";
const MyClass = () => {

      return (
        <div>
            <h1 className="text-info">Hello</h1>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NexFund</title>
          <link rel="stylesheet" href="index.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" /> 
          <nav className="navbar">
            <div className="container">
              <a className="navbar-brand" href="#">NexFund</a>
              <ul className="nav-left">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle">Explore <i className="fas fa-caret-down" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">All Categories</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Social Causes</a></li>
                    <li><a href="#">Creative Projects</a></li>
                  </ul>
                </li>
                <li><a href="#">Our Top 10 Finds</a></li>
                <li>
                  <form className="search-form" action="#">
                    <input type="search" placeholder="Search for campaigns..." aria-label="Search" />
                    <button type="submit"><i className="fas fa-search" /></button>
                  </form>
                </li>
              </ul>
              <ul className="nav-right">
                <li><a href="#">Start a Campaign</a></li>
                <li><a href="#">What We Do</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </nav>
          <header>
            <div className="first">
              <h1>NexFund</h1>
              <p>Your Donation, Their Lifeline</p>
            </div>
            <img src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="200px" />
          </header>
          <main>
            <div className="row">
              <div className="card">
                <img src="./istockphoto-1208096060-612x612-removebg-preview.png" alt="" width="200px" height="150px" />
                <h2>Medical Funds</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo repudiandae voluptas voluptatum ducimus in pariatur repellat illum aut expedita?</p>
                <button className="btn">Explore</button>
              </div>
              <div className="card">
                <img src="https://cdn-res.keymedia.com/cdn-cgi/image/w=840,h=504,f=auto/https://cdn-res.keymedia.com/cms/images/us/026/0321_638108705588061009.jpg" alt="" width="200px" />
                <h2>Disasters Funds</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo repudiandae voluptas voluptatum ducimus in pariatur repellat illum aut expedita?</p>
                <br /><button className="btn">Explore</button>
              </div>
              <div className="card">
                <img src="./istockphoto-1197933531-612x612-removebg-preview.png" alt="" width="200px" />
                <h2>Education Funds</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo repudiandae voluptas voluptatum ducimus in pariatur repellat illum aut expedita?</p>
                <br /><button className="btn">Explore</button>
              </div>
              <div className="card">
                <img src="data:image/jpeg;base64,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" alt="" width="150px" height="150px" />
                <h2>Urgent Needs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo repudiandae voluptas voluptatum ducimus in pariatur repellat illum aut expedita?</p>
                <button className="btn">Explore</button>
              </div>
            </div>
          </main>
        </div>
      );
    }
  

export default MyClass;