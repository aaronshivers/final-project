const Button = ({text}) => {
  return (
    <button className='button'>{text}
    <style jsx>{`
      .button {
        color: var(--text-color);
        background-color: var(--primary-color);
        font-family: arial;
        font-size: 1.2rem;
        padding: 1rem;
        padding-top: 1.5rem;
        border: 0;
        border-bottom: 3px solid var(--primary-darker-color);
        text-decoration: none;
        outline: none;
      }
      
      .button:hover {
        background-color: lime;
        cursor: pointer;
        border-bottom: 3px solid limegreen;
      }
    `}</style>
    </button>
  );
}

export default Button;
