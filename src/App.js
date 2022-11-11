import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>}
          />
          <Route
            path='/user/:nickname'
            loader={({ params }) => {
            }}
            action={({ params }) => { }}
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFoundPage />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;