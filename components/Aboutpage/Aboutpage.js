import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import Footer from "../../components/footer/footer";
import {
  SiAtom,
  SiVisualstudiocode,
  SiPostman,
  SiAzuredevops,
  SiVercel,
} from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCompass,
  DiGit,
  DiBootstrap,
  DiAws,
  DiAtlassian,
  DiMysql,
  DiNpm,
  DiDatabase,
} from "react-icons/di";
import {  SiFirebase, SiNextdotjs } from "react-icons/si";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>

            <p className="aboutdetails" >
            Hello! My name is <strong> Ashish Sharma </strong>, and I am a <strong> full-stack developer </strong>. <br/> 
            As a full stack developer, I thrive  on building complex systems that connect the dots between front-end   and   back-end technologies . <br/>With a passion for solving problems and a commitment to delivering high-quality code, I'm always seeking new challenges and opportunities to expand my skillset. <br/>
            If you would like to learn more about my skills and what i work on please scroll down .
            </p>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
       
        
        <Row className="textbackground"  style={{ justifyContent: "center", paddingBottom: "100px", paddingTop: "80px"}}>
        <h1>My Skills  </h1>
          
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://isocpp.org/">
            <CgCPlusPlus />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.javascript.com/">
            <DiJavascript1 />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://nodejs.dev/en/">
            <DiNodejs />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://legacy.reactjs.org/">
            <DiReact />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.mongodb.com/">
            <DiMongodb />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://nextjs.org/">
            <SiNextdotjs />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://git-scm.com/">
            <DiGit />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://firebase.google.com/">
            <SiFirebase />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.npmjs.com/package/node-compass">
            <DiCompass />
          </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://aws.amazon.com/free/?trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=Cj0KCQjwr82iBhCuARIsAO0EAZyjsEuhowJQ4emm5l_LHuEzLBcAvOIWN_KAnRgzTLoc97pOYlgpgDMaAu4CEALw_wcB:G:s&s_kwcid=AL!4422!3!453325184782!e!!g!!aws!10712784856!111477279771&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">
            <DiAws/>
          </a>  
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://getbootstrap.com/">
            <DiBootstrap />
          </a>  
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.atlassian.com/">
            <DiAtlassian />
          </a>  
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.mysql.com/">
            <DiMysql />
          </a>  
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.npmjs.com/">
            <DiNpm />
          </a>  
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.oracle.com/">
            <DiDatabase />
          </a>  
          </Col>
        </Row>
      
        <Row className="textbackground" style={{ justifyContent: "center", paddingBottom: "80px" }}>
        <h1>What I Work On  </h1>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.npmjs.com/package/atom">
            <SiAtom />
          </a> 
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://code.visualstudio.com/">
            <SiVisualstudiocode />
          </a>      
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.postman.com/">
            <SiPostman />
          </a> 
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://vercel.com/">
            <SiVercel />
          </a> 
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.azuredevopslabs.com/">
            <SiAzuredevops />
          </a> 
          </Col>
        </Row>
        <span></span>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Aboutpage;
