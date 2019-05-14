import React from 'react';

export default class App extends React.Component {


    componentDidMount() {
        requestAnimationFrame(()=> {this.show();});
    }

    show(){
        $('#tag1').css('-webkit-transform', "translate3d(0px, 0%, 0px)")
    }

    render() {
        return (
            <div>
                <h3 id="tag1" style={{
                    'transform': "translate3d(0px, 110%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    'transition': 'all 1s ease-in-out 0s', 'color': 'rgb(0, 0, 0)', 'transformStyle': 'preserve-3d'
                }}
                >Welcome to g4ce.</h3>
            </div>
        );
    }
}