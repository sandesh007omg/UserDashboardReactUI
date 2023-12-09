import { useNavigate } from "react-router-dom";
import { RecentBrowserHistoryContainer } from "./RecentPageHistory.styled";

interface IRecentPageHistoryProps {
  items: {
    title: string;
    breadCrumb: string;
    time: string;
    link: string;
    id: string | number;
  }[];
}
const RecentPageHistory = ({ items }: IRecentPageHistoryProps) => {
  const navigate = useNavigate();
  return (
    <RecentBrowserHistoryContainer className="card">
      <h3>Packages Plan Links</h3>
      {items.map((item, index) => (
        <div
          key={item?.id || index}
          onClick={() => navigate(item?.link)}
          className="history-item"
        >
          <div className="title">
            <p>{item.title}</p>
          </div>
          <div className="details">
            <span className="date-time">{item.time}</span>
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
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.73938 6.41201L6.143 2.86824C5.405 2.17413 4.40263 3.11769 5.12411 3.79824L8.38179 7.00038L5.10484 10.2378C4.43293 10.8695 5.46833 11.7968 6.143 11.1623L9.74765 7.61044C10.213 7.18204 10.2901 6.92175 9.73938 6.41201Z"
              fill="#0B5FFF"
            />
          </svg>
        </button>
      </div>
    </RecentBrowserHistoryContainer>
  );
};

export default RecentPageHistory;
