import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./modules/dashboard";
import AuthLayout from "./modules/auth";
import Login from "./modules/auth";
import Register from "./modules/auth";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Layout;
