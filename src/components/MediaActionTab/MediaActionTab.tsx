import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ImagePreview from "../ImagePreview/ImagePreview";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import { useCameraStore } from "../../context/camera/useCameraStore";
import { TabsValues } from "../../constants";
import TabPanel from "./TabPanel";

export type Props = {
  documentUrl: string;
  photoUrl: string;
  onTabSelection: (tab: number) => void;
  isLoading: boolean;
};

export default function MediaActionTab({
  documentUrl,
  photoUrl,
  onTabSelection,
}: Props) {
  const { stopCamera, isCameraActive } = useCameraStore();
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    if (isCameraActive && newValue === TabsValues.DOCUMENT) {
      stopCamera();
    }
    setValue(newValue);
    onTabSelection(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Documento" />
          <Tab label="Foto" disabled={documentUrl.length === 0} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={TabsValues.DOCUMENT}>
        <ImagePreview isLoading={false} url={documentUrl} />
      </TabPanel>
      <TabPanel value={value} index={TabsValues.PHOTO}>
        <PhotoPreview isLoading={false} url={photoUrl} key={photoUrl} />
      </TabPanel>
    </>
  );
}
