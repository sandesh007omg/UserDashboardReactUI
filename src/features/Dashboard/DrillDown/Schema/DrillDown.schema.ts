import * as Yup from "yup";

export const DashboardSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
});
