import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "./redux/slices/userslices";
import { UserCard } from "./components/UserCard";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const user = useSelector((state) => state?.users);
  const dispatch = useDispatch();
  const { loading, appErr, serverErr, usersList } = user;
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          Dev.space
          <button className="fetchbuttoon" onClick={() => dispatch(getusers())}>
            Fetch Users
          </button>
        </nav>
        <div className="row justify-content-center g-4 align-items-center mt-4">
          {usersList ? (
            ""
          ) : (
            <div className="heading"> "Press Fetch Users To load"</div>
          )}
          {loading ? (
            <ClipLoader
              color="white"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            usersList?.data?.map((user) => (
              <div className="col-sm-6 col-md-4 col-lg-4 align-items-center">
                <UserCard user={user} />
              </div>
            ))
          )}
        </div>
      </div>
      {appErr || serverErr ? appErr + serverErr : null}
    </div>
  );
}

export default App;
