import { Box, Card, CircularProgress } from "@mui/material";

type Props = {
  variant?: "circular" | "rectangular";
};

export const ImageLoadingState = ({ variant = "rectangular" }: Props) => {
  const isCircular = variant === "circular";
  const sx = isCircular ? { borderRadius: "50%" } : {};

  return (
    <Card
      variant="outlined"
      sx={{
        height: 300,
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    </Card>
  );
};
