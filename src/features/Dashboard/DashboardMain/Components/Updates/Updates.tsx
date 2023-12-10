import { UpdatesData } from "../../mockData/user";
import styled from "styled-components";

const Updates = () => {
  return (
    <UpdateStyled className="Updates card">
      <h3>Customers Query</h3>
      {UpdatesData?.map?.((update) => {
        return (
          <div className="update" key={update?.name}>
            <img src={update?.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update?.name}</span>
                <span> {update?.noti}</span>
              </div>
              <span>{update?.time}</span>
            </div>
          </div>
        );
      })}
    </UpdateStyled>
  );
};

export default Updates;

const UpdateStyled = styled.section`
  &.Updates {
    background: white;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }

  .update {
    display: flex;
    gap: 0.5rem;
  }

  .update > img {
    width: 3.2rem;
    height: 3.2rem;
  }

  .noti > div > span:nth-of-type(1) {
    font-weight: bold;
  }
`;
