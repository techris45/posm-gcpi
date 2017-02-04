import React, { Component } from 'react';
import ImagesGetter from '../connectors/ImagesGetter';
import Images from '../connectors/Images';

class ControlPoints extends Component {

  renderPoints() {
    const {controlpoints} = this.props;

    let last = controlpoints.points.length - 1;
    let range = Array.from({length: 5}, (value, key) => key);
    return range.map((d,i) => {
      let id = controlpoints.points[i] ? controlpoints.points[i].id : null;
      let k = id ? 'active' : '';
      if (controlpoints.active) {
        if (controlpoints.pointId === null && i === last) k += ' edit';
        if (controlpoints.pointId && id === controlpoints.pointId) k += ' edit';
      }

      return (
        <li key={`gcp-tick-${i}`} className={k}/>
      );
    });
  }

  render() {
    return (
      <div className='control-points-i'>
        <div className='overview'>
          <div>
            <h3>Ground Control Points</h3>
            <ul>
              {this.renderPoints()}
            </ul>
          </div>
        </div>
        <ImagesGetter/>
        <Images {...this.props}/>
      </div>
    );
  }
}

export default ControlPoints;