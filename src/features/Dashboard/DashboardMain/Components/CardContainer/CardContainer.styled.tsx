import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  box-shadow: rgba(39, 40, 51, 0.12) 0px 4px 8px 0px;
  border: 1px solid rgba(39, 40, 51, 0.12);
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 24px;
  width: 100%;
  height: 105px;
  background-color: #fff;
  .card__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    padding-bottom: 12px;
    p {
      font-size: 16px;
    }
  }
`;
