import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { colors } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const Header = styled.header`
  background-image: url(${fundo});
  height: 384px;
  width: 100%;
`
export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-top: 64px;
    height: 57.5px;
    width: 125px;
  }

  h1 {
    padding-top: 138.5px;
    padding-bottom: 40px;
    color: ${colors.lightRed};
    text-align: center;
    font-size: 36px;
  }
`
export const LinkPointer = styled.a`
  cursor: pointer;
`

export const LinkItem = styled(Link)`
  font-size: 14px;
  color: ${colors.tagWhite};
  background-color: ${colors.lightRed};
  padding: 4px 6px;
  border-radius: none;
  text-decoration: none;
  font-weight: bold;
`

export { Link }
