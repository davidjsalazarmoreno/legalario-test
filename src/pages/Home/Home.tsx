import MediaActionTab from "../../components/MediaActionTab/MediaActionTab";
import ImagePreviewUploadButton from "../../components/ImagePreviewUploadButton/ImagePreviewUploadButton";
import PhotoPreviewTakeButton from "../../components/PhotoPreviewTakeButton/PhotoPreviewTakeButton";
import { useHome } from "../../hooks/useHome";
import { Box } from "@mui/material";

const Home = () => {
  const {
    documentUrl,
    photoUrl,
    isDocumentTabSelected,
    handleImageSelection,
    handlePreviewReset,
    handlePhotoCapture,
    handleTabSelection,
    handleStopCamera,
  } = useHome();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100vw"
    >
      <MediaActionTab
        documentUrl={documentUrl}
        photoUrl={photoUrl}
        onTabSelection={handleTabSelection}
        isLoading={false}
      />

      {isDocumentTabSelected ? (
        <ImagePreviewUploadButton
          documentUrl={documentUrl}
          onImageSelection={handleImageSelection}
          onPreviewReset={handlePreviewReset}
        />
      ) : (
        <PhotoPreviewTakeButton
          onPhotoCapture={handlePhotoCapture}
          onCameraStop={handleStopCamera}
        />
      )}
    </Box>
  );
};

export default Home;
