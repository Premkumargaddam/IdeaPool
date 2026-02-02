import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import PaymentButton from "./PaymentButton";

export default function IdeaCard({idea}){

 const like=async()=>{
  await updateDoc(doc(db,"ideas",idea.id),{likes:idea.likes+1});
 };

 return(
  <div className="card">
   <h3>{idea.title}</h3>
   <p>{idea.desc}</p>
   <button onClick={like}>❤️ {idea.likes}</button>
   <PaymentButton/>
  </div>
 );
}
