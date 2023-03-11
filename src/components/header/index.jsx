import "./styles.css";
import profilephoto from "../../assets/profilephoto.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-card">
        <div className="header-card--profile">
          <img src={profilephoto} alt="profilephoto" />
          <h3>Rodny Cotton</h3>
          <p>Helsinki, Finland</p>
        </div>

        <div className="header-card--section">
          <div className="header-card--section__postfollowerfollowing">
            <p>100</p>
            <span>Posts</span>
          </div>
          <div className="header-card--section__postfollowerfollowing">
            <p>2,242</p>
            <span>Follower</span>
          </div>
          <div className="header-card--section__postfollowerfollowing">
            <p>1,432</p>
            <span>Following</span>
          </div>
        </div>
      </div>
    </header>
  );
}
