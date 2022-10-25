// eslint-disable-next-line
import React, { Component } from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
            <div className="calculator-container">
                <input type="text" value="0" className="calc-result" />
                <div className='pad clear'>AC</div>
                <div className='pad sign'>+/-</div>
                <div className='pad modular'>%</div>
                <div className='operator divider'>&divide;</div>
                <div className='pad seven'>7</div>
                <div className='pad eight'>8</div>
                <div className='pad nine'>9</div>
                <div className='operator mult'>&times;</div>
                <div className='pad four'>4</div>
                <div className='pad five'>5</div>
                <div className='pad six'>6</div>
                <div className='operator sub'>-</div>
                <div className='pad one'>1</div>
                <div className='pad two'>2</div>
                <div className='pad three'>3</div>
                <div className='operator plus'>+</div>
                <div className='pad zero'>0</div>
                <div className='operator equal'>=</div>
            </div>
    );
  }
}