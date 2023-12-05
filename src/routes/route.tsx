import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routeMapper } from "./routeMapper";
import Dashboard from "../features/Dashboard/DashboardMain";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        {routeMapper.map(({ link, component, id }: any) => (
          <Route path={link} key={id} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
