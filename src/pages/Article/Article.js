//css
import "./Article.css";
//components
import Post from "../../compenents/Post/Post";
import NavBarAuth from "../../compenents/NavBarAuth/NavBarAuth";
import CardNavBarAuth from "../../compenents/CardNavBarAuth/CardNavBarAuth";
import PostPhoto from "../../compenents/PostPhoto/PostPhoto";
import UsersRecent from "../../compenents/UsersRecent/UsersRecent";

const Article = () => {
  return (
    <div className="Article">
      <div className="Article_container">
        <div className="Article_content">
          {/*-- NavBar Auth --*/}
          <section className="Article_NavBarAuth">
            <NavBarAuth />
          </section>

          {/*-- Posts --*/}
          <section className="Article_cardNavBarAuth-Posts">
            <div className="Article_cardNavBarAuth">
              <CardNavBarAuth />
            </div>

            <div className="Article_Posts-PostPhoto-UsersRecent">
              <div className="Article_Posts-UsersRecent">
                <div className="Article_Posts">
                  <PostPhoto />
                  <Post />
                </div>
              </div>
            </div>

            <div className="Article_UsersRecent">
              <UsersRecent />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Article;
