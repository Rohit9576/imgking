import React from 'react';
import { Link, NavLink } from "react-router-dom";
// import Hirebutton from '../button/Hirebutton';
import './Header.css'

const Header = ({totalQuantity}) => {
    // const stn = document.getElementById('stn');
    // stn.addEventListener('mouseover', function () {
    //   stn.innerHTML = "let's do it";
    // });
    // stn.addEventListener('mouseout', function () {
    //   stn.innerHTML = 'subscribe';
    // });
    return (
        <header className='header'>
            <div className='container'>
                <div className='row v-center'>
                    <div className='header-item item-left'>
                        <div className='logo'>
                            {/* <NavLink exact="true" to='/' className='logo'><i className='fas fa-fire'></i> Rohit</NavLink> */}
                            <NavLink exact="true" to='/' className='logo'><i className='fas fa-fire'></i> imgking</NavLink>
                        </div>
                    </div>
                    <div className='header-item item-center'>
                        <nav className='menu'>
                            <ul className='menu-main'>
                                <li>
                                    <NavLink exact="true" to='/' className='main-nav'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink exact="true" to='/about' className='main-nav'>About</NavLink>
                                </li>


                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/about' className='main-nav'>Review <i className="fas fa-angle-down"></i></NavLink>

                                    <div className='sub-menu single-column-menu'>
                                        <ul>
                                            <li><Link to='#' className='review'>client's review</Link></li>
                                            <li><Link to='#' className='review'>student's review</Link></li>



                                        </ul>
                                    </div>


                                </li>

                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/' className='main-nav'>Categaries <i className="fas fa-angle-down"></i></NavLink>
                                    <div className="sub-menu mega-menu  mega-menu-column-4">
                                        <div className="list-item">
                                            <h4 className="title">wiled</h4>
                                            <ul>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>

                                            </ul>

                                            <h4 className="title">Design</h4>
                                            <ul>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                            </ul>
                                        </div>
                                        <div className="list-item">
                                            <h4 className="title">nature</h4>
                                            <ul>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                            </ul>
                                            <h4 className="title">fastivels</h4>
                                            <ul>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                            </ul>
                                        </div>
                                        <div className="list-item">
                                            <h4 className="title">Other</h4>
                                            <ul>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                                <li><Link to='#'>product list</Link></li>
                                            </ul>
                                        </div>
                                        <div className="list-item">
                                            <div className="card">
                                                <div className="imagbox">
                                                    <img src="IMG/rohit (2).png" alt="" />


                                                </div>
                                                <div className="details">
                                                    <div className="content">
                                                        <h2>about me <br /><span>
                                                            <div className="content">

                                                                <p>I am ' <i>Rohit kumar</i> ' . I am basically from
                                                                    Bihar but Currently staying in Bhopal. I did my
                                                                    graduation in Bsc. math honours from Veer Kunwar
                                                                    Singh University, ara (Bihar). Currently I am
                                                                    pursuing MCA in B.I.S.T. , Bhopal .</p>
                                                                <p>I belong to a nuclear family. <br /> My strength are :-
                                                                    I learn things quickly and am a great team
                                                                    player.</p>
                                                                <p>My hobbies are :- I like playing game(cricket, hocky,
                                                                    football) and listen to music and my spear
                                                                    time
                                                                    i also read novels and internet surfing. thats all
                                                                    about me, thanks you.</p>

                                                            </div>
                                                        </span></h2>
                                                        <div className="social-icons">

                                                            <Link></Link>
                                                            <Link></Link>
                                                            <Link></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="max-width-sh">
                                                <div className="home-content-sh">
                                                    <div className="text-sh-1">Hello, my name is</div>
                                                    <div className="text-sh-2">Rohit Kumar</div>
                                                    <div className="text-sh-3">And I'm a <span className="typing"></span></div>
                                                    

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </li>

                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/about' className='main-nav'>blogs <i className="fas fa-angle-down"></i></NavLink>

                                    <div className="sub-menu single-column-menu">
                                        <ul>
                                            <li><Link to='#' className='review'>standred layout</Link></li>
                                            <li><Link to='#' className='review'>standred layout</Link></li>
                                            <li><Link to='#' className='review'>standred layout</Link></li>
                                            <li><Link to='#' className='review'>standred layout</Link></li>




                                        </ul>
                                    </div>


                                </li>

                                <li>
                                    <NavLink exact="true" to='/contact' className='main-nav'>Contacts</NavLink>
                                </li>
                              
                                {/* <Hirebutton text="upload" /> */}

                            </ul>
                        </nav>
                    </div>
                    <div className='header-item item-right'>
                        <div className="icons">
                            <div className="fas fa-search" id="search-btn"></div>
                            <div className="fas fa-shopping-cart" id="cart-btn"  >{totalQuantity}</div>
                            <div className="fas fa-heart" id="heart-btn"></div>
                            <div className="fas fa-user" id="user-btn">
                                <ul className="sub-menu-right">
                                    <li><Link to='/login' className='login'>client</Link></li>
                                    <li><Link to='/login' className='login'>seller</Link></li>
                                </ul>
                            </div>

                            <button className='stn' type='submit'>subscribe</button>
                            <div className="fas fa-bars" id="menu-btn"> </div>
                        </div>


                        <div className="search-form">
                            <input type="search" id="search-box" placeholder="search here..." />
                            <label htmlFor="search-box" className="fas fa-search"></label>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;