import { IoLocationOutline, IoRadio } from "react-icons/io5";
import "./DashboardPage.scss";
import SpaceCard from "../../../components/card/SpaceCard";
const DashboardPage = () => {
  const spaceCardList = [
    {
      title: "Artificial Intelligence Summit",
      description: "A conference on the latest developments in AI technology",
      ownerName: "Sarah Johnson",
      live: "90",
      saved: true,
    },

    {
      title: "Cybersecurity Symposium",
      description: "A panel discussion on the future of cybersecurity",
      ownerName: "David Lee",
      live: "60",
      saved: false,
    },

    {
      title: "Blockchain Conference",
      description:
        "A gathering of blockchain experts to discuss the future of the technology",
      ownerName: "Jessica Chen",
      live: "120",
      saved: true,
    },

    {
      title: "Digital Marketing Seminar",
      description: "A workshop on the latest digital marketing techniques",
      ownerName: "Ryan Patel",
      live: "75",
      saved: false,
    },

    {
      title: "Web Development Workshop",
      description: "A hands-on session to learn web development skills",
      ownerName: "Michael Kim",
      live: "90",
      saved: true,
    },

    {
      title: "Data Science Summit",
      description: "A conference on the latest developments in data science",
      ownerName: "Emily Chen",
      live: "120",
      active: true,
      saved: false,
    },

    {
      title: "Virtual Reality Symposium",
      description:
        "A panel discussion on the future of virtual reality technology",
      ownerName: "Alex Wong",
      live: "60",
      active: false,
      saved: true,
    },

    {
      title: "Mobile App Development Conference",
      description:
        "A gathering of app developers to discuss the future of mobile app technology",
      ownerName: "Jessica Lee",
      live: "90",
      active: true,
      saved: true,
    },

    {
      title: "Cloud Computing Seminar",
      description: "A workshop on the latest cloud computing techniques",
      ownerName: "Steven Lee",
      live: "75",
      active: false,
      saved: false,
    },

    {
      title: "UI/UX Design Workshop",
      description: "A hands-on session to learn UI/UX design skills",
      ownerName: "Jenny Kim",
      live: "90",
      active: true,
      saved: true,
    },
  ];
  return (
    <div className="dashboard-container">
      <div className="space">
        <div className="heading">
          <IoRadio className="live-icon" /> Online Spaces
        </div>
        <div className="space-area">
          {spaceCardList.map(
            ({ title, description, ownerName, live, active, saved }) =>
              active && (
                <SpaceCard
                  active={active}
                  title={title}
                  description={description}
                  ownerName={ownerName}
                  live={live}
                />
              )
          )}
        </div>
      </div>
      <div className="space">
        <div className="heading">
          <IoLocationOutline className="offline-icon" />
          Offline Spaces
        </div>
        <div className="space-area">
          {spaceCardList.map(
            ({ title, description, ownerName, live, active, saved }) =>
              !active && (
                <SpaceCard
                  saved={saved}
                  active={active}
                  title={title}
                  description={description}
                  ownerName={ownerName}
                  live={live}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
