import React from "react";
import { Link } from "react-router-dom";
import product from "../image/product.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Content() {
  return (
    <div className="content mt-1">
      <div className="content-title">
        <ul>
          <li>
            <Link to="#">
              <span>Đánh Giá Tốt</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Bán chạy Nhất</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Phổ Biến Nhất</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-body">
        <div className="product-list">
          <div className="product-item">
            <div className="product-image">
              <img className="image-product mt-1" src={product}></img>
            </div>
            <Link to={"#"} className="product-link">
              <span>Đi đến sản phẩm</span>
            </Link>
            <div className="product-title">
              <div className="product-price">
                <span>2.500.000 đ</span>
                <span className="price-discounted">3.500.000 đ</span>
              </div>
              <div className="rating">
                <div className="product-available">
                  <i className="fa fa-facebook"></i>
                  <span> Còn hàng</span>
                </div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="product-action">
              <div className="action-left">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="action-right">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-image">
              <img className="image-product mt-1" src={product}></img>
            </div>
            <Link to={"#"} className="product-link">
              <span>Đi đến sản phẩm</span>
            </Link>
            <div className="product-title">
              <div className="product-price">
                <span>2.500.000 đ</span>
                <span className="price-discounted">3.500.000 đ</span>
              </div>
              <div className="rating">
                <div className="product-available">
                  <i className="fa fa-facebook"></i>
                  <span> Còn hàng</span>
                </div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="product-action">
              <div className="action-left">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="action-right">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-image">
              <img className="image-product mt-1" src={product}></img>
            </div>
            <Link to={"#"} className="product-link">
              <span>Đi đến sản phẩm</span>
            </Link>
            <div className="product-title">
              <div className="product-price">
                <span>2.500.000 đ</span>
                <span className="price-discounted">3.500.000 đ</span>
              </div>
              <div className="rating">
                <div className="product-available">
                  <i className="fa fa-facebook"></i>
                  <span> Còn hàng</span>
                </div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="product-action">
              <div className="action-left">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="action-right">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-image">
              <img className="image-product mt-1" src={product}></img>
            </div>
            <Link to={"#"} className="product-link">
              <span>Đi đến sản phẩm</span>
            </Link>
            <div className="product-title">
              <div className="product-price">
                <span>2.500.000 đ</span>
                <span className="price-discounted">3.500.000 đ</span>
              </div>
              <div className="rating">
                <div className="product-available">
                  <i className="fa fa-facebook"></i>
                  <span> Còn hàng</span>
                </div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="product-action">
              <div className="action-left">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="action-right">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-image">
              <img className="image-product mt-1" src={product}></img>
            </div>
            <Link to={"#"} className="product-link">
              <span>Đi đến sản phẩm</span>
            </Link>
            <div className="product-title">
              <div className="product-price">
                <span>2.500.000 đ</span>
                <span className="price-discounted">3.500.000 đ</span>
              </div>
              <div className="rating">
                <div className="product-available">
                  <i className="fa fa-facebook"></i>
                  <span> Còn hàng</span>
                </div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="product-action">
              <div className="action-left">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="action-right">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-image">
              <img className="image-product mt-1" src={product}></img>
            </div>
            <Link to={"#"} className="product-link">
              <span>Đi đến sản phẩm</span>
            </Link>
            <div className="product-title">
              <div className="product-price">
                <span>2.500.000 đ</span>
                <span className="price-discounted">3.500.000 đ</span>
              </div>
              <div className="rating">
                <div className="product-available">
                  <i className="fa fa-facebook"></i>
                  <span> Còn hàng</span>
                </div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="product-action">
              <div className="action-left">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>               
                <i className="fa fa-star"></i>               
              </div>
              <div className="action-right">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                {/* <FontAwesomeIcon icon={['fab', 'google']} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
