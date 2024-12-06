import React from "react";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import ArtistSidebar from "./components/artist-sidebar";

const Dashboard = () => {
  return (
    <div className="bg-gray-50">
      <div className="lg:w-[1200px] w-full mx-auto space-y-4">
        <div className="flex flex-row overflow-y-hidden">
          <Sidebar />
          <main className="flex-1 px-4 md:px-6">
            <Feed />
          </main>
          <ArtistSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
