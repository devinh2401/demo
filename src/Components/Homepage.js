import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaCartArrowDown, FaHeart, FaHeartBroken, FaNotEqual } from "react-icons/fa";
import logo from "../image/logo.jpg"
import slide from "../image/slide-image.jpg";
import slide3 from "../image/slide-image3.jpg";
import Navbar from './Navbar';
import Slidebaner from './slidebaner';
import Content from './Content';
import Footer from './Footer';
function Homepage() {
  return (
    <div className='head-container '>
      <div className='header-wrap '>
        <header className='header'> 
            <div className='header_top--panel'>
              <div className='header__top--panel-left '>
              <ul className="top--panel-list">
                <li className="top--panel-list-items">
                    <Link to='#' className='top--panel-list-icons'>
                     <AiOutlineUserAdd className='top--panel-list-icon'  />
                     <p> Đổi trả</p> 
                    </Link>
                    
                </li>
                <li className="top--panel-list-items">
                    <Link to='#' className='top--panel-list-icons'>
                     <AiOutlineUserAdd className='top--panel-list-icon'  />
                     <p> Giao hàng</p> 
                    </Link>
                    
                </li>
                <li className="top--panel-list-items">
                    <Link to='#' className='top--panel-list-icons'>
                     <AiOutlineUserAdd className='top--panel-list-icon'  />
                     <p>bảo hành</p> 
                    </Link>
                    
                </li>
                <li className="top--panel-list-items">
                    <Link to='#' className='top--panel-list-icons'>
                     <AiOutlineUserAdd className='top--panel-list-icon'  />
                     <p> hỏi đáp</p> 
                    </Link>
                    
                </li>
                <li className="top--panel-list-items">
                    <Link to='#' className='top--panel-list-icons'>
                     <AiOutlineUserAdd className='top--panel-list-icon'  />
                     <p>liên hệ</p> 
                    </Link>
                    
                </li>
                
                
             
              </ul>
              </div>
              <div className='header__top--panel-right'>
              <ul className="top--panel-list">
              <li className="top--panel-list-items">
                    <Link to='#' className='top--panel-list-icons'>
                     <AiOutlineUserAdd className='top--panel-list-icon'  />
                     <p> Về chúng tôi</p> 
                    </Link>
                    
                </li>
                <li className="top--panel-list-items">
                    <Link to='#' className='top--panel-list-icons'>
                     <AiOutlineUserAdd className='top--panel-list-icon'  />
                     <p>Nhận xét</p> 
                    </Link>
                    
                </li>
        
              </ul>
              </div>
            </div>
            <div className='header_content container  '>
              <div className='header-content-fixed'>
              <div className='logo'>
                  <img src={logo} alt="logo" />
                </div>
                <div className='header_searchbox'>
                <div className='header_searchbox_input'>
                  <input type="text" placeholder="Search" />
                      <button className=' btn-search'>
                        <AiOutlineUserAdd />
                      </button>
                </div>
                <div className='header-call'>
                  <FiPhone className='call-icon'  />
                  <p style={{texDecoration:"underline", fontWeight:"bold", marginLeft:"10px" }}> 0799.30.8986</p>
                  <p style={{color:"blue", fontWeight:500, marginTop:"-16px"}}> YÊU CẦU GỌI LẠI</p>

                </div>
              </div>
                
              </div>
              <div className='header_card-content'>
                  <div className='icon-cart'>
                    <AiOutlineUserAdd  />
                  </div>
                  <div className='icon-cart'>
                    <FaNotEqual  />
                  </div>
                  <div className='icon-cart'>
                    <FaHeart   />
                  </div>
                  <div className='icon-cart'>
                    <span className='icon-cart-item'>
                      <span className='icon-cart-value'>
                        3
                      </span>
                    </span>
                    <FaCartArrowDown  />
                  </div>
                </div>
              </div>
             
        </header>
      </div>
        <Navbar />
        <Slidebaner />   
        <Content />
        <div className='advertise-wrap'>
          <div className='advertise container'>
            <div className='advertise-title'>
              <p> Bắt đầu mua sắm thật dễ dàng!</p>
            </div>
              <div className='advertise-list'>
                <div className='advertise-item'>
                  <div className='advertise-icon'></div>
                  <div className='advertise-item-title'>
                    <span> 1 </span> 
                    <span> Đăng ký tài khoản </span>
                  </div>
                  <div className='advertise-item-content'>
                    <p>  Đăng ký tài khoản giúp trải nghiệm mua sắm được tốt hơn. Bạn có thể đăng ký ngay hoặc sau khi đặt hàng.</p>
                  </div>
                </div>
                <div className='advertise-item'>
                  <div className='advertise-icon'></div>
                  <div className='advertise-item-title'>
                    <span> 1 </span> 
                    <span> Đăng ký tài khoản </span>
                  </div>
                  <div className='advertise-item-content'>
                    <p>  Đăng ký tài khoản giúp trải nghiệm mua sắm được tốt hơn. Bạn có thể đăng ký ngay hoặc sau khi đặt hàng.</p>
                  </div>
                </div>
                <div className='advertise-item'>
                  <div className='advertise-icon'></div>
                  <div className='advertise-item-title'>
                    <span> 1 </span> 
                    <span> Đăng ký tài khoản </span>
                  </div>
                  <div className='advertise-item-content'>
                    <p>  Đăng ký tài khoản giúp trải nghiệm mua sắm được tốt hơn. Bạn có thể đăng ký ngay hoặc sau khi đặt hàng.</p>
                  </div>
                </div>
                <div className='advertise-item'>
                  <div className='advertise-icon'></div>
                  <div className='advertise-item-title'>
                    <span> 1 </span> 
                    <span> Đăng ký tài khoản </span>
                  </div>
                  <div className='advertise-item-content'>
                    <p>  Đăng ký tài khoản giúp trải nghiệm mua sắm được tốt hơn. Bạn có thể đăng ký ngay hoặc sau khi đặt hàng.</p>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
        <Content />
        <Footer />

    </div>
  )
}

export default Homepage