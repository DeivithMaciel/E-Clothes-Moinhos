import { useState } from 'react'

import { FoodItem } from '../../pages/Home'
import Tag from '../Tag'

import {
  Botao,
  Card,
  Descricao,
  InfosFood,
  Modal,
  ModalContent,
  Titulo
} from './styles'

import fechar from '../../assets/images/fechar.png'

type FoodProps = {
  food: FoodItem
}

const Food = ({ food }: FoodProps) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)

  return (
    <>
      <Card key={food.id}>
        <img src={food.foto} alt={food.nome} />
        <h4>R$: {food.preco}0</h4>
        <Tag>{food.porcao}</Tag>
        <Titulo>{food.nome}</Titulo>
        <Descricao>{food.descricao}</Descricao>
        <Botao onClick={() => setModalEstaAberta(true)}>
          Adicionar ao carrinho
        </Botao>
      </Card>
      <Modal className={modalEstaAberta ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={food.foto} />
          <InfosFood>
            <header>
              <h4>{food.nome}</h4>
              <img
                onClick={() => setModalEstaAberta(false)}
                src={fechar}
                alt="Icone de fechamento"
              />
            </header>
            <p>{food.descricao}</p>
            <p>serve: {food.porcao}</p>
            <Botao>Adicionar ao carrinho: R${food.preco}0</Botao>
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
