import styled from "styled-components";

const DashboardStyled = styled.div`
  height: calc(100vh - 48px);
  overflow: auto;
  color: #000;
  font-size: 12px;
  padding: 24px;
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
    .header-wrapper {
      display: flex;
      gap: 24px;
      margin-bottom: 12px;
    }
    .table {
      overflow: auto;
      & > div {
        display: inline-flex;
      }
    }
    h2 {
      font-size: 20px;
      font-weight: bold;
      line-height: 29px;
      text-transform: uppercase;
      margin-bottom: 20px;
      flex: 1;
      text-align: left;
    }
    h3,
    caption {
      font-size: 14px;
      font-weight: bold;
      line-height: 21px;
      text-transform: uppercase;
      margin-bottom: 20px;
      flex: 1;
      text-align: left;
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
        padding-left: 8px;
        cursor: pointer;
      }
    }
    .row {
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
      cursor: pointer;
    }
    .search-bar input {
      display: flex;
      flex-wrap: wrap;
      min-width: 32px;
      min-width: 193px;
      height: 32px;
      border: 1px solid rgb(205, 206, 217);
      background-color: rgb(255, 255, 255);
      border-radius: 4px;
      -webkit-box-pack: end;
      justify-content: flex-end;
      position: relative;
      padding: 8px;
    }
    .zindex-2__control {
      min-width: 200px;
    }
    .css-b62m3t-container,
    .zindex-2__control,
    .css-4xgw5l-IndicatorsContainer2 {
      height: 32px;
      min-height: 32px;
    }
  }
`;
export default DashboardStyled;
