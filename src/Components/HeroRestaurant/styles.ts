import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  padding: 24px;
  color: ${colors.amareloFraco};
`

export const Frase = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.amareloFraco};
  padding-top: 240px;
`
