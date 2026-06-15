import "./Project.css";
import { useState } from "react";
import DashBoard from "../../assets/SLVL/Employee_Dashboard.jpeg";
import Approvals from "../../assets/SLVL/Approvals_Page.jpeg";
import AddRequest from "../../assets/SLVL/Add_RequestForm.jpeg";
import CounselorDashboard from "../../assets/Guidance/Picture1.jpg";
import AddAppointment from "../../assets/Guidance/Picture2.jpg";
import AppointmentList from "../../assets/Guidance/Picture3.jpg";

function Project() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <h1 id="projectSectionTitle">Projects</h1>
      <h3 className="projectTitle">Leave Management System(OJT Project)</h3>
      <p className="projectDescription">
        A web-based system made during my OJT. It is used to file, approve, and
        track employee leave requests. It helps make leave processing faster and
        easier by using a digital system instead of paper.
      </p>
      <div className="projectContainer">
        <img src={DashBoard} alt="adminSetting" className="projectImg" />
        <img src={Approvals} alt="approvals" className="projectImg" />
        <img src={AddRequest} alt="addRequest" className="projectImg" />
      </div>

      <h3 className="projectTitle">
        Guidance Counseling Appointment Scheduling System With Descriptive
        Analytics(Capstone)
      </h3>
      <p className="projectDescription">
        A web-based system that allows students to book appointments with
        guidance counselors easily. It helps manage schedules, avoid conflicts,
        and keep records of appointments. It also includes simple analytics to
        show reports like the number of appointments and common reasons for
        visits.
      </p>
      <div className="projectContainer">
        <img
          src={CounselorDashboard}
          alt="counselorDashboard"
          className="projectImg"
        />

        <img src={AddAppointment} alt="addAppointment" className="projectImg" />
        <img
          src={AppointmentList}
          alt="appointmentList"
          className="projectImg"
        />
      </div>
    </div>
  );
}

export default Project;
