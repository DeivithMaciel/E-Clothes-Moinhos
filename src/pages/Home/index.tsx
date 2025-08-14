import Roupa from '../../../models/Product'
import ClothesList from '../../Components/ClothesList'
import Hero from '../../Components/Hero'
import vestidoCasamento from '../../assets/images/casamento/vestido_de_casamento.jpg'

const ListHome: Roupa[] = [
  {
    id: 1,
    category: 'Vestido',
    description: 'Vestidos femininos que cabem bem em qualquer momento',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoCasamento
  },
  {
    id: 2,
    category: 'Vestido',
    description: 'Vestidos femininos que cabem bem em qualquer momento',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoCasamento
  },
  {
    id: 3,
    category: 'Vestido',
    description: 'Vestidos femininos que cabem bem em qualquer momento',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoCasamento
  },
  {
    id: 4,
    category: 'Vestido',
    description: 'Vestidos femininos que cabem bem em qualquer momento',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoCasamento
  },
  {
    id: 5,
    category: 'Vestido',
    description: 'Vestidos femininos que cabem bem em qualquer momento',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoCasamento
  },
  {
    id: 6,
    category: 'Vestido',
    description: 'Vestidos femininos que cabem bem em qualquer momento',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoCasamento
  }
]

export const Lobby = () => (
  <>
    <Hero />
    <ClothesList outfit={ListHome} title="Algumas categorias" />
  </>
)
