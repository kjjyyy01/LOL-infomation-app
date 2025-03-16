import { fetchVersionData } from "@/utils/serverApi";
import React from "react";
import RotationPage from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOLI Rotation",
  description: "League of Legend Rotation Information",
};

const Rotation = async () => {
  const currentVersion: string = await fetchVersionData();
  return (
    <div>
      <RotationPage currentVersion={currentVersion} />
    </div>
  );
};

export default Rotation;
