import React, { useContext } from "react";
import { DashboardMainContext } from "../Controller/useDashboard.controller";

interface PackageTableProps {}

const PackageTable: React.FC<PackageTableProps> = () => {
  const { packageTable } = useContext(DashboardMainContext);

  return (
    <div className="card table-package">
      <h3>Package Users Count</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Total User</th>
            </tr>
          </thead>
          <tbody>
            {packageTable.map(
              (
                item: { title: string; users: string | number },
                index: number
              ) => (
                <tr key={index}>
                  <td>{item?.title}</td>
                  <td>{item?.users?.length}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageTable;
