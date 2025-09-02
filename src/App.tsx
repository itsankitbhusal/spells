import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1400px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default App;
