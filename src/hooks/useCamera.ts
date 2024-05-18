import { useRef, useState } from "react";
import {
  isPermissionGranted,
  requestCameraPermission,
} from "../permissions/camera";

export const useCamera = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCamera = async () => {
    const permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permissionRequested = await requestCameraPermission();
      if (!permissionRequested) {
        alert("Camera permission is required");
        return;
      }
    }

    if (videoRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      } catch (error) {
        alert("Error iniciando la camara");
        setIsCameraActive(false);
      }
    }
  };

  const stopCamera = () => {
    setIsCameraActive(false);
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  const capturePhoto = () => {
    return new Promise<string>((resolve, reject) => {
      if (videoRef.current) {
        const canvasWidth = videoRef.current.videoWidth;
        const canvasHeight = videoRef.current.videoHeight;
        const canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const context = canvas.getContext("2d");
        context?.drawImage(videoRef.current, 0, 0, canvasWidth, canvasHeight);
        resolve(canvas.toDataURL("image/jpg", 1.0));
        stopCamera();
      }
      reject({ message: "No video ref" });
      stopCamera();
    });
  };

  return { isCameraActive, videoRef, startCamera, stopCamera, capturePhoto };
};
