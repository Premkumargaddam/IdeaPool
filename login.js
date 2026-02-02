import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const login = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, e.target.email.value, e.target.pass.value);
    window.location="/home";
  };

  return (
    <form onSubmit={login}>
      <h2>Login</h2>
      <input name="email" placeholder="Email"/>
      <input name="pass" type="password" placeholder="Password"/>
      <button>Login</button>
    </form>
  );
}
