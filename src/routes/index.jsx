import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

function Routes() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("KenzieHub-Token");

        if (token) {
            return setAuthenticated(true);
        }
    }, [authenticated]);

    const history = useHistory();

    const handleNavigation = (path) => {
        return history.push(path);
    };

    return (
        <Switch>
            <Route exact path="/dashboard">
                <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route exact path="/signup">
                <SignUp handleNavigation={handleNavigation} authenticated={authenticated} />
            </Route>
            <Route exact path="/">
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
        </Switch>
    );
}

export default Routes;
