import React from 'react';
import "./css/NavBar.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom';



function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Guruinfo
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/contactus">ContactUs</CustomLink>
        <CustomLink to="/aboutus">AboutUs</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default NavBar;
