import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Layout from "./routes/Layout";
import DashboardPage from "./routes/dashboard/DashboardPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "pemasukan",
          element: <h1 className="title">Pemasukan</h1>,
        },
        {
          path: "pengeluaran",
          element: <h1 className="title">Pengeluaran</h1>,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
