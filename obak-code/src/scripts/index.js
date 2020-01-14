import {
    HashRouter as Hash,
    Route,
    Switch,
    Redirect,
} from "react-router-dom"
import React, { Component } from "react";
import lazyload from "&/lazyload";



export class MainRouter extends Component {
    render() {
        return (
            <Hash
                basename=""
            >
                <Switch>
                    <Route path="/" render={() => (<Redirect to="/login" />)} exact/>
                    <Route path="/login" component={lazyload(()=>import("./views/login"))} />
                    <Route path="/destiny" component={lazyload(()=>import("./views/mainLayout"))} {...this.props}></Route>
                    <Route render={() => (<Redirect to="/login" />)} />
                </Switch>
            </Hash>
        )
    }
}
