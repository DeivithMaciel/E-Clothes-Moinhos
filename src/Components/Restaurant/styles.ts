import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { LinkItem } from '../Header/styles'

export const Card = styled.div`
  background-color: ${colors.amareloFraco};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 490px;
    height: 360px;
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
  line-weight: 22px;
  display: block;
  margin-top: 16px;
  color: ${colors.pretoForte};
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const DescriBut = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 10px;

  ${LinkItem} {
    font-size: 16px;
  }
`
