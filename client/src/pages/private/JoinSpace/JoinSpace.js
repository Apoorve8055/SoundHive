import {
  IoClose,
  IoCopyOutline,
  IoMicOff,
  IoRadio,
  IoShareSocial,
} from "react-icons/io5";
import "./JoinSpace.scss";
import Avatar from "react-avatar";
const JoinSpace = () => {
  const users = [
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
    { name: "Apoorve" },
  ];
  return (
    <div className="join-space">
      <div className="space-name">
        <IoRadio className="live-icon" />
        <h3>Tech Talk</h3>
      </div>
      <div className="space-container">
        <div className="speakers-list">
          {users.map(() => (
            <div className="avatar-details">
              <Avatar name="Sam" size="40" round={true} />
              <b className="text">Juan Domingo</b>
              <div className="host-text">Host</div>
            </div>
          ))}
        </div>
        <div className="space-join-details">
          <div className="space-details">
            <div className="space-title">Tech Talk</div>
            <div className="subtext">
              A space for discussing the latest technology trends and news. A
              space for discussing the latest technology trends and news. A
              space for discussing the latest technology trends and news. A
              space for discussing the latest technology trends and news.
            </div>
            <div className="owner">
              <b>Space by John Doe</b>
            </div>
          </div>
          <div className="join-space-action">
            <div className="join-btn-wrapper">
              <IoClose />
            </div>
            <div className="join-btn-wrapper">
              <IoMicOff />
            </div>
            <div className="join-btn-wrapper">
              <IoCopyOutline />
            </div>
            <div className="join-btn-wrapper">
              <IoShareSocial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinSpace;
