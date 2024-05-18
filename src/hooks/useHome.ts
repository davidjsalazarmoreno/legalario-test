import { useState } from "react";
import { TabsValues } from "../constants";

export const useHome = () => {
  const [documentUrl, setDocumentUrl] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [tabSelected, setTabSelected] = useState<TabsValues>(
    TabsValues.DOCUMENT
  );

  const isDocumentTabSelected = tabSelected === TabsValues.DOCUMENT;

  const handleImageSelection = (url: string) => {
    setDocumentUrl(url);
  };

  const handlePreviewReset = () => {
    setDocumentUrl("");
  };

  const handlePhotoCapture = (url: string) => {
    setPhotoUrl(url);
  };

  const handleStopCamera = () => {
    setPhotoUrl("");
  };

  const handleTabSelection = (tab: TabsValues) => {
    setTabSelected(tab);
  };

  return {
    documentUrl,
    photoUrl,
    tabSelected,
    isDocumentTabSelected,
    handleImageSelection,
    handlePreviewReset,
    handlePhotoCapture,
    handleTabSelection,
    handleStopCamera,
  };
};
