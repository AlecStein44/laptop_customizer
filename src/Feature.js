import React, { Component } from 'react';
import Featureitem from './Feature-item';
import FeatureUl from './FeatureUl';

class Feature extends Component {
    render() {
        const features = Object.keys(this.props.features)
          .map((key, secondindex) => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;

              return <Featureitem index={index} thirdkey={key} item={item} featureClass={featureClass} selectedClass={selectedClass} updateFeature={this.props.updateFeature} features={this.props.features} selected={this.props.selected} selectedTwo={this.selected} />
            });

            return <FeatureUl secondkey={secondindex} thirdkey={key} options={options} data={this.props.selected[key]} />
          }); 
        console.log(this.props);
        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section> 
      )
    }
}

export default Feature;