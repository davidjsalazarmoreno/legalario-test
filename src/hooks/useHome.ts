import { useState } from 'react';
import { TabsValues } from '../types';

export const useHome = () => {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [tabSelected, setTabSelected] = useState<TabsValues>(TabsValues.DOCUMENT);

  const isDocumentTabSelected = tabSelected === TabsValues.DOCUMENT;

  const handleImageSelection = (url: string) => {
    setPreviewUrl(url);
  }

  const handlePreviewReset = () => {
    setPreviewUrl("");
  }

  const handlePhotoCapture = (url: string) => {
    setPhotoUrl(url);
  }

  const handleStopCamera = () => {
    setPhotoUrl("");
  }

  const handleTabSelection = (tab: TabsValues) => {
    setTabSelected(tab);
  }

  return {
    previewUrl,
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
