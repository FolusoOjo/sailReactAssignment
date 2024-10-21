function Button({value, color, fontColor, fontSize, padding,margin, bColor, bRadius}) {

    const styles = {
        backgroundColor : color,
        color : fontColor,
        fontSize: fontSize,
        padding: padding,
        margin: margin,
        border: bColor,
        borderRadius : bRadius
    }
  return <div>
    <button style = {styles} >{value}</button>
  </div>;
}

export default Button;
