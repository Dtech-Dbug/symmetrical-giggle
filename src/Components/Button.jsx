import './Button.css'

const Button = ({ btnText, styles, handleClick }) => <>
    <div className="btn-container">
        <button style={styles} onClick={handleClick}>{btnText}</button>
    </div>
</>

export default Button;