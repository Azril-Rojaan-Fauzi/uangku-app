import LoginButton from "../authentication/LoginButton";

export default function LandingPage() {
  return (
    <section className="flex min-h-screen w-full flex-col">
      <header className="flex h-16 items-center justify-between border-b-2 border-blue-500/20 bg-white px-4 md:h-20 md:px-8">
        <h1 className="text-2xl font-bold text-blue-500 text-shadow-md md:text-3xl">
          UangKu
        </h1>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center bg-blue-200/20 px-4">
        <div className="w-full max-w-xl rounded-lg border-0 border-blue-200 bg-slate-50 px-8 py-5 shadow-sm md:border">
          <div className="flex flex-col p-2">
            <h2 className="title text-center font-bold text-slate-900 dark:text-slate-900">
              UangKu
            </h2>
            <p className="mt-2 text-center text-2xl font-light text-slate-500">
              Kelola keuanganmu di UangKu 😋
            </p>
            <LoginButton />
          </div>
        </div>
      </main>

      <footer className="flex min-h-16 border-t-2 border-blue-500/20 p-4">
        <p className="w-full text-center">
          &copy; 2025 UangKu. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
