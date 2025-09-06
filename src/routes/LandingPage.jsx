import LoginButton from "../authentication/LoginButton";

export default function LandingPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        Selamat Datang di Aplikasi Keuangan
      </h1>
      <p className="mt-2 text-gray-500">
        Kelola pemasukan dan pengeluaranmu dengan mudah
      </p>
      <LoginButton />
    </div>
  );
}
