import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Trainee</h4>
                <h5>AIAdventure</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Analyzing real-time project datasets and contributing insights that
              help improve decision-making across teams. Built data cleaning
              scripts in Python, reducing manual work by 20%+. Developed visual
              dashboards to monitor user metrics and business performance.
              Working with mentors on mini end-to-end analytics projects
              including data extraction, transformation, and visualization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Automation Intern</h4>
                <h5>Adisoft Technologies</h5>
              </div>
              <h3>JUN–JUL 2025</h3>
            </div>
            <p>
              Built a Python-driven integration system for a Laser Marking
              Machine, enabling seamless PC-to-machine communication via
              Serial/Modbus/SDK. Developed high-reliability automation scripts to
              send marking commands, control coordinates, trigger operations, and
              process machine feedback. Created operator-friendly tools for
              uploading text, QR/serial data, and initiating marking cycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech AI & Data Science</h4>
                <h5>AISSMS IOIT, Pune</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Artificial Intelligence & Data
              Science. Relevant coursework: Data Structures & Algorithms,
              Database Management, Object-Oriented Programming, Computer
              Networks, Machine Learning, Deep Learning, Theory of Computation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
