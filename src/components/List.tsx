import React, { useState } from "react";
import useStore from "../stores/todo";

const List: React.FC = () => {
  const { items } = useStore();
  return (
    <div un-w="65%" rd-7 un-shadow="sm gray" max-w-125>
      {items.map(({ id }) => (
        <Item itemID={id} key={id}></Item>
      ))}
    </div>
  );
};

export default List;

type Props2 = {
  itemID: number;
};

const Item: React.FC<Props2> = ({ itemID }) => {
  // 编辑状态
  const [isEditing, setisEditing] = useState(false);
  const { items, remove, toggle, setContext } = useStore();
  const initDone = useStore
    .getState()
    .items.find((item) => itemID === item.id)?.done;
  const [value, setValue] = useState(
    () => items.find(({ id }) => id === itemID)?.context ?? ""
  );

  function onKeyUp(e: React.KeyboardEvent) {
    if(e.key === "Enter") setContext(itemID, value)
    else if(e.key !== "Escape") return
    setisEditing(false)
  }

  return (
    <div
      w-full
      h-14
      un-border="b gray"
      last:border-none
      un-flex="~ justify-around items-center"
      text-lg
    >
      {isEditing ? (
        <input
          type="text"
          value={value}
          un-w="60%"
          outline-none
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onKeyUp={onKeyUp}
        />
      ) : (
        <p onClick={() => setisEditing(true)} un-w="60%">
          {value}
        </p>
      )}
      <div gap-5 un-flex="~">
        <input
          type="checkbox"
          checked={initDone}
          onChange={() => toggle(itemID)}
        />
        <a
          un-text="red-300 hover:red-400"
          text-lg
          onClick={() => remove(itemID)}
        >
          删除
        </a>
      </div>
    </div>
  );
};
