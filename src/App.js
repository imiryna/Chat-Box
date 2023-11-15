import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from 'components/navigation/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'Redux/authThunk';
import { selectAuthenticated } from 'Redux/authSelector';

const Home = lazy(() => import('pages/homePage'));
const Login = lazy(() => import('pages/loginPage'));
const Register = lazy(() => import('pages/registerPage'));

export const App = () => {
  const dispatch = useDispatch();
  const authed = useSelector(selectAuthenticated);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              !authed ? <Navigate replace to="/login" /> : <Navigation />
            }
          >
            <Route index element={<Home />} />
          </Route>
          <Route
            path="/register"
            element={authed ? <Navigate replace to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={authed ? <Navigate replace to="/" /> : <Login />}
          />
        </Routes>
      </Suspense>
    </>
  );
};
