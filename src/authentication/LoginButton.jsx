import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-g.svg";

const LoginButton = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const authInfo = {
        userId: result.user.uid,
        name: result.user.displayName,
        profilePhoto: result.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      if (result.user) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div
      onClick={signInWithGoogle}
      className="mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-blue-400 px-3 py-2 text-white hover:bg-blue-300 md:w-2/3"
    >
      <img src={googleLogo} alt="" className="h-5 w-5" />
      <p className="text-sm text-slate-900">Login with Google</p>
    </div>
  );
};

export default LoginButton;
