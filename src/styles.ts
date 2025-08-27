import { createGlobalStyle } from 'styled-components'

export const colors = {
  backWhite: '#FFF8F2',
  white: '#ffffff',
  tagWhite: '#FFEBD9',
  lightRed: '#E66767'
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
    background-color: ${colors.backWhite};
  }
`

export default EstiloGlobal
