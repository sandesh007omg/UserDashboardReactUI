import Breadcrumbs from "../../../../components/BreadCrumbs";
import useDrillDown from "../Controller/useDrillDown.controller";
import DrillDownStyled from "./DillDown.style";
import { DRILLDOWN_TITLE } from "./config";

const DrillDown = () => {
  const { state, details } = useDrillDown();
  return (
    <DrillDownStyled>
      <Breadcrumbs />
      <h1>{`${state?.name} Details` ?? DRILLDOWN_TITLE}</h1>
      <ul className="detail-form">
        {details?.map((item: any) => {
          return (
            <li key={item?.title}>
              <label htmlFor="">{item?.title}</label>
              <p className="as-input">{item?.value}</p>
            </li>
          );
        })}
      </ul>
    </DrillDownStyled>
  );
};

export default DrillDown;
