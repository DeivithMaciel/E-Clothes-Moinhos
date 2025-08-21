import styled from 'styled-components'
import { colors } from '../../styles'

export const Final = styled.div`
  background-color: ${colors.preto};
  padding-bottom: 16px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.img`
  height: 128px;
  width: 128px;
`

export const Sociais = styled.ul`
  display: flex;
  padding: 8px;

  img {
    height: 32px;
  }
`
export const Items = styled.li`
  padding: 8px;
`
