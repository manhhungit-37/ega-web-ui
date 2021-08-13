import React from 'react';
import Title from 'components/Title';

function SupperProduct() {
  return (
    <div className="supper-product margin-7">
      <Title title="Siêu phẩm Tote mới ra lò" text='Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các bác đọc ở dưới nhé. em đi đóng hàng giao cho khách phát' position="absolute" />
      <div className="preliminary">
        <h4>Thông tin mô tả sơ bộ</h4>
        <ul>
          <li className="preliminary-1 mb-16 line-height-24 preliminary-li">Chất vải canvas mềm mịn, không xù, không nhão</li>
          <li className="preliminary-2 mb-16 line-height-24 preliminary-li">Bee có 5 màu cho bạn lựa canh: Xanh dương, Hồng baby, Vàng chanh,...</li>
          <li className="preliminary-3 mb-16 line-height-24 preliminary-li">Size túi: 38*34*7cm</li>
          <li className="preliminary-4 mb-16 line-height-24 preliminary-li">Túi có khoá kéo, túi con tiện lợi cho nàng sử dụng</li>
          <a href="#" className="more-info">Tìm hiểu thêm </a>
        </ul>
      </div>
    </div>
  )
}

export default SupperProduct
