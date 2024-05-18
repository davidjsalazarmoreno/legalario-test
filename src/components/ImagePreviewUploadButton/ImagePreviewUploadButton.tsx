import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export type Props = {
  documentUrl: string;
  onImageSelection: (url: string) => void;
  onPreviewReset: () => void;
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ImagePreviewUploadButton = ({
  documentUrl,
  onImageSelection,
  onPreviewReset,
}: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageSelection(url);
    }
  };

  const handlePreviewReset = () => {
    onPreviewReset();
  };

  if (documentUrl.length > 0) {
    return (
      <Button variant="contained" onClick={handlePreviewReset}>
        Quitar documento
      </Button>
    );
  }

  return (
    <Button
      component="label"
      role="button"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Selecciona el documento
      <VisuallyHiddenInput
        type="file"
        accept="image/jpg, image/png"
        onChange={handleInputChange}
      />
    </Button>
  );
};

export default ImagePreviewUploadButton;
