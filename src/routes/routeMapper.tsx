import * as routes from "../constants/route";
import Dashboard from "../features/Dashboard/DashboardMain";
import NotFound from "../features/NotFound";

export const routeMapper = [
  {
    id: 1,
    link: routes.NOTFOUND,
    component: <NotFound />,
  },
  {
    id: 2,
    link: routes.DASHBOARD,
    component: <Dashboard />,
  },
  //   {
  //     id: 3,
  //     link: `${routes.DASHBOARD_DRILL_DOWN}/:id`,
  //     component: <UserRoleDetail />,
  //   },
  //   {
  //     id: 4,
  //     link: routes.USERS,
  //     component: <UserRole />,
  //   },
  //   {
  //     id: 5,
  //     link: `${routes.USERS_DETAILS}/:id`,
  //     component: <UserRoleDetail />,
  //   },
];
