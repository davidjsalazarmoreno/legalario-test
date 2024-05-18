import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export type Props = {
  handleImageSelection: (url: string) => void;
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ImagePreviewUploadButton = ({handleImageSelection}: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      handleImageSelection(url);
    }
  }
  return (
    <Button
      component="label"
      role="button"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Selecciona el documento
      <VisuallyHiddenInput type="file" accept="image/jpg, image/png" onChange={handleInputChange} />
    </Button>
  );
}

export default ImagePreviewUploadButton;
