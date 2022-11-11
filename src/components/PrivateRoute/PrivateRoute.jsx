import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { getAuthorizedUser } from "../../redux/actions/users";
import LoaderBars from "../LoaderBars/LoaderBars";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(state => state.users.isUserLoading)
  const authorizedUser = useSelector(state => state.users.authorizedUser);

  useEffect(() => {
    dispatch(getAuthorizedUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (authorizedUser) {
    return children;
  } else if (!authorizedUser && isUserLoading) {
    return <LoaderBars />
  }
  else return <NotFoundPage />
};

export default PrivateRoute;