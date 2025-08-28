import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'

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

import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  return (
    <>
      <Card key={food.id}>
        <img src={food.foto} alt={food.nome} />
        <Titulo>{food.nome}</Titulo>
        <Descricao>{food.descricao}</Descricao>
        <Botao onClick={() => setModalEstaAberta(true)}>Mais detalhes</Botao>
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
            <button
              onClick={() => {
                addToCart()
                setModalEstaAberta(false)
              }}
            >
              Adicionar ao carrinho - {formatPrice(food.preco)}
            </button>
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
