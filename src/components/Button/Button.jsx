import styles from "./Button.module.css";

const COLOR_CLASSES = {
  green: styles.green,
  blue: styles.blue,
  transparent: styles.transparent,
};

function Button({
  text,
  children,
  size = "medium",
  mainColor = true,
  maincolor,
  color,
  className = "",
  type = "button",
  ...props
}) {
  const fallbackColor = (maincolor ?? mainColor) ? "green" : "blue";
  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES[fallbackColor] || COLOR_CLASSES.green;
  const sizeClass = styles[size] || styles.medium;
  const content = children ?? text ?? "Button";

  const buttonClassName = [styles.button, colorClass, sizeClass, className].filter(Boolean).join(" ");

  return (
    <button type={type} className={buttonClassName} {...props}>
      {content}
    </button>
  );
}

export default Button;
