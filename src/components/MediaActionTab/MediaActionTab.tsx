import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImagePreview from "../ImagePreview/ImagePreview";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import { useCameraStore } from "../../context/camera/useCameraStore";
import { TabsValues } from "../../types";

export type Props = {
  documentUrl: string;
  photoUrl: string;
  onTabSelection: (tab: number) => void;
  isLoading: boolean;
};

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({
  documentUrl,
  photoUrl,
  onTabSelection,
}: Props) {
  const { stopCamera } = useCameraStore();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    stopCamera();
    setValue(newValue);
    onTabSelection(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Documento" {...a11yProps(0)} />
          <Tab label="Foto" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={TabsValues.DOCUMENT} dir={theme.direction}>
        <ImagePreview isLoading={false} url={documentUrl} />
      </TabPanel>
      <TabPanel value={value} index={TabsValues.PHOTO} dir={theme.direction}>
        <PhotoPreview isLoading={false} url={photoUrl} key={photoUrl} />
      </TabPanel>
    </Box>
  );
}
