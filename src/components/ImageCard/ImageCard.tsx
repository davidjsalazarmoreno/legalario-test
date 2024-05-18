import { Card, CardMedia } from "@mui/material";

type ImageViewerVariants = "circular" | "rectangular";

type Props = {
  image: string;
  title: string;
  variant?: ImageViewerVariants;
};

export const ImageCard = ({ image, title, variant = "rectangular" }: Props) => {
  const isCircular = variant === "circular";
  const sx = isCircular
    ? {
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "50%",
        objectFit: "cover",
      }
    : {};
  return (
    <Card sx={sx}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: "300px", width: "300px" }}
      />
    </Card>
  );
};
