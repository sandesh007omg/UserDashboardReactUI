import styled from "styled-components";

const DashboardStyled = styled.div`
  height: calc(100vh - 48px);
  overflow: auto;
  color: #000;
  font-size: 12px;
  padding: 24px 48px;
  .table-header {
    display: flex;
  }
  .card {
    position: relative;
    box-shadow: rgba(39, 40, 51, 0.12) 0px 4px 8px 0px;
    border: 1px solid rgba(39, 40, 51, 0.12);
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 24px;
    width: 100%;
    background-color: #fff;
    caption {
      font-size: 14px;
      font-weight: bold;
      line-height: 21px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .table-header {
      background-color: transparent;
      border: 0;
      font-size: 12px;
      line-height: 15px;
      color: #6b6c7e;
      font-weight: 400;
      height: 18px;
      & > div {
        padding-left: 12px;
      }
    }
    .odd-row,
    .even-row {
      font-weight: 600;
      border-radius: 4px 0 0 4px;
      padding: 4px 8px 4px 14px;
      white-space: nowrap;
      width: auto;
      border-top: 1px solid rgba(46, 91, 255, 0.08);
      border-bottom: 1px solid rgba(46, 91, 255, 0.08);
      border-radius: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
export default DashboardStyled;
