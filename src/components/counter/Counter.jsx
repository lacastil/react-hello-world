import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

 class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            counterButton : 0 
        }
        this.incrementButton = this.incrementButton.bind(this)
    }
    render() {
        //const style = {fontSize : "50px", padding: "15px 30px"};
        return (
            <div className="counterButton">
                <button onClick={this.incrementButton} >+{this.props.by}</button>
                {/*<span className="count"
                    //style = {style}
                >{this.state.counterButton}</span>*/}
            </div>
        );
    }
    incrementButton() {
        console.log(`Increment from incrementButton  = ${this.props.by}`)
        /*this.setState({
            counterButton : this.state.counterButton + this.props.by
        });*/
        this.props.incrementMethod(this.props.by)
    }
}


class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counterParent : 0 
        }
        this.parentIncrement = this.parentIncrement.bind(this)
    }
    render() {
        return (
            <div className="counter">
            <CounterButton by={1} incrementMethod={this.parentIncrement}/>
            <CounterButton by={5} incrementMethod={this.parentIncrement}/>
            <CounterButton by={10} incrementMethod={this.parentIncrement}/>
            <span className="count">{this.state.counterParent}</span>
          </div>            
        );
    }
    parentIncrement(by) {
        console.log(`Increment from increment  = ${by}`)
         this.setState({
            counterParent : this.state.counterParent + by
         });
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter