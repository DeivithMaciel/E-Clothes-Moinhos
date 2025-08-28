import styled from 'styled-components'
import { colors } from '../../styles'
import { LinkItem } from '../HeaderHome/styles'

export const AsidePage = styled.div`
  display: none;

  &.is-open {
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

  ${LinkItem} {
    display: block;
    text-align: center;
    margin: 0 8px;
    padding: 8px auto;
    background-color: ${colors.tagWhite};
    color: ${colors.lightRed};
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
  padding: 32px 8px 0px;
  display: flex;
  flex-direction: column;
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
  margin: 24px 8px 16px;
`
