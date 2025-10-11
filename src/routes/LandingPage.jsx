import LoginButton from "../authentication/LoginButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const authInfo = localStorage.getItem("auth");

    if (authInfo) {
      const parsed = JSON.parse(authInfo);
      if (parsed.isAuth) {
        navigate("/dashboard");
      }
    }
  }, [navigate]);

  return (
    <section className="flex h-screen w-full flex-col">
      <div className="flex h-full w-full items-center justify-center p-5">
        <div className="flex flex-col items-center justify-center gap-7 rounded-2xl bg-blue-500/10 px-5 py-3 md:h-1/2 md:w-1/2">
          <h1 className="text-4xl font-bold tracking-wide md:text-5xl">
            UangKu
          </h1>
          <p className="text-center text-xl lg:text-2xl">
            Kelola keuanganmu di <span className="font-semibold">UangKu</span>
          </p>
          <LoginButton />
        </div>
      </div>
    </section>
  );
}
