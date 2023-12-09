import * as routes from "../constants/route";
import Dashboard from "../features/Dashboard/DashboardMain";
import DrillDown from "../features/Dashboard/DrillDown";
import NotFound from "../features/NotFound";
import Users from "../features/Users";

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

  {
    id: 3,
    link: `${routes.DASHBOARD_DRILL_DOWN}/:id`,
    component: <DrillDown />,
  },
  {
    id: 4,
    link: routes.USERS,
    component: <Users />,
  },
];
