//cs
import "./Home.css";
//components
import NavBarAuth from "../../compenents/NavBarAuth/NavBarAuth";
import CardNavBarAuth from "../../compenents/CardNavBarAuth/CardNavBarAuth";
import Posts from "../../compenents/Posts/Posts";
import PostPhoto from "../../compenents/PostPhoto/PostPhoto";
import UsersRecent from "../../compenents/UsersRecent/UsersRecent";

const Home = () => {
  return (
    <div className="Home_container">
      <div className="Home_content">
        {/*-- NavBar Auth --*/}
        <section>
          <NavBarAuth />
        </section>

        {/*-- Posts --*/}
        <section className="Home_cardNavBarAuth-Posts">
          <div className="Home_cardNavBarAuth">
            <CardNavBarAuth />
          </div>

          <div className="Home_Posts-PostPhoto-UsersRecent">
            <div className="Home_Posts-UsersRecent">
              <div className="Home_Posts">
                <PostPhoto />
                <Posts />
              </div>
            </div>
          </div>

          <div className="Home_UsersRecent">
            <UsersRecent />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
