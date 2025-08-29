import React, { useState } from "react";
import useStore from "../stores/todo";



const Input: React.FC = () => {
  const { create } = useStore(); // 创建函数
  const [inputVal, setinputVal] = useState("");
  function onKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") create(inputVal); // Enter 创建
    else if (e.key !== "Escape") return; // 非 Enter 或者 Escape 不处理
    setinputVal(""); // 无论 Enter 还是 Escape 都会清空输入
  }

  return (
    <div
      un-flex="~ justify-center"
      un-w="65%"
      h-14
      rd-7
      un-shadow="sm gray"
      max-w-125
    >
      <input
        type="text"
        placeholder="请输入文本"
        un-w="90%"
        text-lg
        outline-none
        onKeyUp={onKeyUp}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setinputVal(e.target.value)
        }
        value={inputVal}
      />
    </div>
  );
};

export default Input;
