import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class ResetButton extends Component {
    constructor() {
        super();
        this.resetButton = this.resetButton.bind(this)
    }
    render() {
        return (
            <div className="resetButton">
                <button className="reset" onClick={this.resetButton} >Reset</button>
            </div>
        );
    }
    resetButton() {
        console.log(`Reset`)
        this.props.resetMethod()
    }
}


class AddButton extends Component {
    constructor() {
        super();
        this.incrementButton = this.incrementButton.bind(this)
    }
    render() {
        return (
            <div className="addButton">
                <button onClick={this.incrementButton} >+{this.props.by}</button>
            </div>
        );
    }
    incrementButton() {
        console.log(`Increment from AddButton  = ${this.props.by}`)
        this.props.incrementMethod(this.props.by)
    }
}

class MinusButton extends Component {
    constructor() {
        super();
        this.decrementButton = this.decrementButton.bind(this)
    }
    render() {
        return (
            <div className="minusButton">
                <button onClick={this.decrementButton} >-{this.props.by}</button>
            </div>
        );
    }
    decrementButton() {
        console.log(`Decrement from MinusButton  = ${this.props.by}`)
        this.props.decrementMethod(this.props.by)
    }
}

class PairButtons extends Component {
    constructor() {
        super();
        this.incrementButton = this.incrementButton.bind(this)
    }
    render() {
        return (
            <div className="pairButtons">
                <button onClick={this.incrementButton} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
            </div>
        );
    }
    incrementButton() {
        console.log(`Increment from PairButtons  = ${this.props.by}`)
        this.props.incrementMethod(this.props.by)
    }
}

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counterParent: 0
        }
        this.parentIncrement = this.parentIncrement.bind(this)
        this.parentDecrement = this.parentDecrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    render() {
        return (
            <div className="counter">
                
                <PairButtons by={1} incrementMethod={this.parentIncrement} decrementMethod={this.parentDecrement} />
                <PairButtons by={5} incrementMethod={this.parentIncrement} decrementMethod={this.parentDecrement} />
                <PairButtons by={10} incrementMethod={this.parentIncrement} decrementMethod={this.parentDecrement} />
                <span className="count">{this.state.counterParent}</span>
                <ResetButton resetMethod={this.reset} />

            </div>
        );
    }
    parentIncrement(by) {
        console.log(`Increment  = ${by}`)
        this.setState(
            (prevState) => {
                return {counterParent: prevState.counterParent + by}
            }
        );
    }
    parentDecrement(by) {
        console.log(`Decrement  = ${by}`)
        this.setState(
            (prevState) => {
                return {counterParent: prevState.counterParent - by}
            }
        );
    }
    reset() {
        console.log(`Reset `)
        this.setState(
            {counterParent: 0}
        );
    }
}

PairButtons.defaultProps = {
    by: 1
}
PairButtons.propTypes = {
    by: PropTypes.number
}
export default Counter