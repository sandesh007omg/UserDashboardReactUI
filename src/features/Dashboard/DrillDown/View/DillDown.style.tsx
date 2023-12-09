import styled from "styled-components";

const DrillDownStyled = styled.div`
  padding: 24px 48px;
  h1 {
    color: #000;
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .detail-form {
    background: rgb(251, 251, 252);
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    li {
      width: 48%;
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      align-items: center;
      gap: 16px;
      line-height: 21px;
      font-weight: 600;
      color: #272833;
      label {
        display: inline-block;
        flex: 1;
      }
      p {
        width: 363px;
        height: 40px;
        line-height: 40px;
        width: 68%;
        border: 1px solid #e7e7ed;
        border-radius: 4px;
        overflow: hidden;
        padding: 0 16px;
        font-weight: 400;
      }
    }
  }
`;
export default DrillDownStyled;
