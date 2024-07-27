import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navigation.css'


export const Navigation = () => {
    return (
      <nav className="navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">All</NavLink>
        </li>
        <li>
          <NavLink to="/fullstack-development" activeClassName="active-link">Full Stack Development</NavLink>
        </li>
        <li>
          <NavLink to="/data-science" activeClassName="active-link">Data Science</NavLink>
        </li>
        <li>
          <NavLink to="/cyber-security" activeClassName="active-link">Cyber Security</NavLink>
        </li>
        <li>
          <NavLink to="/career" activeClassName="active-link">Career</NavLink>
        </li>
      </ul>
    </nav>
  )
}
