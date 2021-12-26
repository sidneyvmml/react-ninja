'use strict'

import React from 'react'

const Title = (props) => 
  <h1>Olá {`${props.name} ${props.lastname}`}!!</h1>  


/* const Title = ({ name, lastname }) => (
  <h1>Olá {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}
*/


export default Title
