const startingCount = {
  sport: 9753,
  suv: 8647,
  classic: 7326,
  atv: 8488,
  duneBuggy: 7446,
  crawler: 3398
}

const getNextCount = body => {
  startingCount[body]++
  return startingCount[body]
}

const CartItem = ({battery, body, category, wheels}) => (
  <>
    <div>
      <p>Category: {category}</p>
      <p>Body: {body}</p>
      <p>Wheels & Tires: {wheels}</p>
      <p>Batteries: {battery}</p>
      <p>Count: {getNextCount(body)}</p>
    </div>
    <style jsx>{`
      div {
        border: 1px solid black;
        margin: 1rem;
      }
    `}
    </style>
  </>
)

export default CartItem
