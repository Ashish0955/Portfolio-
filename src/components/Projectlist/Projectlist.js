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



function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
                description=""
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
          </Row>
          
        
       
        <Footer></Footer>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist