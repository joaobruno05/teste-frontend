import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-container navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid div-container">
        <div className="title">
          <p>Healthy Food</p>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#links-menu">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="links-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#healthy-recipes">HEALTHY RECIPES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">BLOG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#join">JOIN</a>
            </li>
            <li className="nav-item">
              <Link to="/register">
                <button className="btn btn-outline-success btn-lg" type="button">
                  REGISTER
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
