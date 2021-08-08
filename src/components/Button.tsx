const Button = ({text, colour, bgColor, onClick}) => {
    return (
        <button onClick = {onClick} className="btn" style={{color:colour, backgroundColor:bgColor}}>{text}</button>
    )
}

export default Button
