import React, { createContext } from 'react';
import { useCamera } from '../../hooks/useCamera';


type CameraContextType = ReturnType<typeof useCamera>;

export const CameraContext = createContext<CameraContextType | undefined>(undefined);

export type CameraProviderProps = {
  children: React.ReactNode;
}

export const CameraProvider = ({ children }: CameraProviderProps) => {
  const cameraStore = useCamera();

  return (
    <CameraContext.Provider value={cameraStore}>
      {children}
    </CameraContext.Provider>
  );
};

