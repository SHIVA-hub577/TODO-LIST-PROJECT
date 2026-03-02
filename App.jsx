import { useRef, useState } from 'react'
import './App.css'
import Inputfield from './Inputfield'
import InputDate from './Inputdate'
import Submit from './Submit'
import Displaycontent from './Displalycontent'
import { Mycontext } from './Todolistitems'
function App() {
 const[todoitems,settodoitems]=useState([]);
 let a=useRef();
 let b=useRef();
 let handledata=()=>{
  const name=a.current.value;
  const date=b.current.value;
  let newtodoitems=[...todoitems,{name:name,date:date}];
  settodoitems(newtodoitems);
  a.current.value="";
  b.current.value="";
 }
 let handleDelete=(indexToDelete)=>{
  const newitems=todoitems.filter((_,index)=>index!==indexToDelete);
  settodoitems(newitems);
 }
  return (
    <>
    <center>
      <Mycontext.Provider value={todoitems}>
      <h1>TODO-LIST</h1>
      <div id="ob">
       
       <Inputfield a={a} ></Inputfield>
       <InputDate b={b}></InputDate>
       <Submit a={a} b={b} handledata={handledata}></Submit>
       <div id="ib">
        {todoitems.length===0 && <div>Welcome to todolist,empty tasks</div>}
       <Displaycontent  handleDelete={handleDelete}></Displaycontent>
       </div>
       </div>
        </Mycontext.Provider>
       </center>
      
    </>
  )
}

export default App
