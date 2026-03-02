import { useContext } from "react";
import { Mycontext } from "./Todolistitems";

function DisplayContent({ handleDelete }) {
  const todoitems = useContext(Mycontext);
  return (
    <>
      {todoitems.map((item, index) => (
        <div key={index} style={{ 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width:"80%",
          margin: "10px"
          }}>
          <span>{item.name}</span>
          <span>{item.date}</span>
          <button onClick={() => handleDelete(index)}>delete</button>
        </div>
      ))}
    </>
  );
}
export default DisplayContent;