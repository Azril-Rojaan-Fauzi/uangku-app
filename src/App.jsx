import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Layout from "./routes/Layout";
import DashboardPage from "./routes/DashboardPage";
import IncomePage from "./routes/IncomePage";
import ExpensePage from "./routes/ExpensePage";
import LandingPage from "./routes/LandingPage";
import NotFoundPage from "./routes/NotFoundPage";
import ProtectedRoute from "./authentication/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <LandingPage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "pemasukan",
          element: (
            <ProtectedRoute>
              <IncomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "pengeluaran",
          element: (
            <ProtectedRoute>
              <ExpensePage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <ThemeProvider storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
