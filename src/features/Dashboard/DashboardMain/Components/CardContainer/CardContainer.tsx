import { ReactNode } from "react";
import { Container } from "./CardContainer.styled";

interface ICardContainer {
  children: JSX.Element | ReactNode;
  title?: string;
}

const CardContainer = ({ title, children }: ICardContainer) => {
  return (
    <Container>
      {title?.length > 0 && (
        <div className="card__title">{title?.toUpperCase()}</div>
      )}
      {children}
    </Container>
  );
};

export default CardContainer;
