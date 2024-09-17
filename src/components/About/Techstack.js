import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { RiVuejsFill } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiBootstrap,
  DiCss3,
  DiDatabase,
  DiDocker,
  DiHtml5,
  DiJqueryLogo,
  DiMysql,
  DiNpm,
  DiSass,
} from "react-icons/di";
import {
  SiPostgresql,
  SiStorybook,
  SiVite,
  SiWebpack,
  SiIbeacon,
  SiBabel
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVuejsFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIbeacon />
      </Col>
    </Row>
  );
}

export default Techstack;
