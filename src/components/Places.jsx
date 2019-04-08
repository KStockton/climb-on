import React, { Component } from 'react';
import Sidebar from './SideBar.jsx';
import Place from './Place.jsx';

import './Places.css';

class Places extends Component {

  render() {
    return (
      <section className="Places">
      <h2 className="Places-header">Results</h2>
        <Sidebar filterType={this.props.filterType}/>
        <section className="Places-container">
          {
            this.props.places.map((currentPlace, i) => {
              return ( 
                <Place
                  key={i}
                  place={currentPlace.place}
                  closestTown={currentPlace.closestTown}
                  climbingId={currentPlace.climbingId}
                  routes={currentPlace.routes}
                />
              )
            })
          }
        </section>
      </section>
    )
  }

}


export default Places;