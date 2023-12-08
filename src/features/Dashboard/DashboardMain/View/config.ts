import { convertToTitle } from "../../../../common/helpers";
import { DASHBOARD } from "../../../../constants/navigationMenu";

const DASHBOARD_TITLE = convertToTitle(DASHBOARD);
export const tableProps = {
  rowHeight: 30,
  tableColumns: [
    { label: "SN", id: "sn", width: 100 },
    { label: "Name", id: "name", width: 200 },
    { label: "Username", id: "userName", width: 100 },
    { label: "Email", id: "email", width: 300 },
    { label: "Status", id: "status", width: 100 },
    { label: "Join Date", id: "joinDate", width: 100 },
    { label: "Country", id: "country", width: 200 },
    { label: "Address", id: "address", width: 200 },
  ],
};
export const STATUS_LIST = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

export { DASHBOARD_TITLE };
