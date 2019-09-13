const CartItem = ({battery, body, category, wheels}) => (
  <>
    <div>
      <p>Category: {category}</p>
      <p>Body: {body}</p>
      <p>Wheels & Tires: {wheels}</p>
      <p>Batteries: {battery}</p>
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
