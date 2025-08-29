import React from 'react'

type Props = {}

const Input:React.FC<Props> = ({}) => {
  return (
    <div un-flex="~ justify-center" un-w="65%" h-14 rd-7 un-shadow="sm gray" max-w-125>
      <input type="text" placeholder='请输入文本' un-w="90%" text-lg outline-none/>
    </div>
  )
}

export default Input
