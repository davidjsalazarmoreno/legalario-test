import { useContext } from "react";
import { CameraContext } from "./CameraContext";

export const useCameraStore = () => {
  const context = useContext(CameraContext);
  if (context === undefined) {
    throw new Error('useCameraStore must be used within a CameraProvider');
  }
  return context;
};
