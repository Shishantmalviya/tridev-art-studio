import { useState } from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <main className="flex flex-col sm:px-20 w-full h-full mx-auto m-6 py-14">
        <Outlet />
        </main>
        <hr className="py-6"/>
        <Footer />
    </>
  );
}

export default App;
