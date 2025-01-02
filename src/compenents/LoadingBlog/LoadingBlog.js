import "./LoadingBlog.css";

const LoadingBlog = () => {
  return (
    <div className="LoadingBlog">
      <div className="LoadingBlog_container">
        <div className="LoadingBlog_content">
          <img src="/Loading/Gif_05.gif" alt="" className="LoadingBlog_loading"/>
        </div>
      </div>
    </div>
  );
};

export default LoadingBlog;
