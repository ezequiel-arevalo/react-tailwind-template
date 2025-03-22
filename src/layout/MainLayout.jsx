import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">

      <Header />
      
      <main className="flex-grow overflow-hidden">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};
