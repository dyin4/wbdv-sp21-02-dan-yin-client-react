import React from 'react'
import {connect} from "react-redux";

const CounterDown = ({down}) =>
    <button onClick={down}>Down</button>

const stateToPropsMapper = (state) => {}

const dispathToPropsMapper = (dispatch) => {
  return {
    down: () => {
      dispatch({type: "DOWN"})
    }
  }
}

export default connect(stateToPropsMapper, dispathToPropsMapper)(CounterDown)