import "./ProfileCard.css";

function ProfileCard({ name, age, id, location, profileImage , onclick}) {
  return (
    <>
      <div className="profileFlex">
        <div className="profile">
        
          <div id={id}>
          <img
              src={profileImage}
              alt="profileImage"
              className="profileImage"
              />
            <p>{name}</p>
            <p>{age}</p>
            <p>{location}</p>
            <input type="checkbox" onClick={onclick}/>
            <label>Theme</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
