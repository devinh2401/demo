import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import logo from "../image/logo.jpg"
import logo2 from "../image/logo2.jpg"
function Homepage() {
  return (
    <div className='container'>
        <header className='header'> 
            <div className='header_top--panel'>
              <div className='header__top--panel-left'>
              <ul className="top--panel-list">
                <li className="top--panel-list-items">
                    <Link to='/#'>
                     <AiOutlineUserAdd  />
                    </Link>
                    <p> Đổi trả</p> 
                </li>
                <li className="top--panel-list-items">
                    <Link to='/#'>
                     <AiOutlineUserAdd  />
                    </Link>
                    <p> Đổi trả</p> 
                </li>
                <li className="top--panel-list-items">
                    <Link to='/#'>
                     <AiOutlineUserAdd  />
                    </Link>
                    <p> Đổi trả</p> 
                </li>
                <li className="top--panel-list-items">
                    <Link to='/#'>
                     <AiOutlineUserAdd  />
                    </Link>
                    <p> Đổi trả</p> 
                </li>
                <li className="top--panel-list-items">
                    <Link to='/#'>
                     <AiOutlineUserAdd  />
                    </Link>
                    <p> Đổi trả</p> 
                </li>
              </ul>
              </div>
              <div className='header__top--panel-right'>
              <ul className="top--panel-list">
                <li className="top--panel-list-items">
                    <Link to='/#'>
                     <AiOutlineUserAdd  />
                    </Link>
                    <p> Đổi trả</p> 
                </li>
                <li className="top--panel-list-items">
                    <Link to='/#'>
                     <AiOutlineUserAdd  />
                    </Link>
                    <p> Đổi trả</p> 
                </li>
        
              </ul>
              </div>
            </div>
            <div className='header_content mt-4'>
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
                  <FiPhone className='call-icon'/>
                  <p style={{texDecoration:"underline"}}> 0799.30.8986</p>
                  <p style={{color:"blue", marginTop:"-16px"}}> YÊU CẦU GỌI LẠI</p>

                </div>
              </div>
              <div className='header_card-content'>
                  <div className='icon-cart'>
                    <AiOutlineUserAdd  />
                  </div>
                  <div className='icon-cart'>
                    <AiOutlineUserAdd  />
                  </div>
                  <div className='icon-cart'>
                    <AiOutlineUserAdd  />
                  </div>
                  <div className='icon-cart'>
                    <AiOutlineUserAdd  />
                  </div>
                </div>
              </div>
             
        </header>
    </div>
  )
}

export default Homepage