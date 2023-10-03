import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
    return (
        <div>


            <section className="home" id="home">
                <div className='banner'>
                    <div className='b-heading'><h1>imgking</h1></div>
                    <div>
                        <div className="max-width">
                            <div className="search-form">
                                <select className='search-select'>
                                    <option>all</option>
                                </select>
                                <input type="search" id="search-box" placeholder="search here..." />
                                <label htmlFor="search-box" className="fas fa-search"></label>
                                {/* <label htmlFor="search-box" className="fas fa-search"></label> */}
                            </div>



                        </div>
                        <div>
                            <ul className='suggestion'>
                                <li className='h-li'>suggestions : </li>
                                <li><Link to='#'>nature</Link></li>
                                <li><Link to='#'>girl</Link></li>
                                <li><Link to='#'>man</Link></li>
                                <li><Link to='#'>corporate</Link></li>
                                <li><Link to='#'>city</Link></li>
                                <li><Link to='#'>more...</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Banner