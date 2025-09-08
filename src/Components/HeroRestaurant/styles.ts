import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Type = styled.h1`
  font-weight: 100;
  position: relative;
  font-size: 48px;
  padding-top: 24px;
  padding-bottom: 156px;
  color: ${colors.white};
  z-index: 1;
`

export const Title = styled.h1`
  padding-bottom: 32px;
  position: relative;
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
