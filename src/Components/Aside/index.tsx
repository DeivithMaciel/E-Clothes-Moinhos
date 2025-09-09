import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'
import { useEffect } from 'react'

import { RootReducer } from '../../store/index'
import { usePurchaseMutation } from '../../services'
import {
  backToCart,
  backToDelivery,
  close,
  remove,
  toDelivery,
  toPayment,
  clearItems,
  concluing
} from '../../store/reducers/cart'

import { formatPrice } from '../Food'

import trash from '../../assets/images/lixeira.png'
import * as S from './styles'

const Aside = () => {
  const { isOpen, items, listItems, deliveryAside, paymentAside } = useSelector(
    (state: RootReducer) => state.cart
  )

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  // ACTIONS
  const closeCart = () => {
    dispatch(close())
  }
  const goingDelivery = () => {
    dispatch(toDelivery())
  }
  const goingPayment = () => {
    dispatch(toPayment())
  }
  const backCart = () => {
    dispatch(backToCart())
  }
  const backDelivery = () => {
    dispatch(backToDelivery())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const conclussion = () => {
    dispatch(concluing())
    window.location.reload()
  }

  const totalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      CEP: '',
      numberCEP: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      CVV: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(2, 'O nome precisa de pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O nome precisa de pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome precisa de pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      CEP: Yup.string().required('O campo é obrigatório'),
      numberCEP: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      CVV: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: Number(item.id),
          price: Number(item.preco)
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.CEP,
            number: Number(values.numberCEP),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.CVV),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkingInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    dispatch(clearItems())
  }, [dispatch, isSuccess])

  return (
    <>
      {isOpen && <S.Overlay onClick={isSuccess ? conclussion : closeCart} />}
      <S.AsidePage className={isOpen ? 'is-open' : ''}>
        {isSuccess && data ? (
          <S.List className={paymentAside ? '' : 'payment'}>
            <S.DeliveryTitle>Pedido realizado - {data.orderId}</S.DeliveryTitle>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.Button type="button" onClick={conclussion}>
              Concluir
            </S.Button>
          </S.List>
        ) : (
          <>
            <div className={listItems ? '' : 'list-items'}>
              {items.length > 0 ? (
                <>
                  <S.List>
                    {items.map((food) => (
                      <S.ListItem key={food.id}>
                        <img src={food.foto} alt={food.nome} />
                        <div>
                          <h3>{food.nome}</h3>
                          <p>{formatPrice(food.preco)}</p>
                          <S.Trash
                            src={trash}
                            alt="Remover"
                            onClick={() => removeItem(food.id)}
                          />
                        </div>
                      </S.ListItem>
                    ))}
                  </S.List>
                  <S.TotalPrice>
                    <p>Valor total</p>
                    <p>{formatPrice(totalPrice())}</p>
                  </S.TotalPrice>
                  {listItems && (
                    <S.Button type="button" onClick={goingDelivery}>
                      Continuar com a entrega
                    </S.Button>
                  )}
                </>
              ) : (
                <p className="no-items">
                  O carrinho está vazio, adicione algum prato de nossos
                  restaurtentes associados para Continuar
                </p>
              )}
            </div>

            <form onSubmit={form.handleSubmit}>
              <S.List className={deliveryAside ? '' : 'delivery'}>
                <S.DeliveryTitle>Entrega</S.DeliveryTitle>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    type="text"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkingInputHasError('receiver') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="adress">Endereço</label>
                  <input
                    id="adress"
                    type="text"
                    name="adress"
                    value={form.values.adress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkingInputHasError('adress') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkingInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="CEP">CEP</label>
                    <IMaskInput
                      mask={'00000-000'}
                      placeholder="00000-000"
                      id="CEP"
                      type="text"
                      name="CEP"
                      value={form.values.CEP}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkingInputHasError('CEP') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="numberCEP">Número</label>
                    <IMaskInput
                      mask={'000'}
                      placeholder="000"
                      id="numberCEP"
                      type="text"
                      name="numberCEP"
                      value={form.values.numberCEP}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkingInputHasError('numberCEP') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opicional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkingInputHasError('complement') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <div className="buttons">
                  <S.Button type="button" onClick={goingPayment}>
                    Continuar com o pagamento
                  </S.Button>
                  <S.Button type="button" onClick={backCart}>
                    Voltar para o carrinho
                  </S.Button>
                </div>
              </S.List>

              <S.List className={paymentAside ? '' : 'payment'}>
                <S.DeliveryTitle>
                  Pagamento - Valor a pagar {formatPrice(totalPrice())}
                </S.DeliveryTitle>
                <S.InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    type="text"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkingInputHasError('cardName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InfosCard>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número no cartão</label>
                    <IMaskInput
                      mask={'0000 0000 0000 0000'}
                      placeholder="0000 0000 0000 0000"
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkingInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="CVV">CVV</label>
                    <IMaskInput
                      mask={'000'}
                      placeholder="000"
                      id="CVV"
                      type="text"
                      name="CVV"
                      value={form.values.CVV}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkingInputHasError('CVV') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </S.InfosCard>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <IMaskInput
                      mask={'00'}
                      placeholder="00"
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkingInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <IMaskInput
                      mask={'00'}
                      placeholder="00"
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkingInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.Row>
                <div className="buttons">
                  <S.Button
                    type="submit"
                    title="Clique aqui para finalizar a compra"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                  </S.Button>
                  <S.Button type="button" onClick={backDelivery}>
                    Voltar para a edição de endereço
                  </S.Button>
                </div>
              </S.List>
            </form>
          </>
        )}
      </S.AsidePage>
    </>
  )
}

export default Aside
