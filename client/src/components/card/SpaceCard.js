import { IoBookmark, IoBookmarks, IoBookmarksOutline } from "react-icons/io5";
import "./SpaceCard.scss";
const SpaceCard = ({ active, saved }) => {
  return (
    <div className={`space-card ${!active && "card-width"}"`}>
      <div className="space-details">
        <div className="space-title">Tech Talk</div>
        <div className="subtext">
          A space for discussing the latest technology trends and news. A space
          for discussing the latest technology trends and news. A space for
          discussing the latest technology trends and news. A space for
          discussing the latest technology trends and news.
        </div>
      </div>
      <div className="space-additional-details">
        <div className="owner">
          <b>Space by John Doe</b>
          {!active ? (
            saved ? (
              <IoBookmark className="bookmark" />
            ) : (
              <IoBookmarksOutline className="bookmark" />
            )
          ) : (
            ""
          )}
        </div>
        <div className="live-section">
          {active && (
            <div className="live-wrapper">
              <div className="live"></div>
              <b>Live:</b> 120
            </div>
          )}
          {active && <div className="join">Join</div>}
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
