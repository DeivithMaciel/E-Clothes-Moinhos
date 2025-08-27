import { useState } from 'react'

import { FoodItem } from '../../pages/Home'

import {
  Botao,
  Card,
  CloseButton,
  Descricao,
  FoodImage,
  InfosFood,
  Modal,
  ModalContent,
  Titulo
} from './styles'

import closeIcon from '../../assets/images/close.png'
import { LinkItem } from '../HeaderHome/styles'

type FoodProps = {
  food: FoodItem
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Food = ({ food }: FoodProps) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)

  return (
    <>
      <Card key={food.id}>
        <img src={food.foto} alt={food.nome} />
        <Titulo>{food.nome}</Titulo>
        <Descricao>{food.descricao}</Descricao>
        <Botao onClick={() => setModalEstaAberta(true)}>
          Adicionar ao carrinho
        </Botao>
      </Card>
      <Modal className={modalEstaAberta ? 'visivel' : ''}>
        <ModalContent className="container">
          <FoodImage src={food.foto} />
          <InfosFood>
            <CloseButton
              onClick={() => setModalEstaAberta(false)}
              src={closeIcon}
              alt="Fechar"
            />
            <h4>{food.nome}</h4>
            <p>{food.descricao}</p>
            <p>serve: de {food.porcao}</p>
            <LinkItem to={'/'}>
              Adicionar ao carrinho - {formatPrice(food.preco)}
            </LinkItem>
          </InfosFood>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberta(false)}
        ></div>
      </Modal>
    </>
  )
}

export default Food
