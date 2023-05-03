import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <Container>
      <div>
        <hr className="line" />
        <p className="copyright">
          © Copyright 2023.
          <br />
          Designed & Built by <span>ashishsharma</span>
        </p>
      </div>
    </Container>
  );
}

export default Footer;