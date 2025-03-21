import RotationPage from "./clientPage";
import { Metadata } from "next";
import { fetchVersionData } from "@/utils/serverActions/fetchVersionData";

export const metadata: Metadata = {
  title: "LOLI Rotation",
  description: "League of Legend Rotation Information",
};

const Rotation = async () => {
  const currentVersion: string = await fetchVersionData();
  return <RotationPage currentVersion={currentVersion} />;
};

export default Rotation;
