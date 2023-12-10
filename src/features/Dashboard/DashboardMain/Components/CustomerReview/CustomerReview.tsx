import Chart from "react-apexcharts";
import { data } from "./data";
import styled from "styled-components";

const CustomerReview = () => {
  return (
    <CustomerReviewStyled className="CustomerReview card">
      <h3>Customers Review</h3>
      <Chart options={data?.options} series={data?.series} type="area" />
    </CustomerReviewStyled>
  );
};

export default CustomerReview;

const CustomerReviewStyled = styled.section``;
