import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface BreadcrumbsProps {}

const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadCrumbsStyled className="breadCrumbs">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name}>
            {isLast ? (
              <span>{name}</span>
            ) : (
              <Link to={routeTo}>{`${name?.toUpperCase()} >`}</Link>
            )}
          </span>
        );
      })}
    </BreadCrumbsStyled>
  );
};

export default Breadcrumbs;

const BreadCrumbsStyled = styled.div`
  display: flex;
  color: rgb(107, 108, 126);
  font-size: 12px;
  align-items: center;
  margin-bottom: 16px;
  & > span {
    display: flex;
    margin-right: 10px;
    span {
      color: #222;
      font-weight: 600;
    }
  }
  a {
    color: rgb(107, 108, 126);
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    transition: all 0.3s ease-in-out 0s;
    text-transform: capitalize;
  }
`;
