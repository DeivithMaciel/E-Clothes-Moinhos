import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  color: ${colors.lightRed};
  width: 472px;
  height: auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${TagContainer} {
    padding: 6px 4px;
  }

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  font-weight: normal;
  padding-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Score = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-left: 8px;
    height: 21px;
    width: 21px;
  }
`
