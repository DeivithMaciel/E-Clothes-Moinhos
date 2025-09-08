import styled from 'styled-components'
import { colors } from '../../styles'

export const AsidePage = styled.div`
  display: none;

  &.is-open {
    padding: 0 8px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 360px;
    background-color: ${colors.lightRed};
    display: flex;
    flex-direction: column;
    z-index: 3;
  }

  .list-items {
    display: none;
  }

  .delivery {
    display: none;
  }

  .payment {
    display: none;
  }

  .no-items {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.tagWhite};
    text-align: center;
    padding: 8px;
    margin-top: 16px;
  }
`
export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  z-index: 2;
`
export const List = styled.ul`
  padding: 32px 0px 0px;
  display: flex;
  flex-direction: column;

  .buttons {
    margin-top: 16px;
  }

  p {
    color: ${colors.tagWhite};
    font-weight: normal;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
export const ListItem = styled.li`
  position: relative;
  background-color: ${colors.tagWhite};
  display: flex;
  color: ${colors.lightRed};
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    padding: 8px 8px 12px 8px;
  }

  h3 {
    padding-top: 8px;
    padding-bottom: 16px;
  }
`
export const Trash = styled.img`
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
`

export const TotalPrice = styled.div`
  color: ${colors.tagWhite};
  display: flex;
  justify-content: space-between;
  margin: 24px 0px 0px;
`
export const Button = styled.button`
  display: block;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding: 4px;
  background-color: ${colors.tagWhite};
  color: ${colors.lightRed};
  border: none;
  cursor: pointer;
  margin-top: 8px;
`
export const InputGroup = styled.div`
  flex: auto;
  color: ${colors.tagWhite};
  font-size: 16px;

  label {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    display: block;
    font-weight: bold;
  }

  input {
    box-sizing: border-box;
    background-color: ${colors.tagWhite};
    color: ${colors.formColor};
    font-weight: bold;
    font-size: 14px;
    height: 32px;
    padding: 0 8px;
    width: 100%;
    border: none;

    &.error {
      border: solid 1px red;
    }
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  margin-top: 8px;
`
export const DeliveryTitle = styled.h3`
  color: ${colors.tagWhite};
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`
export const InfosCard = styled.div`
  display: flex;
  column-gap: 30px;
  margin-top: 8px;

  > div:first-child {
    flex: 2;
  }

  > div:last-child {
    flex: 1;
  }
`
