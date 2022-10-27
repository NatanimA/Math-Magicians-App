// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import calculate from './logic/calculate';
// eslint-disable-next-line
import { useState } from 'react';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const buttonName = e.target.innerText;
    const { total, next, operation } = calculate(state, buttonName);
    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };
  return (
            <div className="calculator-container">
                <input type="text" value={state.next || state.total || '0'} className="calc-result" readOnly={true}/>
                <div className='pad clear' onClick={onClickHandler}>AC</div>
                <div className='pad sign' onClick={onClickHandler}>+/-</div>
                <div className='pad modular' onClick={onClickHandler}>%</div>
                <div className='operator divider' onClick={onClickHandler}>&divide;</div>
                <div className='pad seven' onClick={onClickHandler}>7</div>
                <div className='pad eight' onClick={onClickHandler}>8</div>
                <div className='pad nine' onClick={onClickHandler}>9</div>
                <div className='operator mult' onClick={onClickHandler}>x</div>
                <div className='pad four' onClick={onClickHandler}>4</div>
                <div className='pad five' onClick={onClickHandler}>5</div>
                <div className='pad six' onClick={onClickHandler}>6</div>
                <div className='operator sub' onClick={onClickHandler}>-</div>
                <div className='pad one' onClick={onClickHandler}>1</div>
                <div className='pad two' onClick={onClickHandler}>2</div>
                <div className='pad three' onClick={onClickHandler}>3</div>
                <div className='operator plus' onClick={onClickHandler}>+</div>
                <div className='pad zero' onClick={onClickHandler}>0</div>
                <div className='operator equal' onClick={onClickHandler}>=</div>
            </div>
  );
};

export default Calculator;