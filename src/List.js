import React from 'react';

export const App2 = () => {
    return (
        <div>
            Hello
        </div>
    );
};

class App1 extends React.Component {
    constructor(props){
        super(props) 
    }
    componentDidMount(){

    }

    handleClick(){
        console.log('12331') 
    }
    render() {
        const { one } = this.props
        return (
            <div>
                <button onClick={this.handleClick}>{one}</button>
            </div>
        );
    };  
};

export default App1;