import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import masterbrain from "../../Assets/Projects/masterbrainDemo.png";
import masterbrainAPI from "../../Assets/Projects/masterbrain-API.jpg";
import robofriends from "../../Assets/Projects/robofriendsDemo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={masterbrain}
              isBlog={false}
              title="Masterbrain"
              description="Face detection web application using clarifai API, a trained AI model to detect faces in images. The frontend has been built with React.js. The app is communicating with the masterbrain-API, an API made with node.js, express.js, knex.js and gRPC, to fetch all the information about the user profiles. All the data are stored in a postgreSQL database."
              ghLink="https://github.com/ChrRepou/Masterbrain"
              demoLink="https://masterbrain.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={masterbrainAPI}
              isBlog={false}
              title="Masterbrain-API"
              description="An API built with node.js, express.js, knex.js and gRPC, to give to the masterbrain application access to user information, add new users, update current profiles and make calls to clarifai API, an AI API to provide the masterbrain application with the important information about the faces detection."
              ghLink="https://github.com/ChrRepou/Masterbrain-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robofriends}
              isBlog={false}
              title="Robofriends"
              description="Web application built with React.js making calls to the jsonplaceholder API and the robohash API to fetch user information and robot pictures to create a fake friends' database where you can search them according to their name."
              ghLink="https://github.com/ChrRepou/robofriends"
              demoLink="https://chrrepou.github.io/robofriends/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
