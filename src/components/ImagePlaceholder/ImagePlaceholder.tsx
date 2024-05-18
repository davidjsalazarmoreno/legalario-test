import { Card, Skeleton } from "@mui/material";

type Props = {
  variant?: "circular" | "rectangular";
};

export const ImagePlaceholder = ({ variant = "rectangular" }: Props) => {
  const isCircular = variant === "circular";
  const sx = isCircular ? { borderRadius: "50%" } : {};
  return (
    <Card
      variant="outlined"
      sx={{
        width: 300,
        height: isCircular ? 300 : 200,
        ...sx,
      }}
    >
      <Skeleton
        variant={variant}
        width="100%"
        height="100%"
        animation={false}
      />
    </Card>
  );
};
