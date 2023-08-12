import React from "react";
import Header from "../../Components/Header/Header";
import ListMovie from "./ListMovie";
import TabsMovie from "./TabsMovie/TabsMovie";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <ListMovie />
      <TabsMovie />
    </div>
  );
}
