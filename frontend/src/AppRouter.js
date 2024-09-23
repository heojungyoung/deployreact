import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainComponent from "./components/MainComponent";

function CopyRight() {
    return (
        <div>
            2024.01.01
        </div>
    );
}

class AppRouter extends React.Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/login">
                                <div>login</div>
                            </Route>
                            <Route path="/">
                                <div>root</div>
                            </Route>

                        </Switch>

                        <CopyRight/>
                    </div>


                </BrowserRouter>

            </div>


        )


    }


}

export default AppRouter;