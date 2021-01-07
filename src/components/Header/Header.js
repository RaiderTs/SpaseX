import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";
import logo from "../../logo.svg";

// Копируем с исходника верстку (для исправления названия - выдиляем слово
//   нажимаем alt+enter либо ctrl+h для замены)

const Header = (props) => (
  <header className="header">
    <Link>
      <img src={logo} alt="Logo Space X" className="logo" />
    </Link>

    <nav className="main-nav nav">
      <ul className="list">
        {/* Перебераем то что пришло с пропов */}
        {/* index - передаем для ключа */}
        {props.rockets.map((item, index) => (
          <li key={index} className="item">
            <Link
              to="/rocket"
              onClick={() => {
                // event.preventDefault();
                props.changeRocket(item);
              }}
              className="item-link"
            >
              {item}
            </Link>
          </li>
        ))}

        {/* <li className="item">
          <a href="/" className="item-link">
            Falcon 1
          </a>
        </li>
        <li className="item">
          <a href="/" className="item-link">
            Falcon 9
          </a>
        </li>
        <li className="item">
          <a href="/" className="item-link">
            Falcon Heavy
          </a>
        </li>
        <li className="item">
          <a href="/" className="item-link">
            Updates
          </a>
        </li> */}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <NavLink exact to="/" className="item-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="calendar" className="item-link" activeClassName="active">
            Calendar
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
