import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      {loading ? (
        <section className="section">
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className="section">
          <div className="title">
            <h2>experience</h2>
            <div className="underline" />
          </div>
          <div className="jobs-center">
            <div className="btn-container">
              {jobs.map((item, index) => (
                <button
                  className={`job-btn ${index === value && "active-btn"}`}
                  key={item.id}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              ))}
            </div>
            {/* job info */}
            <article className="job-info">
              <h3>{jobs[value].title} </h3>
              <h4>{jobs[value].company}</h4>
              <p className="job-date">{jobs[value].dates}</p>
              {jobs[value].duties.map((duty, index) => (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              ))}
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
