import "./Skill.css";

function Skill() {
  return (
    <div className="skillBody">
      <h1 id="skillSectionTitle">Skills</h1>
      <h3 className="skillSubTitle">Frontend</h3>
      <ul className="skillList">
        <li>React</li>
        <li>Javascript</li>
        <li>Tailwind CSS</li>
      </ul>
      <h3 className="skillSubTitle">Backend</h3>
      <ul className="skillList">
        <li>ASP.NET Core Web API</li>
        <li>Entity Framework Core</li>
      </ul>
      <h3 className="skillSubTitle">Database</h3>
      <ul className="skillList">
        <li>SQL SERVER</li>
      </ul>
      <h3 className="skillSubTitle">Tools</h3>
      <ul className="skillList">
        <li>Postman</li>
        <li>Github</li>
      </ul>
    </div>
  );
}

export default Skill;
