import { Button } from "@mui/material";
import { useRef, useState } from "react";
import {
  isPermissionGranted,
  requestCameraPermission,
} from "../../permissions/camera";

export type Props = {
  onPhotoCapture: (photo: string) => void;
};

const PhotoPreviewTakeButton = ({ onPhotoCapture }: Props) => {
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

    console.log(videoRef.current);
    if (videoRef.current) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    }
  };

  const stopCamera = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();

        setIsCameraActive(false);
      });
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const aspectRatio = videoRef.current.videoWidth / videoRef.current.videoHeight;
      let canvasWidth = 300;
      let canvasHeight = 300;

      if (aspectRatio > 1) {
        // landscape
        canvasHeight = canvasWidth / aspectRatio;
      } else if (aspectRatio < 1) {
        // portrait
        canvasWidth = canvasHeight * aspectRatio;
      }

      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const context = canvas.getContext("2d");
      context?.drawImage(videoRef.current, 0, 0, canvasWidth, canvasHeight);

      onPhotoCapture(canvas.toDataURL("image/png"));
    }
  };

  console.log(isCameraActive);
  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        style={{
          display: isCameraActive ? "inherit" : "none",
          width: "300px",
          height: "300px",
        }}
      />
      <div>
      <Button onClick={startCamera}>Inicia la camara</Button>
      <Button onClick={stopCamera}>Deten la camara</Button>
      <Button onClick={capturePhoto}>Toma la foto</Button>
      </div>
    </>
  );
};

export default PhotoPreviewTakeButton;
