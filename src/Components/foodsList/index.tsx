import { FoodItem } from '../../pages/Home'
import Food from '../Food'

import { Container, List } from './styles'

type Props = {
  foods: FoodItem[]
}

const FoodList = ({ foods }: Props) => {
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {foods.map((food) => (
              <Food key={food.id} food={food} />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}
export default FoodList
