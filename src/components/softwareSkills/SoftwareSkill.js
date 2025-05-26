import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaWindows,
  FaCode,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiVisualstudiocode,
  SiWindsurfing,
} from "react-icons/si";

const skillIconMap = {
  HTML5: <FaHtml5 color="#E34F26" size="1em" />,
  CSS3: <FaCss3Alt color="#1572B6" size="1em" />,
  JavaScript: <FaJsSquare color="#F7DF1E" size="1em" />,
  Java: <FaJava color="#007396" size="1em" />,
  C: <SiC color="#E94E32" size="1em" />,
  "C++": <SiCplusplus color="#00599C" size="1em" />,
  ReactJS: <FaReact color="#61DAFB" size="1em" />,
  NodeJS: <FaNodeJs color="#339933" size="1em" />,
  WindSurf: <FaCode color="#3DDC84" size="1em" />,
  "Visual Studio Code": <SiVisualstudiocode color="#02569B" size="1em" />,
  MySQL: <SiMysql color="#4479A1" size="1em" />,
  Git: <FaGit color="#E94E32" size="1em" />,
};

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            const iconComponent = skillIconMap[logo.skillName];
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${logo.skillName}`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  {iconComponent ? (
                    iconComponent
                  ) : (
                    <span>{logo.skillName}</span> // fallback
                  )}
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
