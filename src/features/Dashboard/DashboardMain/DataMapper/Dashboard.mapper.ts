export const getDashboardPayloadIn = (data: any): any => {
  return {
    name: data?.name || "",
    pan: data?.pan_no || null,
  };
};
export const getDashboardPayloadOut = (data: any): any => {
  return {
    name: data?.name || "",
    pan_no: data?.pan || null,
  };
};
