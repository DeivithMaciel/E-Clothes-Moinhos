import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import { LinkItem } from '../HeaderHome/styles'
import { colors } from '../../styles'

export const Header = styled.header`
  background-image: url(${fundo});
  width: 100%;
`
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-text: center;
  padding: 85px 0;

  ${LinkItem} {
    background-color: transparent;
    color: ${colors.lightRed};
    font-weight: 900;
    font-size: 18px;
  }

  img {
    height: 57.5px;
    width: 125px;
  }
`
export const LinkPointer = styled.a`
  cursor: pointer;
`
