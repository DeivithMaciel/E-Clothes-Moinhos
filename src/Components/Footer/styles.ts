import styled from 'styled-components'
import { colors } from '../../styles'

export const Final = styled.div`
  background-color: ${colors.tagWhite};
  padding-bottom: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: ${colors.lightRed};
    text-align: center;
    font-weigth: normal;
    font-size: 16px;
  }
`

export const Logo = styled.img`
  height: 58px;
  weigth: 125px;
  padding-top: 40px;
`

export const Sociais = styled.ul`
  display: flex;
  padding-top: 16px;
  padding-bottom: 80px;

  img {
    padding: 0 4px;
  }
`
export const Items = styled.li`
  padding: 8px;
`
