export const getDrillDownPayloadIn = (data: any): any => {
  return {
    id: data?.id ?? "-",
    userId: data?.user_id ?? null,
    package: data?.package ?? "-",
    expiresOn: data?.expires_on ?? "-",
  };
};

export const getDetailForm = (data: any) => {
  const dataList = [
    { title: "Name", value: data?.name },
    { title: "Username", value: data?.username },
    { title: "Status", value: data?.status || false },
    { title: "Address", value: data?.address },
    { title: "Email", value: data?.email },
    { title: "Country", value: data?.country },
    { title: "Package", value: data?.package },
    { title: "Join Date", value: data?.joinDate },
    { title: "Expire Date", value: data?.expiresOn },
  ];
  return dataList;
};
