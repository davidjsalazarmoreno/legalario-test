

export const requestCameraPermission = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    return true;
  } catch (error) {
    return false;
  }
}


export const isPermissionGranted = async () => {
  // The types are not updated to include the "camera" permission
  // Here's the full list of permissions: https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query#test_support_for_various_permissions
  const permission = await navigator.permissions.query({ name: "camera" as PermissionName });
  return permission.state === "granted";
}
