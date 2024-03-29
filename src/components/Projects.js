import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project-3.png";
import projImg4 from "../assets/img/project-4.png";
import projImg5 from "../assets/img/project-5.png";
import projImg6 from "../assets/img/project-6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Currency Converter",
      description: "Javascript project",
      imgUrl: projImg1,
      projectUrl: "https://github.com/EvilXpirit/Currency-Converter",
    },
    {
      title: "Calculator",
      description: "Javascript project",
      imgUrl: projImg2,
      projectUrl: "https://github.com/EvilXpirit/BRUH-calculator",
    },
    {
      title: "Timer",
      description: "Javascript project",
      imgUrl: projImg3,
      projectUrl: "https://github.com/EvilXpirit/Batman-Timer",
    },
    {
      title: "Legal Advisor System",
      description: "Machine Learning Project",
      imgUrl: projImg5,
      // projectUrl: "#",
    },
    {
      title: "Movie Recommender System",
      description: "Machine Learning Project",
      imgUrl: projImg4,
      projectUrl: "https://github.com/EvilXpirit/movierecommender",
    },
    {
      title: "Portfolio Website",
      description: "React Js project",
      imgUrl: projImg6,
      projectUrl: "https://github.com/EvilXpirit/Portfolio",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects that i have made, as of now</p>
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
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
