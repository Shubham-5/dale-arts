import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes";

function Layout() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default Layout;
