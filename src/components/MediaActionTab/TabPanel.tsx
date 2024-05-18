import { Box, Typography } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: Props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
