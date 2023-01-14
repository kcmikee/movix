import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const Box = styled.div`
  height: ${(props: { size: number; color: string }) => props.size || '40'}px;
  width: ${(props: { size: number; color: string }) => props.size || '40'}px;
  border: 2px solid transparent;
  border-top: 2px solid ${(props) => props.color || '#F9FBFF'};
  border-right: 2px solid ${(props) => props.color || '#F9FBFF'};
  border-radius: 100%;
  animation: ${rotate} 500ms infinite linear;
`

const Loader = (props: { size: number; color: string }) => {
  return <Box {...props} />
}

export default Loader
