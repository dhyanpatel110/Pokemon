import React from "react";
import { Link } from "react-router-dom";
// ** Css
import "./styles.css";
// ** React bootstrap
import { Container } from "react-bootstrap";
// ** Image
import logo from "../../assets/img/header-logo.png";

const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
        <div className="text-center">
          <Link to="/">
            <img title="Go to home" alt="Go to home" src={logo} height={100} />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
