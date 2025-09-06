import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="mt-6 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      Sign In With Google
    </button>
  );
};

export default LoginButton;
