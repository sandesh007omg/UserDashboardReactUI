import moment from "moment";

export const getDashboardPayloadIn = (list: any, subscribedUser: any): any => {
  const subscribedUserIds = subscribedUser?.map((a: any) => Number(a?.user_id));
  const dataList = list?.map((data: any, index: number) => {
    return {
      id: data?.id,
      sn: index + 1,
      subscribed: subscribedUserIds?.includes(data?.id) ? "Yes" : "No",
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
