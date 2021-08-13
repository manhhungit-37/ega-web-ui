import React from 'react';
import reviewCommnet1 from 'assets/images/review-comment-1.png';
import reviewCommnet2 from 'assets/images/review-comment-2.png';
import reviewCommnet3 from 'assets/images/review-comment-3.png';

function ReviewProduct() {
  return (
    <div className="review-product">
      <div className="review-right">
        <h1 className="review-title">Đánh giá của các nàng</h1>
        <div className="review-para">Mấy đánh giá này là lấy từ facebook qua nè, không có tự bịa ra đâu nha. Hông tin lên facebook mà xem.</div>
        <img src={reviewCommnet2} alt="Review Comment" />
        <img src={reviewCommnet1} alt="Review Comment" className="img-main" />
        <img src={reviewCommnet3} alt="Review Comment" />
      </div>
      <button className="angle-up icon"></button>
      <button className="angle-down icon"></button>
    </div>
    
  )
}

export default ReviewProduct
