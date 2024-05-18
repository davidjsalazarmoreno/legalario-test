import { useCameraStore } from "../../context/camera/useCameraStore";

const Camera = () => {
  const { videoRef, isCameraActive } = useCameraStore();

  return (
    <video
      ref={videoRef}
      autoPlay
      style={{
        display: isCameraActive ? "inherit" : "none",
        width: "300px",
        height: "300px",
      }}
    />
  );
};

export default Camera;
