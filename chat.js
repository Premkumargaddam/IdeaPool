import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect,useState } from "react";

export default function Chat(){
 const [msgs,setMsgs]=useState([]);

 useEffect(()=>{
  return onSnapshot(collection(db,"chat"),s=>{
   setMsgs(s.docs.map(d=>d.data()));
  });
 },[]);

 const send=async(e)=>{
  e.preventDefault();
  await addDoc(collection(db,"chat"),{text:e.target.msg.value});
 };

 return(
  <>
   {msgs.map(m=><p>{m.text}</p>)}
   <form onSubmit={send}>
    <input name="msg"/>
    <button>Send</button>
   </form>
  </>
 );
}
