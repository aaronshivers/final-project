const Button = ({text}) => {
  return (
    <button>{text}
    <style jsx>{`
      button {
        background-color: var(--primary-color);
        font-family: arial;
        font-size: 1.2rem;
        padding: .6rem;
        border: 2px solid black;
        border-radius: 5px;
      }

      button:hover {
        background-color: white;
        color: black;
        cursor: pointer;
      }
    `}</style>
    </button>
  );
}

export default Button;