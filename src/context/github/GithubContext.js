import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;


export const GithubProvier = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
     
    });

    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // GET SINGLE USER

  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };



// Get users repos 
const getUserRepos = async (login) => {
  setLoading();
   
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 3,
  });

     const response = await fetch(
       `${GITHUB_URL}/users/${login}/repos?${params}`,
       {
       }
     );

  const data = await response.json();

  dispatch({
    type: "GET_REPOS",
    payload: data,
  });
};


  //clear users from state

  const clearSearch = () => dispatch({ type: "CLEAR_SEARCH" });

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        clearSearch,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
