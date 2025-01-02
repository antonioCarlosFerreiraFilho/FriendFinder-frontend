//CSS
import "./Search.css";
//components
import NavBarAuth from "../../compenents/NavBarAuth/NavBarAuth";
import CardNavBarAuth from "../../compenents/CardNavBarAuth/CardNavBarAuth";
import UsersRecent from "../../compenents/UsersRecent/UsersRecent";
import PostPhoto from "../../compenents/PostPhoto/PostPhoto";
import SearchFor from '../../compenents/SearchFor/SearchFor';

const Search = () => {
  return (
    <div className="Search">
      <div className="Search_container">
        <div className="Search_content">
          <section>
            <NavBarAuth />
          </section>
          <section className="Search_cardNavBarAuth-Posts">
            <div className="Search_cardNavBarAuth">
              <CardNavBarAuth />
            </div>

            <div className="Search_Posts-PostPhoto-UsersRecent">
              <div className="Search_Posts-UsersRecent">
                <div className="Search_Posts">
                  <PostPhoto />
                  <SearchFor />
                </div>
              </div>
            </div>

            <div className="Search_UsersRecent">
              <UsersRecent />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Search;
