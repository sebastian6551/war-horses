import './styles/square.css';

export const Square = ({ id, squareType, color, cursor, onClick = () => {} }) => {
  const squareColor = squareType === "red" ? "#FA3131" : "#62E2A4";
    
  return (
    <div
      className="square"
      onClick={() => onClick(id)}
      style={{ background: color, border: '1px solid' + color,  cursor: cursor }}>
      {squareType && <div className="square" style={{background: squareColor}}/>} 
    </div>
  );
};
