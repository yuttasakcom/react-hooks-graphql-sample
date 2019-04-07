import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    console.log("header");
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signout">Signout</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
