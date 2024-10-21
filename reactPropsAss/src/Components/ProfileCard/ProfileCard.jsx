import "./ProfileCard.css";

function ProfileCard({ name, age, location, profileImage }) {
  return (
    <>
      <div className="profileFlex">
        <div className="profile">
        
          <div>
          <img
              src={profileImage}
              alt="profileImage"
              className="profileImage"
              />
            <p>{name}</p>
            <p>{age}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
