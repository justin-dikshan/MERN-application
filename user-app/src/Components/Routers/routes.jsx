import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginUi from "../Login/Login-layout";
import DashBoardLayout from "../Dashboard/dashBoard-layout";
import CreateEmployee from "../Dashboard/create-employee";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <switch>
                    <Route exact path="/">
                        <LoginUi/>
                    </Route>
                    <Route exact path="/dashboard">
                        <DashBoardLayout/>
                    </Route>
                    <Route exact path="/create">
                        <CreateEmployee/>
                    </Route>
                </switch>
            </BrowserRouter>
        )
    }
}

export default Router