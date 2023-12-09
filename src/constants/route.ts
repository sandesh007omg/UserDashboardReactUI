import * as navigationMenu from "./navigationMenu";

const NOTFOUND = "*";
const DASHBOARD = `/${navigationMenu?.DASHBOARD}`;
const DASHBOARD_DRILL_DOWN = `${DASHBOARD}`;
const USERS = `/${navigationMenu?.USERS}`;
const USERS_DETAILS = `${USERS}/${navigationMenu?.DETAILS}`;

export { NOTFOUND, DASHBOARD, DASHBOARD_DRILL_DOWN, USERS_DETAILS, USERS };
