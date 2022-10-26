// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import calculate from './logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  onClickHandler = (e) => {
    const buttonName = e.target.innerText;
    const { total, next, operation } = calculate(this.state, buttonName);
    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  }
  // eslint-disable-next-line
  render() {
    return (
            <div className="calculator-container">
                <input type="text" value={this.state.next || this.state.total || '0'} className="calc-result" readOnly={true}/>
                <div className='pad clear' onClick={this.onClickHandler}>AC</div>
                <div className='pad sign' onClick={this.onClickHandler}>+/-</div>
                <div className='pad modular' onClick={this.onClickHandler}>%</div>
                <div className='operator divider' onClick={this.onClickHandler}>&divide;</div>
                <div className='pad seven' onClick={this.onClickHandler}>7</div>
                <div className='pad eight' onClick={this.onClickHandler}>8</div>
                <div className='pad nine' onClick={this.onClickHandler}>9</div>
                <div className='operator mult' onClick={this.onClickHandler}>x</div>
                <div className='pad four' onClick={this.onClickHandler}>4</div>
                <div className='pad five' onClick={this.onClickHandler}>5</div>
                <div className='pad six' onClick={this.onClickHandler}>6</div>
                <div className='operator sub' onClick={this.onClickHandler}>-</div>
                <div className='pad one' onClick={this.onClickHandler}>1</div>
                <div className='pad two' onClick={this.onClickHandler}>2</div>
                <div className='pad three' onClick={this.onClickHandler}>3</div>
                <div className='operator plus' onClick={this.onClickHandler}>+</div>
                <div className='pad zero' onClick={this.onClickHandler}>0</div>
                <div className='operator equal' onClick={this.onClickHandler}>=</div>
            </div>
    );
  }
}