//css
import "./SearchFor.css";
//API
import { uploads } from "../../utils/config";
//react
import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
//hooks
import { useQuery } from "../../hooks/useQuery";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { searchPost } from "../../slices/postSlice";

const SearchFor = () => {
  //initial States
  const query = useQuery();
  const search = query.get("q");

  //Redux
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  //LOAD Articles
  useEffect(() => {
    dispatch(searchPost(search));
  }, [dispatch, search]);

  return (
    <div>
      <div className="SearchFor_container">
        <div className="SearchFor_content">
          <div className="SearchFor_dataFor">
            <p>
              Voce procurou por: <strong>{search}</strong>
            </p>
          </div>
          <div className="SearchFor_Cards">
            <div className="SearchFor_Cards-container">
              <div className="SearchFor_Cards-content">
                {loading ? (
                  <p>Loading....</p>
                ) : (
                  <>
                    {posts && posts.length == 0 && (
                      <p>Ainda não ha postagens...</p>
                    )}

                    {posts &&
                      posts.length > 0 &&
                      posts.map((postagem) => (
                        <NavLink
                          className="SearchFor_box"
                          key={postagem._id}
                          to={`/article/${postagem._id}`}
                        >
                          <div className="SearchFor_box-image">
                            <img
                              src={`${uploads}/Posts/${postagem.imagePost}`}
                              alt={`${postagem.title}`}
                            />
                          </div>
                          <div className="SearchFor_box-Title">
                            <p>24 / abril / 2025</p>
                            <h1>{postagem.title}</h1>
                          </div>
                        </NavLink>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFor;
