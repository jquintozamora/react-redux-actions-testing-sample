import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

import { connect } from 'react-redux'

// actions
import {
  counterIncrement,
  counterDecrement
} from '../actions/spinnerActions'


const mapStateToProps = (state) => ({
  isEditingEnabled: state.spinner.visible
})

const mapDispatchToProps = {
  counterIncrement,
  counterDecrement
}

export const ActionCaller = (props) => {
  const { counterIncrement, counterDecrement } = props
  return (
    <div>
      <button
        style={{ width: 200, height: 100, fontSize: 32 }}
        onClick={() => counterIncrement()}
      >
        Add!
      </button>
      <button
        style={{ width: 200, height: 100, fontSize: 32 }}
        onClick={() => counterDecrement()}
      >
        Remove!
      </button>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(ActionCaller)
