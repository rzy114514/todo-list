import React from "react";
import Input from "./components/Input";
import List from "./components/List";
const App:React.FC = () => {
  return (
  <div w-screen h-screen p-8 un-flex="~ col items-center" gap-5>
    <Input></Input>
    <List></List>
  </div>);
};

export default App;
