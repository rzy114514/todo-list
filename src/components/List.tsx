import React, { useState } from "react";

type Props = {};

const List: React.FC<Props> = ({}) => {
  return (
    <div un-w="65%" h-14 rd-7 un-shadow="sm gray" max-w-125>
      <Item id={114514}></Item>
    </div>
  );
};

export default List;

type Props2 = {
  id: number;
};

const Item: React.FC<Props> = ({ id }) => {
  // 编辑状态
  const [isEditing, setisEditing] = useState(false);
  return (
    <div w-full h-14 un-border="b gray" last:border-none un-flex="~ justify-around items-center">
      {isEditing ? (
        <input type="text" value={"test"}  un-w="60%" 
        outline-none
         />
      ) : (
        <p onClick={() => setisEditing(true)} un-w="60%">{"test"}</p>
      )}
      <div gap-5 un-flex="~">
        <input type="checkbox" />
      <a font-bold un-text="red-200 hover:red-400" text-lg>删除</a>
      </div>
    </div>
  );
};
