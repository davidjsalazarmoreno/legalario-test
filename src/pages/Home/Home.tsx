import FullWidthTabs from "../../components/MediaActionTab/MediaActionTab";
import ImagePreviewUploadButton from "../../components/ImagePreviewUploadButton/ImagePreviewUploadButton";
import PhotoPreviewTakeButton from "../../components/PhotoPreviewTakeButton/PhotoPreviewTakeButton";
import { useHome } from "../../hooks/useHome";

const Home = () => {
  const {
    previewUrl,
    photoUrl,
    isDocumentTabSelected,
    handleImageSelection,
    handlePreviewReset,
    handlePhotoCapture,
    handleTabSelection,
    handleStopCamera,
  } = useHome();

  return (
    <>
      <FullWidthTabs
        documentUrl={previewUrl}
        photoUrl={photoUrl}
        onTabSelection={handleTabSelection}
        isLoading={false}
      />

      {isDocumentTabSelected ? (
        <ImagePreviewUploadButton
          onImageSelection={handleImageSelection}
          onPreviewReset={handlePreviewReset}
        />
      ) : (
        <PhotoPreviewTakeButton
          onPhotoCapture={handlePhotoCapture}
          onCameraStop={handleStopCamera}
        />
      )}
    </>
  );
};

export default Home;
