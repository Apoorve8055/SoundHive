import { IoLocationOutline, IoRadio } from "react-icons/io5";
import "./DashboardPage.scss";
import SpaceCard from "../../../components/card/SpaceCard";
const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="space">
        <div className="heading">
          <IoRadio className="live-icon" /> Online Spaces
        </div>
        <div className="space-area">
          <SpaceCard active={true} />
          <SpaceCard active={true} />
          <SpaceCard active={true} />
          <SpaceCard active={true} />
        </div>
      </div>
      <div className="space">
        <div className="heading">
          <IoLocationOutline className="offline-icon" />
          Offline Spaces
        </div>
        <div className="space-area">
          <SpaceCard active={false} saved={true} />
          <SpaceCard active={false} />
          <SpaceCard active={false} />
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
