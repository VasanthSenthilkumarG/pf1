import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vasanth Senthilkumar </span>
            from <span className="purple"> Salem, TN, India.</span>
            <br />I am Completed my UG in AVS EC Affilicated by Anna University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Practice Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Starts to, solve the problem. Then, write the code."{" "}
          </p>
          <footer className="blockquote-footer">Vasnth Senthilkumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
