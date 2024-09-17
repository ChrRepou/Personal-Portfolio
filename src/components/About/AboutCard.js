import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Christina Repou </span>
            from <span className="blue"> Volos, Greece.</span>
            <br />I am currently <span className="blue">living</span> my dream
            in <span className="blue">Germany</span> and I'm doing my
            internship as a frontend developer in the{" "}
            <span className="blue">Kaufland E-Commerce</span> website at{" "}
            <span className="blue">Schwarz IT.</span>
            <br />I have completed my{" "}
            <span className="blue">Bc in Computer Science</span> with an
            expertise in <span className="blue">HCI</span> and later on the
            software engineering school{" "}
            <span className="blue">42 Heilbronn</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Digital Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#2950ff" }}>
            "The world belongs to the energetic!"{" "}
          </p>
          <footer className="blockquote-footer">Emerson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
