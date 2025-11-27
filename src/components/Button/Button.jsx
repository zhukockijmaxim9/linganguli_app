import styles from "./Button.module.css";

const VARIANT_CLASSES = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  locked: "btn btn-locked",
  green: styles.green,
  blue: styles.blue,
  transparent: styles.transparent,
};

function Button({
  children,
  text,
  size = "medium",
  variant, // новый проп: primary | secondary | locked | green | blue | transparent
  mainColor, // оставлен для обратной совместимости
  maincolor,
  disabled,
  className = "",
  type = "button",
  ...props
}) {
  const content = children ?? text ?? "Button";

  // Определяем вариант
  let variantKey = variant;
  if (!variantKey) {
    const useMain = maincolor ?? mainColor;
    variantKey = useMain === false ? "secondary" : "primary";
  }

  const variantClass = VARIANT_CLASSES[variantKey] || VARIANT_CLASSES.primary;
  const sizeClass = styles[size] || styles.medium;

  const isLocked = variantKey === "locked";
  const finalDisabled = disabled || isLocked;

  const classNames = [styles.button, sizeClass, variantClass, finalDisabled && styles.disabled, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classNames} disabled={finalDisabled} {...props}>
      {content}
    </button>
  );
}

export default Button;
