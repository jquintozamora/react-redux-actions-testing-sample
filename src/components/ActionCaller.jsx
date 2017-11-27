import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

export const ActionCaller = (props) =>
  <div>
    <button style={{ width: 200, height: 100, fontSize: 32 }} onClick={() => console.log(props.name)} >
      Call me!
    </button>
  </div>

export default ActionCaller
