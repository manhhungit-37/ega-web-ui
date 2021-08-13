import React from 'react'

function Title({ title, text, position }) {
  return (
    <div className={position ? `width-50 ${position}` : "width-50"}>
      <h2 className="title mt-50">{title}</h2>
      <div className="line-height-24 para-supper-product">{text}</div>
    </div>
  )
}

export default Title
