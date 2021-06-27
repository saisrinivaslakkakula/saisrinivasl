import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHandshake } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { FaCloud } from 'react-icons/fa'
import { FaClipboard } from 'react-icons/fa'


const WorkTimeline = () => {
    return (
        <div>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan 2020 - Jan 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaHandshake/>}
  >
    <h3 className="vertical-timeline-element-title">Associate Consultant</h3>
    <h6 className="vertical-timeline-element-subtitle">Capgemini Technology Services Pvt. Ltd., Hyderabad, India</h6>
    <p>
      Digital Transformation, Requirement Analysis, Custom Automation Tool Development
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan 2019 - Dec 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon = {<FaLaptopCode/>}
  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
    <h6 className="vertical-timeline-element-subtitle">Capgemini Technology Services Pvt. Ltd., Hyderabad, India</h6>
    <p>
      Full Stack Web Development, Custom Automation tool Development
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaCloud/>}
  >
    <h3 className="vertical-timeline-element-title"> Software Engineer</h3>
    <h6 className="vertical-timeline-element-subtitle">Capgemini Technology Services Pvt. Ltd., Chennai, India</h6>
    <p>
      Legacy modernization associate, Backend Web Developer
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sept 2017 - November 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaClipboard/>}
  >
    <h3 className="vertical-timeline-element-title">Learning & Development Coordinator</h3>
    <h6 className="vertical-timeline-element-subtitle">Capgemini Technology Services Pvt. Ltd., Chennai, India</h6>
    <p>
      Designing Training Curriculum, Conductingtraining sessions, Performing learning evaluation and execution.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
            
        </div>
    )
}

export default WorkTimeline
