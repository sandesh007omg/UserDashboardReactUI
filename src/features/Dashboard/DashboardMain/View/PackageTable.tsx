import React, { useContext } from "react";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import styled from "styled-components";

interface PackageTableProps {}

const PackageTable: React.FC<PackageTableProps> = () => {
  const { packageTable } = useContext(DashboardMainContext);

  return (
    <PackageTableStyled className="card table-package">
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
    </PackageTableStyled>
  );
};

export default PackageTable;

export const PackageTableStyled = styled.section`
  &.table-package {
    height: 350px;
    table {
      border: 0;
      th {
        font-weight: 600;
      }
      td,
      th {
        padding: 0;
        border-left: 0;
        border-right: 0;
        background: #fff;
      }
      thead {
        tr {
          height: 18px;
        }
      }
      tbody {
        tr {
          height: 30px;
        }
      }
    }
  }
`;
