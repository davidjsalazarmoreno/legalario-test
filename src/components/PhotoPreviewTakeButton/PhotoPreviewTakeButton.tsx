import { Button, ButtonGroup } from "@mui/material";
import { useCameraStore } from "../../context/camera/useCameraStore";

export type Props = {
  onCameraStop: () => void;
  onPhotoCapture: (photo: string) => void;
};

const PhotoPreviewTakeButton = ({ onPhotoCapture, onCameraStop }: Props) => {
  const { startCamera, stopCamera, capturePhoto, isCameraActive } =
    useCameraStore();

  const handleCapturePhoto = async () => {
    try {
      const photo = await capturePhoto();
      onPhotoCapture(photo);
    } catch (e) {
      console.log(e);
      console.error("Error capturing photo");
    }
  };

  const handleStartCamera = () => {
    onCameraStop();
    startCamera();
  };

  const handleStopCamera = () => {
    onCameraStop();
    stopCamera();
  };

  return (
    <ButtonGroup>
      {isCameraActive ? (
        <Button onClick={handleStopCamera}>Deten la camara</Button>
      ) : (
        <Button onClick={handleStartCamera}>Inicia la camara</Button>
      )}
      <Button onClick={handleCapturePhoto} disabled={!isCameraActive}>
        Toma la foto
      </Button>
    </ButtonGroup>
  );
};

export default PhotoPreviewTakeButton;
