import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
    return (
        <Route
            {...rest}
            render={({ location }) => loggedInUser || user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }

                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;