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
    height: 320px;
    object-fit: cover;
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

export const Modal = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .container {
    max-width: 680px;
    background-color: ${colors.amareloFraco};
  }

  img {
    width: 320px;
    height: 320px;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  z-index: 1;
`

export const InfosFood = styled.div`
  position: relative;
  z-index: 1;
  margin-left: 24px;
  margin-right: 24px;

  > header {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;

    img {
      background-color: ${colors.laranja};
      padding: 2px;
    }
  }

  img {
    height: 16px;
    width: 16px;
    margin-left: 8px;
    cursor: pointer;
    object-fit: cover;
  }

  p {
    margin-bottom: 24px;
  }
`
