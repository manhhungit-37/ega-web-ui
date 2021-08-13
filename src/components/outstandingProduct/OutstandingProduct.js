import Products from 'components/Products'
import Title from 'components/Title'
import React from 'react'

function OutstandingProduct() {
  return (
    <div className="margin-7">
      <Title title="Tote nổi bật" text="Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là Bee thích à nha, hehe" />
      <Products />
    </div>
  )
}

export default OutstandingProduct
