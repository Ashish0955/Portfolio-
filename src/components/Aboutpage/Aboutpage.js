import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import Footer from "../../components/footer/footer";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a self-taught Full Stack Developer from India. I build
              websites with a focus on providing the experience for everyone
              using them and responsiveness. Curious to learn more about
              developing scalable distribution systems, love problem solving,
              and care about writing and maintainable code.
            </p>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
       
        
        <Row className="textbackground"  style={{ justifyContent: "center", paddingBottom: "100px", paddingTop: "80px"}}>
        <h1>My Skills  </h1>
          
          <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
          </Col>
        </Row>
      
        <Row className="textbackground" style={{ justifyContent: "center", paddingBottom: "80px" }}>
        <h1>What I Work On  </h1>
          <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVercel />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
          </Col>
        </Row>
        <span></span>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Aboutpage;
