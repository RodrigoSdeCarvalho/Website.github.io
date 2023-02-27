import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CNN image classifier",
      description: "Classifies Bart's and Homer's images with CNNs", 
      imgUrl: projImg1,
    },
    {
      title: "Object Tracking with OpenCV and CSRT", 
      description: "Tracks a selected object in an input video with OpenCV and CSRT",
      imgUrl: projImg2,
    },
    {
      title: "Face Recognitizer with OpenCV and LBPH",
      description: "Recognizes my face through webcam with OpenCV and LBPH. Detects if the face is mine or someone else's",
      imgUrl: projImg3,
    },
    {
      title: "ProcessorBehaviorClusterizer",
      description: "This cluterizer identifies save processor behavior in order to tell when a computer may have been invaded or not.",
      imgUrl: projImg4,
    },
    {
      title: "German Nine Men's Morris",
      description: "Game inspired on the original nine men's morris, developed by me and two friends",
      imgUrl: projImg5,
    },
    {
      title: "Anomaly Detector With CNN autoencoder",
      description: "anomaly detection on a dataset, with a Convolutional Autoencoder (CAE)",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of my projects are below. Some images are only illustrative</p>
                <p><a href="https://github.com/RodrigoSdeCarvalho?tab=repositories" target="_blank">Click here to access the github repositories of the projects. </a></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}