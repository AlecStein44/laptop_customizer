import React, { Component } from 'react';
import Summary from './Summary';

class SummaryDiv extends Component {
    render() {
        console.log(this.props.secondkey) 
        const testKey = this.props.secondkey ? this.props.secondkey : '';
    return(
        <div className="summary__option" key={testKey}>
            <div className="summary__option__label">{testKey}  </div>
            <div className="summary__option__value">{this.props.data.name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.data.cost) }
            </div>
        </div>
    )
    }
}

export default SummaryDiv;