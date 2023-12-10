import { ReactNode } from "react";
import { Container } from "./CardContainer.styled";

interface ICardContainer {
  children?: JSX.Element | ReactNode;
  title?: string;
  value?: string | number;
}

const CardContainer = ({ title = "", children, value }: ICardContainer) => {
  return (
    <Container>
      {title?.length > 0 && (
        <div className="card__title">{title?.toUpperCase()}</div>
      )}
      {!!value && <span>{value}</span>}
      {children}
    </Container>
  );
};

export default CardContainer;
