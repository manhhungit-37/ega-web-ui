import React from 'react';
import Title from 'components/Title';
import Products from 'components/Products';

function HotPriceProduct() {
  return (
    <div className="margin-7">
      <Title title='Tote giá “nóng”' text='Đống này đang giảm giá nên rất "nóng”. Bạn còn chờ gì nữa mà "phỏng tay” ngay đi' />
      <Products />
    </div>
  )
}

export default HotPriceProduct
