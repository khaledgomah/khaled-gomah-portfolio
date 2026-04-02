import React from "react";

const Stats = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={index * 100}
            >
              <h3 className="stat-value gradient-text">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
