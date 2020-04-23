import './button.scss';

export default ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};
