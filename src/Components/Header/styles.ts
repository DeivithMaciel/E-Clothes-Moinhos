import styled from 'styled-components'

import { colors } from '../../styles'
import { Link } from 'react-router-dom'

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
export const LinkPointer = styled.a`
  cursor: pointer;
`

export const LinkItem = styled(Link)`
  padding: 8px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  color: ${colors.pretoForte};
  border: 1px solid ${colors.pretoForte};
  border-radius: 8px;
  cursor: pointer;
`
export const BotaoCarrinho = styled.button`
  padding: 8px;
  border: 1px solid ${colors.laranjaFraco};
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  color: ${colors.laranjaFraco};
  border-radius: 8px;
  cursor: pointer;
`
export { Link }
