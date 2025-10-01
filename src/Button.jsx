function Button(props) {

    const {type, disabled} = props;

    
  return (
  <button type={type} disabled={disabled}>
    クリック
  </button>
  
  );
}
export default Button;