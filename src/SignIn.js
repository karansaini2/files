import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setIsAuth }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  return (
    <div
      className="Login"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A5F7A",
      }}
    >
      <div className="loginPage">
        <p
          style={{
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          Sign In With Google
        </p>
        <button
          style={{
            width: "205px",
            height: "30px",
            fontSize: "15px",
            marginTop: "15px",
            borderRadius: "20px",
            border: "0",
          }}
          className="login-with-google-btn"
          onClick={signInWithGoogle}
        >
          Sign-in <i className="fas fa-sign-in-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
