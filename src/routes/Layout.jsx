import Sidebar from "../layouts/Sidebar";

export default function Layout() {
  return (
    <div className="dark:bg-slate-900min-h-screen bg-slate-100 transition-colors">
      <Sidebar />
    </div>
  );
}
