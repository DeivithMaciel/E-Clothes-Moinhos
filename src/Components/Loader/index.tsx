import { PulseLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PulseLoader color={colors.lightRed} />
  </Container>
)

export default Loader
