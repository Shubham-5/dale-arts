import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import ArtistSidebar from "./components/artist-sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 px-4 md:px-6 py-4">
          <Feed />
        </main>
        <ArtistSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
