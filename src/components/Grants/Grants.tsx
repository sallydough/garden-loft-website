
import GLCost from  '../../assets/images/gl-cost.png'
import './Grants.css'

function Grants() {
  return (
    <section id="rules-and-grants">
    <img src={GLCost} alt="GL-Cost Image" />
    <div className="safety-content">
      <h1>Garden Lofts
are now permitted in all <br/> Calgary neighborhoods and qualify
for the <br/> $10,000 secondary suite grant</h1>
      <button className='button-safety-cost'>Learn about the new rules and costs</button>
  </div>
  </section>
  )
}

export default Grants