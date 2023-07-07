import React from 'react'

const Title = ({title, extraClass}) => {
  return (
    <div className={`${extraClass} uppercase ml-3 my-2 text-[13px] text-gray-600 lg:text-[16px]`}>{title}</div>
  )
}

export default Title