import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { googleSignIn } from "../../store/actions/authActions";

export default function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignIn = () => {
    try {
      dispatch(googleSignIn());

      setTimeout(() => {
        history.replace(from);
      }, 15000);
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "20%" }}
      >
        <button onClick={handleSignIn}>Sign In with Google</button>
      </div>
    </>
  );
}
