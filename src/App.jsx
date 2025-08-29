import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Layout from "./routes/Layout";
import DashboardPage from "./routes/DashboardPage";
import IncomePage from "./routes/IncomePage";

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
          element: <IncomePage />,
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
