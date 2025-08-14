import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.amareloFraco};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 320px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  padding-bottom: 8px;
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

export const Botao = styled.button`
  padding: 4px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.laranja};
  color: ${colors.pretoForte};
  border-radius: 8px;
  cursor: pointer;
`
