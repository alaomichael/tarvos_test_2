import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {AiOutlineFileSearch, AiOutlineShoppingCart} from 'react-icons/ai';

//import { BurgerIcon } from 'react-icons';
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
    margin-bottom: 20px;
/*   margin-bottom: 60px; */
  /* background: #f8f8f8; */

  .logo a {
   /*  padding-top: 30px;
    padding-bottom: 30px; */
    display: flex;
    flex-direction: column;
    text-decoration: none;
    
    p {
      width: 500px;
      display: block;
    }

p.brand {
  width:75px;
height:75px;
background-color:black;
/* padding: 30px; */
margin: 0px 50%;
/* margin-top:70px; */
/* float:left; */
box-shadow:1px 1px 1px 1px black;
text-align: center;
border-radius:50px;
font-size: 1.5em;
color:white;
padding:  20px 0px;
}

    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    /* display: none; */
    color: #222;
    font-size: 2rem;
    display: inline;    
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 5px;
      padding-right:5%;
      justify-content: flex-start;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
     /*  padding-left: 15px; */
      padding-top: 0px !important;
      margin-right:50vw;
    }

    
  .logo a {
   /*  padding-top: 30px;
    padding-bottom: 30px; */
    display: flex;
    flex-direction: column;
    text-decoration: none;
    
    p {
      width: 500px;
      display: block;
    }

p.brand {
  width:75px;
height:75px;
background-color:black;
/* padding: 30px; */
margin: 0px 50%;
/* margin-top:70px; */
/* float:left; */
box-shadow:1px 1px 1px 1px black;
text-align: center;
border-radius:50px;
font-size: 1.5em;
color:white;
padding:  20px 0px;
}

    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 20%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 200px;
      }
    }

    /*New for logo*/

  .logo a {
   /*  padding-top: 30px;
    padding-bottom: 30px; */
    display: flex;
    flex-direction: column;
    text-decoration: none;
    
    p {
      width: 500px;
      display: block;
    }

p.brand {
  width:75px;
height:75px;
background-color:black;
/* padding: 30px; */
margin: 0px 50%;
/* margin-top:70px; */
/* float:left; */
box-shadow:1px 1px 1px 1px black;
text-align: center;
border-radius:50px;
font-size: 1.5em;
color:white;
padding:  20px 0px;
}

    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }

    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation className="container">
        <div className="logo">
          <Link to="/">
            <p className="brand">N8</p>
                      </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
              {/*  <NavLink activeClassName="active" to="/">
              <li>home</li>
            </NavLink>
          <NavLink activeClassName="active" to="/about">
              <li>about</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>contact</li>
            </NavLink> 
        <NavLink activeClassName="active" to="/detail">
            <li>    details</li>
            </NavLink>
         */}
              <NavLink activeClassName="active" to="/checkout">
              <li><AiOutlineShoppingCart /></li>
            </NavLink>  
             <NavLink activeClassName="active" to="/">
             <li><AiOutlineFileSearch /></li>
            </NavLink>
            
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
