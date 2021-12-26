'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '150px',
    width: '170px'
  }} />
)

Square.defaultProps = {
  color: 'red'
}

export default Square
