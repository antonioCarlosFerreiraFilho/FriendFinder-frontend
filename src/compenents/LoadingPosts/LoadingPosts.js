import "./LoadingPosts.css";

const LoadingPosts = () => {
  return (
    <div className="LoadingPosts">
      <div className="LoadingPosts_container">
        <div className="LoadingPosts_content">
          <img src="/Loading/Gif_05.gif" alt="" className="LoadingPosts_loading"/>
        </div>
      </div>
    </div>
  );
};

export default LoadingPosts;
