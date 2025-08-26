import { useState } from 'react'

import { FoodItem } from '../../pages/Home'

import {
  Botao,
  Card,
  Descricao,
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
          <img src={food.foto} />
          <InfosFood>
            <header>
              <img
                onClick={() => setModalEstaAberta(false)}
                src={closeIcon}
                alt="Icone de fechamento"
              />
              <h4>{food.nome}</h4>
            </header>
            <p>{food.descricao}</p>
            <p>serve: de {food.porcao}</p>
            <LinkItem to={'/'}>
              Adicionar ao carrinho - R${food.preco}0
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
