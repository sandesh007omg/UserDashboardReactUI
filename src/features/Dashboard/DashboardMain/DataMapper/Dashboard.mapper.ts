import moment from "moment";

export const getDashboardPayloadIn = (list: any): any => {
  const dataList = list?.map((data: any, index: number) => {
    return {
      sn: index + 1,
      name:
        `${data?.first_name} ${data?.middle_name} ${data?.middle_name}` ?? "-",
      userName: data?.username ?? "-",
      email: data?.email ?? "",
      status: Number(data?.active) === 1 ? "Active" : "Inactive" ?? "-",
      joinDate:
        moment.unix(Number(data?.join_date)).format("YYYY-MM-DD") ?? "-",
      country: data?.country ?? "-",
      address: data?.address ?? "-",
    };
  });
  return dataList;
};
