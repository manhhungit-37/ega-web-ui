import React from 'react';
import data from 'db.json';

//images
import iconFooter1 from 'assets/images/icon-footer-face.svg';
import iconFooter2 from 'assets/images/icon-footer-insta.svg';
import iconFooter3 from 'assets/images/icon-footer-youtube.svg';

function Footer() {

  console.log(data);
  return (
    <div>
      <div className="text-center">
        <div className="width-50 mg-auto">
          <h2 className="title insta-title">BeeYou trên Instagram</h2>
          <div className="line-height-24 max-width-600 mg-auto">Follow BeeYou trên instagram để có cơ hội tham gia các chương trình ưu đãi dành riêng cho người dùng Instagram</div>
          <a href="#" className="insta-bee">instagr.am/beeyoufashion</a>
        </div>
        <div className="insta-img margin-7">
          {data.products.length > 0 && data.products.map(product => (
            <div key={product.id} className="footer-img">
              <img src={product.img} alt="insta-img" />
            </div>
          ))}
        </div>
        <div className="background-white">
          <div className="footer-link margin-7">
            <ul className="footer-left">
              <li>
                <a href="#">Sản phẩm hot</a>
              </li>
              <li>
                <a href="#">Sản phẩm bán chạy</a>
              </li>
              <li>
                <a href="#">Hot deal tháng 12</a>
              </li>
              <li>
                <a href="#">Anotner links</a>
              </li>
            </ul>
            <ul className="footer-right">
              <li>
                <a href="#">© 2020 beebag.com.vn</a>
              </li>
              <ul>
                <li>
                  <a href="#">
                    <img src={iconFooter1} alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconFooter2} alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconFooter3} alt="icon" />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
