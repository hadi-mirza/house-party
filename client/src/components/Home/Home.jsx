import React, { Component } from 'react'
import RoomJoinPage from '../RoomJoinPage/RoomJoinPage'
import CreateRoomPage from '../CreateRoomPage/CreateRoomPage'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom"
import Room from '../Room/Room'

export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <p>This is the home page</p>
                            </Route>
                        <Route path="/join" component={RoomJoinPage} />
                        <Route path="/create" component={CreateRoomPage} />
                        <Route path='/room/:roomCode' component={Room} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Home
