import { ImagePlaceholder } from "../ImagePlaceholder/ImagePlaceholder";
import { ImageLoadingState } from "../ImageLoadingState/ImageLoadingState";
import { ImageCard } from "../ImageCard/ImageCard";

export type Props = {
  isLoading: boolean;
  url: string;
};

const ImagePreview = ({ isLoading = false, url = "" }: Props) => {
  const isPlaceholderVisible = !isLoading && url.length === 0;

  if (isPlaceholderVisible) {
    return <ImagePlaceholder />;
  }

  if (isLoading) {
    return <ImageLoadingState />;
  }

  return <ImageCard image={url} title="Documento" />;
};

export default ImagePreview;
