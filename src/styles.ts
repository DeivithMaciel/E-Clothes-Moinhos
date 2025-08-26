import { createGlobalStyle } from 'styled-components'

export const colors = {
  azulClaro: '#60a3bc',
  laranjaFraco: '#f8c291',
  laranja: '#e58e26',
  branco: '#f7f1e3',
  preto: '#84817a',
  pretoForte: '#000',
  roxoEscuro: '#474787',
  amareloFraco: '#ffda79',
  cinzaClaro: '#A3A3A3',
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
    background-color: ${colors.backWhite}
  }
`

export default EstiloGlobal
