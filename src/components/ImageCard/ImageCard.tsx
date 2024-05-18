import { Card, CardMedia } from "@mui/material";

type ImageViewerVariants = "circular" | "rectangular";

type Props = {
  image: string;
  title: string;
  variant?: ImageViewerVariants;
};

export const ImageCard = ({ image, title, variant = "rectangular" }: Props) => {
  const isCircular = variant === "circular";

  if (isCircular) {
    const imageStyles = {
      height: "300px",
      width: "300px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    };

    return (
      <CardMedia component="img" image={image} alt={title} sx={imageStyles} />
    );
  }

  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: "300px",
          width: "300px",
        }}
      />
    </Card>
  );
};
