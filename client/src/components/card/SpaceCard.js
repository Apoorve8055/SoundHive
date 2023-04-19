import { IoBookmark, IoBookmarks, IoBookmarksOutline } from "react-icons/io5";
import "./SpaceCard.scss";
const SpaceCard = ({ title, description, ownerName, live, active, saved }) => {
  return (
    <div className={`space-card ${!active && "card-width"}"`}>
      <div className="space-details">
        <div className="space-title">{title}</div>
        <div className="subtext">{description}</div>
      </div>
      <div className="space-additional-details">
        <div className="owner">
          <b>Space by {ownerName}</b>
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
              <b>Live:</b> {live}
            </div>
          )}
          {active && <div className="join">Join</div>}
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
