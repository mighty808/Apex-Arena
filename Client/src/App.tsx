import { Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";

const Layout = () => (
  <div className="min-h-dvh flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
  </div>
);


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
