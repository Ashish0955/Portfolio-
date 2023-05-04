import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <Container>
      <div>
        <hr className="line" />
        <p className="copyright">
          © Copyright 2023.
          <br />
          Designed & Built by <span>Ashish Sharma</span>
        </p>
      </div>
    </Container>
  );
}

export default Footer;