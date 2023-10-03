
import { Link } from "react-router-dom";
import './B_abouts.css';

const B_abouts = (props) => {
  return (
    <div>


      <section className="B_abouts" id="B_abouts">
        <div className='banner'>
          <div className='b-heading'><h1>{props.name}</h1></div>

        </div>
      </section>
    </div>
  )
}


export default B_abouts;