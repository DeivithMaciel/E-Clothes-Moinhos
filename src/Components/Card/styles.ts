import styled from 'styled-components'
import { colors } from '../../styles'
import { LinkItem } from '../HeaderHome/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  color: ${colors.lightRed};
  width: 472px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    padding-bottom: 8px;
  }

  ${LinkItem} {
    align-self: flex-start;
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  padding-bottom: 16px;
  padding-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  font-weight: normal;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Score = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-bottom: 16px;

  img {
    padding-left: 8px;
    height: 21px;
    width: 21px;
  }
`
