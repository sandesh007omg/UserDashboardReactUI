import { useNavigate } from "react-router-dom";
import { PackageLinksContainer } from "./PackageLinks.styled";

interface IRecentPageHistoryProps {
  items: any;
}
const PackageLinks = ({ items }: IRecentPageHistoryProps) => {
  const navigate = useNavigate();
  return (
    <PackageLinksContainer className="card">
      <h3>Packages Plan Links</h3>
      {items.map((item, index) => (
        <div
          key={item || index}
          onClick={() => navigate(item?.link)}
          className="history-item"
        >
          <div className="title">
            <p>{item}</p>
          </div>
          <div className="details">
            <img src="/images/links.svg" alt="" />
          </div>
        </div>
      ))}
      <hr />
      <div className="upgrade-section">
        <img src="images/upgrade.svg" alt="" />
        <p>Upgrade Your Plan</p>
        <button className="pricing">
          See Pricing
          <img src="/images/pricing.svg" alt="" />
        </button>
      </div>
    </PackageLinksContainer>
  );
};

export default PackageLinks;
