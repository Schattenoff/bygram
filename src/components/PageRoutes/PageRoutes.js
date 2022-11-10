import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import UserPage from "../../pages/UserPage/UserPage";
import { getAuthorizedUser } from "../../redux/actions/users";
import LoaderBars from "../LoaderBars/LoaderBars";

const authorizedRoutes = [
  {path: '/', element: <MainPage />, exact: true},
  {path: '/:id', element: <UserPage />, exact: true},
];


const PageRoutes = () => {
  const authorizedUser = useSelector(state => state.users.authorizedUser);
  const isUserLoading = useSelector(state => state.users.isUserLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthorizedUser())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if(isUserLoading) {
    return (
      <LoaderBars width={80} height={80} />
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            authorizedUser 
            ? authorizedRoutes.map(({path, element, exact}, index) => (<Route key={index} path={path} element={element} />)) 
            :  <Route path='/' element={<NotFoundPage />} exact />
          }
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;