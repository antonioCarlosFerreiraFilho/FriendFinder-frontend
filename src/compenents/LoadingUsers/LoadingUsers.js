import "./LoadingUsers.css";

const LoadingUsers = () => {
  return (
    <div className="LoadingUsers">
      <div className="LoadingUsers_container">
        <div className="LoadingUsers_content">
          <img src="/Loading/Gif_05.gif" alt="" className="LoadingUsers_loading" />
        </div>
      </div>
    </div>
  );
};

export default LoadingUsers;
