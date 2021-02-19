import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react"
// import data from "../yourdata"
import Fade from "react-reveal/Fade"
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

const Timeline = () => {
    return (
        <div className="section" id="timeline">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Work Experience</h1>
                    </Fade>
                    <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="2019 - 2020"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">NextChymia Consulting HK Limited</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Developed in-house and open-source software.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="2019 - 2019"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Emurgo HK Limited</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Participated in blockchain accerlator program. developed in-house and open-source software.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="2017 - 2019"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Infrastructure Specialist</h3>
                        <h4 className="vertical-timeline-element-subtitle">IBM</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Set up and manage unix system(AIX, RHEL) in enterprise scale projects.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="2013 - 2017"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Information Engineering</h3>
                        <h5 className="vertical-timeline-element-subtitle">Bachelor's degree</h5>
                        <h3 className="vertical-timeline-element-subtitle">The Chinese University of Hong Kong</h3>
                    </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
  }

export default Timeline;