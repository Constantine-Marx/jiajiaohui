import './index.scss'
import React from "react";
import Header from "../../containers/Header/Header";
import Body from "../../containers/Body/Body";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <>
                <Header/>
                <Body/>
            </>
        )
    }
}

