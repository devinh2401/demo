import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import "./navbar.css";
function Navbar() {
  // const nav = document.getElementByClassName('container-nav');
  let navScroll = window.scrollY
  window.addEventListener('scroll',() =>{
    console.log(navScroll)
  })
  return (
    <div className="container-nav">
      <div className="navbar container">
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span> TẤT CẢ DANH MỤC</span>
        </Link>
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span> SẢN PHẨMC</span>
        </Link>
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span>KHUYẾN MÃI</span>
        </Link>
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span> BÁN CHẠY NHẤT</span>
        </Link>
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span> TẤT CẢ DANH MỤC</span>
        </Link>
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span> THƯƠNG HIÊUK</span>
        </Link>
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span> THẺ QUÀ TẶNG</span>
        </Link>
        <Link className="navbar-item">
          <AiOutlineUserAdd size={25} />
          <span> TẠI SAO là IBIE ?</span>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
