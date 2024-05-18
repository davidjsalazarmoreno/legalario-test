import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = (props: Props) => {
  const { children, value, index } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
