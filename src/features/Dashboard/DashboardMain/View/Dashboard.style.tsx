import styled from "styled-components";

const DashboardStyled = styled.div`
  color: #000;
  font-size: 12px;
  padding: 24px;
  .apexcharts-legend {
    left: 98px !important;
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
    &.CustomerReview {
      height: 459px;
    }
    h3 {
      font-size: 16px;
      font-weight: bold;
      line-height: 21px;
      text-transform: uppercase;
      margin-bottom: 20px;
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
  }
  .inactive {
    span {
      font-size: 24px;
      color: rgb(218, 20, 20);
      font-weight: 600;
    }
  }
  .active {
    span {
      font-size: 24px;
      color: rgb(40, 125, 60);
      font-weight: 600;
    }
  }
`;
export default DashboardStyled;
