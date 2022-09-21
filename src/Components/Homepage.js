import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from "react-icons/ai";
function Homepage() {
  return (
    <div className='container'>
        <header className='header'> 
            <div className='header_top--panel'>
              <ul className="top--panel-list">
                <li className="top--panel-list-item">
                    <Link to='/#'>
                        <div> <AiOutlineUserAdd  /></div>
                        <p> Đổi trả</p>
                    </Link>
                </li>
              </ul>
            </div>
        </header>
    </div>
  )
}

export default Homepage