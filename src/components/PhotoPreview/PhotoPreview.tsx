import { ImageCard } from "../ImageCard/ImageCard";
import { ImageLoadingState } from "../ImageLoadingState/ImageLoadingState";
import { ImagePlaceholder } from "../ImagePlaceholder/ImagePlaceholder";

export type Props = {
  isLoading: boolean;
  url: string;
};

const PhotoPreview = ({ isLoading = false, url = "" }: Props) => {
  const isPlaceholderVisible = !isLoading && url.length === 0;

  if (isPlaceholderVisible) {
    return <ImagePlaceholder variant="circular" />;
  }

  if (isLoading) {
    return <ImageLoadingState variant="circular" />;
  }

  return <ImageCard variant="circular" image={url} title="Foto" />;
};

export default PhotoPreview;
