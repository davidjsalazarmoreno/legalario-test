import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

export type Props = {
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
  onImageSelection,
  onPreviewReset,
}: Props) => {
  const [image, setImage] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageSelection(url);
      setImage(url);
    }
  };

  const handlePreviewReset = () => {
    onPreviewReset();
    setImage("");
  };

  if (image) {
    return (
      <Button variant="contained" onClick={handlePreviewReset}>
        Cambiar documento
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
