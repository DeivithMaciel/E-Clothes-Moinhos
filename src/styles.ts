import { createGlobalStyle } from 'styled-components'

export const colors = {
  backWhite: '#FFF8F2',
  white: '#ffffff',
  tagWhite: '#FFEBD9',
  lightRed: '#E66767',
  formColor: '#4B4B4B'
}

const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  font-family: Roboto, san-serif;
  list-style: none
  }

  .container{
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    }

    body {
    background-color: ${colors.backWhite}!important;
  }
`

export default EstiloGlobal
