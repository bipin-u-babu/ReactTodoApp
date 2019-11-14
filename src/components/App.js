import React from 'react';
import Header from "./Header";
import TodoPage from "./TodoPage";
import { Route, Switch } from "react-router-dom";
import NextPage from "./nextPage";
import ErrorPage from "./ErrorPage";
class App extends React.Component {

    render() {
        return (
            
            <div>
            <Header></Header>
            <Switch>
            <Route path = '/' exact component = {TodoPage}></Route>
            <Route path = '/next' component = {NextPage}></Route>
            <Route component = {ErrorPage}/>
            </Switch>
            </div>
        )
    }
}
export default App;