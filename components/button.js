const Button = ({text, id, handleButtonClick}) => {
  return (
    <button
      onClick={() => handleButtonClick(id)}
    >{text}
    <style jsx>{`
        button {
            background-color: white;
            font-family: arial;
            font-size: 1.2rem;
            padding: .6rem;
            border: 2px solid black;
            border-radius: 5px;
        }
        button:hover {
            background-color: gray;
            cursor: pointer;
        }
    `}</style>
    </button>
  );
}

export default Button;