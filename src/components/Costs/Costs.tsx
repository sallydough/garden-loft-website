import React from 'react';
import './Costs.css';

const Costs: React.FC = () => {
  return (
    <section className="costs">
      <div className='costs-img'>
        <img src="src/assets/images/gloft6.jpg" alt="GL" />
      </div>
      <div className="costs-content">
        <h1>Garden Lofts can be<br/>more affordable than <br />living in care facility</h1>
        <button className='button-costs'>Compare our costs</button>
    </div>
    </section>
  );
};

export default Costs;