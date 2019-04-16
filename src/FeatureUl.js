import React, { Component } from 'react';
import Feature from './Feature';
import App from './App';

class FeatureUl extends Component {
    render() {
      console.log(this.props.data);
        return(
            <div className="feature" key={this.props.thirdkey}>
            <div className="feature__name">{this.props.thirdkey}</div>
            <ul className="feature__list">
              { this.props.options }
            </ul>
          </div>
      )
    }
}

export default FeatureUl;