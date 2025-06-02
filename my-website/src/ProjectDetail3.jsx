import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './ProjectDetail.css';
function ProjectDetail3() {
  const navigate = useNavigate();
  return (
    <div className="fullscreen-project">
      <div className="grid-pattern-project"></div>
      <div className="my-projectDetail-block">
      </div>

      <div className="projectDetail-img-block">
          <a target="_blank" href="SQL_SS.png"></a>
<img
  src="SQL_SS.png"
  alt="Screenshot 1"
  style={{ cursor: "zoom-in", maxWidth: "100%", height: "auto" }}
  onClick={(e) => {
    if (e.target.requestFullscreen) {
      e.target.requestFullscreen();
    }
  }}
/>
        <p className="PDdesc">The SQL code sets up two tables: one for storing the raw data used in regression analysis 
          which includes the number of interstates, maximum speed, and motor vehicle deaths only adding the 
          first 20 states in alphabetical order to allow for the rest to be added dynamically; and another 
          to store the computed regression coefficients a, b1, b2. It also includes the stored procedure 
          that inserts a new set of calculated coefficients into the RegressionResults table, 
          allowing results to be saved dynamically from the application.
          Its important to note this has been put in a single Query for purposes of the screenshot</p>
      </div>
      <div className="projectDetail-img-block">
<img
  src="Form1_VB.png"
  alt="Screenshot 1"
  style={{ cursor: "zoom-in", maxWidth: "100%", height: "auto" }}
  onClick={(e) => {
    if (e.target.requestFullscreen) {
      e.target.requestFullscreen();
    }
  }}
/>
        <p className="PDdesc">Form 1 serves as the core analytical component of the application. It allows the user to load data 
          from the RegressionData table in the SQL Server database, which contains fields for the number of interstates x1, maximum speed x2, 
          and motor vehicle deaths y. Once the data is loaded, Form 1 performs multiple linear regression analysis to calculate the 
          coefficients a, b1, and b2 in the regression equation: y = a + b1·x1 + b2·x2
          This is done by applying standard linear regression formulas using matrix or statistical operations coded in Visual Basic. After computing 
          the coefficients, the form displays them to the user and gives the option to save them to the RegressionResults table using the InsertRegressionResults 
          stored procedure. This enables the application to preserve calculated models for future use. The form also includes error handling 
          to manage data loading issues and ensures only valid numerical data is used in the regression calculation.





</p>
      </div>
      <div className="projectDetail-img-block">
<img
  src="Form2_VB.png"
  alt="Screenshot 1"
  style={{ cursor: "zoom-in", maxWidth: "100%", height: "auto" }}
  onClick={(e) => {
    if (e.target.requestFullscreen) {
      e.target.requestFullscreen();
    }
  }}
/>
        <p className="PDdesc">Form 2 is focused on prediction. It allows users to input new values for x1 number of interstates and x2 
          maximum speed, then retrieves the latest regression coefficients a, b1, b2 from the RegressionResults table. Using the 
          regression formula y = a + b1·x1 + b2·x2, it calculates and displays the predicted number of motor vehicle deaths. This form 
          demonstrates how the stored model can be used to make practical predictions based on updated inputs.
          Form 3 not shown in ss functions similarly to Form 2 in structure and validation but is designed for data entry. Users input 
          new values for x1, x2, and y, which are then inserted into the RegressionData table. This new data 
          becomes part of the dataset used in future regression analyses, ensuring the model remains current and can adapt as new real-world 
          data is collected.</p>
      </div>
      <div className="corner-tag"><p>AB.Prjct.3</p></div>
      <p><Link to="/" className="corner-home">⌂</Link></p>
      <div className="corner-back" onClick={() => navigate(-1)}>←</div>
      <div className="projectDetail-block">
        <p>Through this project, I gained hands-on experience with regression analysis, SQL Server database integration, and multi-form Visual Basic application
           development. I learned how to design and interact with relational databases, implement stored procedures, and perform data-driven predictions 
           using statistical models. These skills directly support my goal of becoming a data engineer by strengthening my ability to manage, transform, and analyze data, 
           while also building applications that leverage data for real-world insights.</p>
        <p><Link to="/project" className="link-style">[Back to Projects]</Link></p>
        <p><Link to="/" className="link-style">[Back to Home]</Link></p>
      </div>
    </div>
  );
}


export default ProjectDetail3;