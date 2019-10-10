import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './dashboard';
import BlogDetail from './blog';
import { Helmet } from "react-helmet";

const AppRouter = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>SEO | Inderjeet Singh.</title>
                <meta name="description" content="Bajaj Capital is your trusted finance partner. Looking for a personal loan, 
      the best mutual fund or a credit card? Head over for exciting insights and the best deals." />
            </Helmet>
            <Router>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/detail/:id" component={BlogDetail} />
                        <Route exact path="*" >
                            <Redirect to="/" />
                        </Route>
                    </Switch>
            </Router>
        </React.Fragment>

    )
}

export default AppRouter;