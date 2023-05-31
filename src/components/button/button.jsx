import styles from "./Button.module.css";

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button {...otherProps} className={`${styles.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
