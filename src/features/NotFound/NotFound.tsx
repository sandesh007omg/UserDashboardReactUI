import { Link } from "react-router-dom";
import styled from "styled-components";
import * as routes from "../../constants/route";

const NotFound = () => {
  return (
    <ErrorWrapper>
      <div className="error-container">
        <div className="error-img">
          <img src="/image/error-illustrations.png" alt="Error Illustrations" />
        </div>
        <div className="error-content">
          <h1>Page not Found</h1>
          <p>Whoops! We do not have the page you are looking for...</p>
          <p>You may have mistyped the address or the page may have moved.</p>
          <div className="error-link">
            <Link to={routes.DASHBOARD}>Go to dashboard</Link>
          </div>
        </div>
      </div>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  background: #f3f4f6;
  width: 100%;
  height: 100%;

  .error-container {
    max-width: 500px;
    padding: 0 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    font-size: 1.4rem;
  }

  .error-container img {
    height: 150px;
  }

  @media only screen and (min-width: 768px) {
    .error-container img {
      height: 200px;
    }
  }

  @media only screen and (min-width: 992px) {
    .error-container img {
      height: 300px;
    }
  }

  .error-content {
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) {
    .error-content {
      margin-top: 500px;
    }
  }

  @media only screen and (min-width: 992px) {
    .error-content {
      margin-top: 110px;
    }
  }

  .error-content h1 {
    font-size: 20px;
    font-weight: bold;
    text-transform: inherit;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 768px) {
    .error-content h1 {
      font-size: 24px;
      margin-bottom: 32px;
    }
  }

  @media only screen and (min-width: 992px) {
    .error-content h1 {
      font-size: 28px;
    }
  }

  .error-content p {
    margin: 0;
    font-size: 10px;
    line-height: 18px;
  }

  @media only screen and (min-width: 768px) {
    .error-content p {
      font-size: 16px;
      line-height: 30px;
    }
  }

  .error-link {
    margin-top: 16px;
  }

  @media only screen and (min-width: 768px) {
    .error-link {
      margin-top: 32px;
    }
  }

  .error-link a {
    display: inline-block;
    background: #0b5fff;
    padding: 8px 20px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.35s ease-in-out;
  }

  .error-link a:hover,
  .error-link a:focus {
    background: #3178ff;
    transition: all 0.35s ease-in-out;
  }
`;

export default NotFound;
