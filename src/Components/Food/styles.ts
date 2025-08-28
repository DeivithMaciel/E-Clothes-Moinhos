import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.lightRed};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  color: ${colors.tagWhite};
  display: flex;
  flex-direction: column;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  padding: 8px 0;
`

export const Descricao = styled.p`
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  font-weight: normal;
`

export const Botao = styled.button`
  padding: 4px;
  font-weight: bold;
  font-size: 14px;
  margin-top: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.tagWhite};
  color: ${colors.lightRed};
  border: none;
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
    max-width: 1024px;
    background-color: ${colors.lightRed};
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
export const FoodImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  padding: 32px 24px 32px 32px;
`

export const ModalContent = styled.div`
  display: flex;
  z-index: 1;
  color: ${colors.white};
`

export const InfosFood = styled.div`
  position: relative;
  z-index: 1;
  margin-left: 24px;


  button {
    padding: 8px;
    border: none;
    color: ${colors.lightRed};
    background-color: ${colors.tagWhite};
    cursor: pointer;
  }

    h4 {
      margin-top: 32px;
      margin-bottom: 16px;
    }
  }

  p {
    font-weight: normal;
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 32px;
    margin-right: 24px;
  }
`

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
