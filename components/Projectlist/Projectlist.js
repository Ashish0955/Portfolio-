import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import DecorHome from '../../Assets/DecorHome.png'
import Stickynotes from '../../Assets/Stickynotes.png'
import Flashcards from '../../Assets/Flashcards.png'
import Calculator from '../../Assets/Calculator.png'
import Footer from '../../components/footer/footer';
import Gerocerylist from '../../Assets/Gerocerylist.png'
import Counter from '../../Assets/Counter.png'
import Api  from '../../Assets/Api search.png'
import PairingGame from '../../Assets/Pairing Game.png'
import Killdragon from '../../Assets/Killdragon.png'
import Json from '../../Assets/Nodejson.png'
import BurgerBuilder from '../../Assets/BurgerBuilder.png'



function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 text-decoration="underline" style={{ justifyContent: "center",textAlign:"center", color:"#116a7b" }}>  JavaScript Projects </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={DecorHome}
                isBlog={false}
                title="Decor Home"
                description=" Decor Home is a leading training network of India in the field of art. Decor Home was started in the year 2018, with the mission of providing a 360o platform for the talented and creative minds, to foresee their talents convert into reality. we with the help of our team. "
                ghLink="https://ashish0955.github.io/Decor-Home/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Stickynotes}
                isBlog={false}
                title="StickyNotes"
                description="We make sense of new information by organizing it in the context of things we already know. The color and size of sticky notes help us differentiate and arrange the information, and their stickiness enables us to reorganize it."
                ghLink="https://ashish0955.github.io/Project8-Sticky-Notes/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Flashcards}
                isBlog={false}
                title="FlashCards"
                description="These flashcards help you memorize project management topics by allowing you to repeatedly review information, definitions, and concepts. They enable you to easily identify project management terms, as well as other relevant information."
                ghLink="https://ashish0955.github.io/Project11-Flashcard/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Api}
                isBlog={false}
                title="Api Image Search"
                description="A project for API searching can be developed to allow users to search for different APIs and get the relevant results based on their search query. The project can be developed using various APIs like RapidAPI, ProgrammableWeb, or any other public API directory."
                ghLink="https://ashish0955.github.io/proiect25-unsplash-api/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={PairingGame }
                isBlog={false}
                title="Pairing Game "
                description="The game has 12 cards and each card consists of a container div named .memory-card, which holds two img elements. The first one represents the card front-face and the second its back-face.."
                ghLink="https://ashish0955.github.io/Project6-Pairing-Game/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Killdragon}
                isBlog={false}
                title="Kill the Dragon "
                description="A Kill the Dragon Game JS project is a web-based game application that challenges users to defeat a dragon by shooting arrows at it. The application is built using the JS library, which is a popular JavaScript library used for building user interfaces."
                ghLink="https://ashish0955.github.io/Project10-Kill-the-dargon/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Calculator}
                isBlog={false}
                title="Calculator"
                description="The central aim of the project was to test the hypothesis that providing so-called calculators would improve students' performance in those parts of the undergraduate first-year that relied on formal reasoning skills.Calculators are simply a tool students use to help solve problems."
                ghLink="https://ashish0955.github.io/Project12-Calculator/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Gerocerylist}
                isBlog={false}
                title="Gerocery List"
                description="This Grocery Check List App allows the user to store multiple grocery items that they are planning to buy so they could avoid missing some of the items.The application list all the grocery items and the user can add them by clicking the 'Add New Item' button, and by doing that will trigger the application."
                ghLink="https://ashish0955.github.io/Project9-Gerocery-list-/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Counter}
                isBlog={false}
                title="Counter"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://ashish0955.github.io/Project5-Counter/"

              />
            </Col>
            <h1 text-decoration="underline" style={{ justifyContent: "center",textAlign:"center", color:"#116a7b" }}>  NodeJS Projects </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Json}
                isBlog={false}
                title="Node Json"
                description=" The JSON Database Management System is a project that leverages Node.js to create a lightweight, file-based database system using JSON as the storage format. The system allows users to perform CRUD (Create, Read, Update, Delete) operations on JSON data, providing a simple and efficient solution for managing structured data."
                ghLink="https://nodejson-8djj.onrender.com/"

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Json}
                isBlog={false}
                title="Sql Database"
                description=" The SQL Database Project in Node.js is a web-based application that utilizes Node.js and an SQL database to create a robust and scalable database management system. It allows users to perform CRUD (Create, Read, Update, Delete) operations on SQL databases, providing a reliable solution for managing structured data.."
                ghLink="https://nodejson-8djj.onrender.com/"

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Json}
                isBlog={false}
                title="Mongoose Database"
                description=" The Mongoose Database Project in Node.js is a web-based application that utilizes the Mongoose library to interact with a MongoDB database. It allows users to perform CRUD (Create, Read, Update, Delete) operations on collections and manage data effectively."
                ghLink="https://nodejson-8djj.onrender.com/"

              />
            </Col>
            <h1 text-decoration="underline" style={{ justifyContent: "center",textAlign:"center", color:"#116a7b" }}>  ReactJS Projects </h1>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BurgerBuilder}
                isBlog={false}
                title="Burger Builder"
                description=" The Mongoose Database Project in Node.js is a web-based application that utilizes the Mongoose library to interact with a MongoDB database. It allows users to perform CRUD (Create, Read, Update, Delete) operations on collections and manage data effectively."
                ghLink="https://burger-builder-gold.vercel.app/"

              />
            </Col>
          </Row>
          
        
       
        <Footer></Footer>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist