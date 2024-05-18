import { ImageCard } from "../ImageCard/ImageCard";
import { ImageLoadingState } from "../ImageLoadingState/ImageLoadingState";
import { ImagePlaceholder } from "../ImagePlaceholder/ImagePlaceholder";
import { useCameraStore } from "../../context/camera/useCameraStore";
import Camera from "../Camera/Camera";

export type Props = {
  isLoading: boolean;
  url: string;
};

const PhotoPreview = ({ isLoading = false, url = "" }: Props) => {
  const { isCameraActive } = useCameraStore();
  const isPlaceholderVisible = !isLoading && url.length === 0;

  if (isPlaceholderVisible) {
    return (
      <>
        {!isCameraActive && <ImagePlaceholder variant="circular" />}
        <Camera />
      </>
    );
  }

  if (isLoading) {
    return <ImageLoadingState variant="circular" />;
  }

  return <ImageCard variant="circular" image={url} title="Foto" />;
};

export default PhotoPreview;
