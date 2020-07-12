import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    if(this.props.rating) { 
      if(this.props.rating === 0) {
        return imgMapper[0]
      } else if(this.props.rating === 1) {
        return imgMapper[1]
      } else if(this.props.rating === 2) {
        return imgMapper[2]
      } else if(this.props.rating === 3) {
        return imgMapper[3]
      } else if(this.props.rating === 4) {
        return imgMapper[4]
      } else if(this.props.rating === 5) {
        return imgMapper[5]
      }
    } else {
      return "No Rating Found"
    }
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">${this.props.title}</h3>
        <span />
        <img src={this.generateRatingElement()} alt=""></img>
        <h4>{this.generateRatingElement()}</h4>
        <span />
      <h5 className="genres">{this.props.genres.join(", ")}</h5>
      </div>
    )
  }
}
