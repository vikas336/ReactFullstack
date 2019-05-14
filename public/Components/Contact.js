import React from 'react';
import ReactDOM from 'react-dom';

export default class Singup extends React.Component {

    componentWillMount() {
        this.props.onclick();
    }

    render() {
        console.log(this.props.name);
        return (
            <div>
                <h1>Contact</h1>
            </div>
        );
    }
}