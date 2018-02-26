import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

import { connect } from 'react-redux'

// actions
import {
  counterIncrement,
  counterDecrement,
  resetCounter
} from '../../actions/spinnerActions'


const mapStateToProps = (state) => ({
  isLoaderVisible: state.spinner.visible
})

const mapDispatchToProps = {
  counterIncrement,
  counterDecrement,
  resetCounter
}

export const ActionCaller = (props) => {
  const { isLoaderVisible, counterIncrement, counterDecrement, resetCounter } = props
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
      <button
        style={{ width: 200, height: 100, fontSize: 32 }}
        onClick={() => resetCounter()}
      >
        Reset!
      </button>
      <br />
      <br />
      {
        isLoaderVisible
          ? <div>Loading......</div>
          : null
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionCaller)
