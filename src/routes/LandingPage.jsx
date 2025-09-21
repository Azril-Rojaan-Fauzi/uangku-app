import LoginButton from "../authentication/LoginButton";
import pcAvatar from "../assets/img/pc-avatar.jpeg";
import useCollapsed from "../hooks/useCollapsed";

export default function LandingPage() {
  const { collapsed } = useCollapsed();

  return (
    <section className="flex h-screen w-full flex-col">
      <div className="flex h-full w-full">
        <div className="my-show m-5 mb-0 grid w-full grid-cols-1 opacity-0 blur-lg md:m-10 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col items-center justify-center gap-5 p-3 pt-0 lg:items-start">
            <h1 className="text-4xl font-bold tracking-wide md:text-6xl xl:text-9xl">
              UangKu
            </h1>
            <p className="text-center text-2xl md:text-start lg:w-3/4 lg:text-3xl xl:text-5xl">
              Kelola keuanganmu di <span className="font-semibold">UangKu</span>
            </p>
            <LoginButton />
          </div>
          {!collapsed && (
            <div className="col-span-1 flex items-end justify-center overflow-hidden md:items-center md:p-3">
              <img
                src={pcAvatar}
                alt="Tampilan aplikasi UangKu versi desktop"
                className="object-fit h-fit w-1/3 lg:h-2/3 lg:w-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
