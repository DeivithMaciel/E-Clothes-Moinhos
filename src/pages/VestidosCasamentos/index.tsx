import Roupa from '../../../models/Product'
import CasamentoList from '../../Components/CasamentoList'
import vestidoNoiva from '../../assets/images/casamento/vestido_de_casamento.jpg'
import vestidoInfantilCasamengto from '../../assets/images/casamento/roupa_infantil_casamento.jpg'
import HeroCasamento from '../../Components/HeroCasamento'

const ListCasamento: Roupa[] = [
  {
    id: 7,
    category: 'Vestido',
    description: 'Um vestido noiva fantástivo, para um casamento fantástico.',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoNoiva
  },
  {
    id: 8,
    category: 'Vestido',
    description:
      'Deixe os filhos arrasando no casamento, eles podem entregar as alianças',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Infantil'],
    image: vestidoInfantilCasamengto
  },
  {
    id: 9,
    category: 'Vestido',
    description: 'Um vestido noiva fantástivo, para um casamento fantástico.',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoNoiva
  },
  {
    id: 10,
    category: 'Vestido',
    description: 'Um vestido noiva fantástivo, para um casamento fantástico.',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoNoiva
  },
  {
    id: 11,
    category: 'Vestido',
    description: 'Um vestido noiva fantástico, para um casório fantástico.',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoNoiva
  },
  {
    id: 12,
    category: 'Vestido',
    description: 'Um vestido noiva fantástivo, para um casamento fantástico.',
    title: 'Vestidos femininos',
    estilo: 'Casamento',
    infos: ['Feminino', 'Adulto'],
    image: vestidoNoiva
  }
]

export const DressCasamentos = () => (
  <>
    <HeroCasamento />
    <CasamentoList outfit={ListCasamento} title="Roupas para casamento" />
  </>
)
