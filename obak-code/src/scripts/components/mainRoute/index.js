import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import lazyload from "&/lazyload";

class MainRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path="/destiny" exact render={() => (<Redirect to="/destiny/home" />)} /> 
                <Route path="/destiny/home" component={lazyload(() => import("../../views/home"))} />
                <Route path="/destiny/worksheet/rawoutorder" component={lazyload(() => import("../../views/rawOutputOrder"))} />
                <Route path="/destiny/worksheet/rawwareorder" component={lazyload(() => import("../../views/rawWarehouseOrder"))} />
                <Route path="/destiny/worksheet/rawout" component={lazyload(() => import("../../views/rawOutput"))} />
                <Route path="/destiny/worksheet/rawware" component={lazyload(() => import("../../views/rawWarehouse"))} />
                <Route path="/destiny/worksheet/ripeoutorder" component={lazyload(() => import("../../views/ripeOutputOrder"))} {...this.props}/>
                <Route path="/destiny/worksheet/ripewareorder" component={lazyload(() => import("../../views/ripeWarehouseOrder"))} />
                <Route path="/destiny/worksheet/ripeout" component={lazyload(() => import("../../views/ripeOutput"))} />
                <Route path="/destiny/worksheet/ripeware" component={lazyload(() => import("../../views/ripeWarehouse"))} />
                <Route path="/destiny/worksheet/offer" component={lazyload(() => import("../../views/offer"))} />
                <Route path="/destiny/worksheet/task" component={lazyload(() => import("../../views/task"))} />
                <Route path="/destiny/repertory/raw" component={lazyload(() => import("../../views/raw"))} />
                <Route path="/destiny/repertory/ripe" component={lazyload(() => import("../../views/ripe"))} />
                <Route path="/destiny/report/daily" component={lazyload(() => import("../../views/daily"))} />
                <Route path="/destiny/report/weekly" component={lazyload(() => import("../../views/weekly"))} />
                <Route path="/destiny/report/summary" component={lazyload(() => import("../../views/summary"))} />
                <Route path="/destiny/linkman" {...this.props} component={lazyload(() => import("../../views/linkMan"))} />
                <Route render={() => (<Redirect to="/destiny/home" />)} />
            </Switch>
        );
    }
}

export default MainRoute;