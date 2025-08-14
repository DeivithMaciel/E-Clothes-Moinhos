import styled from 'styled-components'

import { colors } from '../../styles'

export const Header = styled.header`
  background-color: ${colors.preto};
  height: 186px;
  width: 100%;

  img {
    height: 128px;
    width: 128px;
  }
`
export const Navbar = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Link = styled.a`
  cursor: pointer;
`

export const LinkItem = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  color: ${colors.branco};
`
export const BotaoCarrinho = styled.button`
  font-size: 16px;
  font-weight: bold;
  background-color: ${colors.amareloFraco};
  color: ${colors.pretoForte};
  border-radius: 4px;
  cursor: pointer;
`
