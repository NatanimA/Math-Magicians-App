import React, { useState } from 'react';
import calculate from './logic/calculate.js';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const onClickHandler = (e) => {
    const buttonName = e.target.id;
    const { total, next, operation } = calculate(state, buttonName);
    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };
  return (
      <section className='calculator-section'>
        <h3 className='calculator-moto'>Let's do some Math...</h3>
        <div className="calculator-container">
        <input data-testid='calc-result' type="text" value={state.next || state.total || '0'} className="calc-result" disabled={true}/>
        <div data-testid="AC" id='AC' className='pad clear' onClick={onClickHandler}>AC</div>
        <div data-testid="+" className='pad sign' id='+/-' onClick={onClickHandler}>+/-</div>
          <div className='pad modular' id='%' onClick={onClickHandler}>%</div>
        <div className='operator divider' id='÷' onClick={onClickHandler}>&divide;</div>
          <div id='7' data-testid="7" className='pad seven' onClick={onClickHandler}>7</div>
        <div data-testid="8" className='pad eight' id='8' onClick={onClickHandler}>8</div>
          <div className='pad nine' id='9' onClick={onClickHandler}>9</div>
          <div className='operator mult' id='x' onClick={onClickHandler}>x</div>
          <div className='pad four' id='4' onClick={onClickHandler}>4</div>
          <div className='pad five' id='5' onClick={onClickHandler}>5</div>
          <div className='pad six' id='6' onClick={onClickHandler}>6</div>
          <div className='operator sub' id='-' onClick={onClickHandler}>-</div>
          <div className='pad one' id='1' onClick={onClickHandler}>1</div>
          <div className='pad two' id='2' onClick={onClickHandler}>2</div>
          <div className='pad three' id='3' onClick={onClickHandler}>3</div>
          <div className='operator plus' id='+' onClick={onClickHandler}>+</div>
          <div className='pad zero' id='0' onClick={onClickHandler}>0</div>
        <div data-testid="=" className='operator equal' id='=' onClick={onClickHandler}>=</div>
        </div>
      </section>

  );
};

export default Calculator;