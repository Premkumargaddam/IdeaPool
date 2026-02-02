import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const register = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(auth, e.target.email.value, e.target.pass.value);
    await sendEmailVerification(user.user);
    alert("Verify your email first");
  };

  return (
    <form onSubmit={register}>
      <h2>Register</h2>
      <input name="email"/>
      <input name="pass" type="password"/>
      <button>Signup</button>
    </form>
  );
}
