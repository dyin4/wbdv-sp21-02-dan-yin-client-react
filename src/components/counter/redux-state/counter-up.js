import React from 'react'
import {connect} from 'react-redux'

const CounterUp = ({up}) =>
    <button onClick={up}>Up</button>



const stateToPropsMapper = (state) => {}

const dispathToPropsMapper = (dispatch) => {
  return {
    up: () => {
      dispatch({type: "UP"})
    }
  }
}

export default connect(stateToPropsMapper, dispathToPropsMapper)(CounterUp)