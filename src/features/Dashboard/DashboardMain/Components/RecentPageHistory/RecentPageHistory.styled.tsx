import styled from 'styled-components';

export const RecentBrowserHistoryContainer = styled.section`
  line-height: 150%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .history-item {
    padding: 8px 16px;
    border: 1px solid #e7e7ed;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;

    .title {
      p {
        font-weight: 400;
        font-size: 14px;
      }
      span {
        font-weight: 400;
        font-size: 10px;
        color: #a7a9bc;
      }
    }

    .details {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }

  hr {
    margin-top: 2rem;
    border: 1px solid #e7e7ed;
  }

  .upgrade-section {
    margin-top: 1rem;
    padding: 24px;
    display: flex;
    background-color: #f0f5ff;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 125%;
      color: #272833;
    }

    button.pricing {
      display: flex;
      align-items: center;
      padding: 4px 4px 4px 8px;

      border: 1px solid #0b5fff;
      border-radius: 35px;
      background-color: transparent;

      font-weight: 600;
      font-size: 12px;
      line-height: 150%;
      color: #0b5fff;
    }
  }
`;
