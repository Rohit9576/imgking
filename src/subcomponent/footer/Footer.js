import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='grid grid-four-column'>
          <div className='f-about'>
            <h3><i className="fas fa-fire"/> Rohit kumar</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis atque voluptas provident
              neque iusto consequuntur iste doloribus minima. Veniam, est? Sit perspiciatis perferendis placeat
              dolorem omnis! Minima</p>
              
              <button className='stn' type='submit'>subscribe</button>
          </div>
          <div className='f-link'>
            <h3>link</h3>
            <ul>
              <li><Link to='#' className='f-link-li'>home</Link></li>
              <li><Link to='#' className='f-link-li'>about</Link></li>
              <li><Link to='#' className='f-link-li'>services</Link></li>
              <li><Link to='#' className='f-link-li'>blogs</Link></li>
              <li><Link to='#' className='f-link-li'>contact</Link></li>

            </ul>
          </div>
          <div className='f-servises'>
            <h3>services</h3>
            <ul>
              <li><Link to='#'>invistigate Crypto</Link></li>
              <li><Link to='#'>report Crypto fraud</Link></li>
            
            </ul>
          </div>
          <div className='f-address'>
            <h3>have a questions?</h3>
            <address>
              <div className='f-que'>
                <p>
                  <span>  <i className="fa fa-home"></i></span>
                  <Link to='#'>Ara,Bihar 802301</Link>
                </p>
              </div>

              <div className='f-que'>
                <p>
                  <span> <i className="fa fa-phone"></i></span>
                  <Link to='tel:+919576219803'>9576219803</Link>
                </p>
              </div>
              <div className='f-que'>
                <p>
                  <span> <i className="fa fa-envelope"></i></span>
                  <Link to='mailto:rohitkumar957621@gmail.com' className='f-email'>rohitkumar957621@gmail.com</Link>
                </p>
              </div>
            </address>
          </div>
        </div>



      </div>


      <div className='container'></div>
      <div className='f-credits'>
        <p>Copyright ©️2023 all right reserved | this template is made with ❤️ by Rohit Kumar</p>
      </div>

    </footer>
  )
}

export default Footer;