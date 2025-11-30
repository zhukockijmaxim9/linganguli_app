import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/courses", label: "Курсы" },
  { to: "/practice", label: "Практика" },
  { to: "/achievements", label: "Достижения" },
  { to: "/profile", label: "Профиль" },
  { to: "/support", label: "Поддержка", isSupport: true },
];

function Navigation() {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `
            ${styles.navLink} 
            ${link.isSupport ? styles.supportLink : ''}
            ${isActive ? ` ${styles.active}` : ''}
          `}
        >
          {link.isSupport && <i className="fas fa-heart" aria-hidden="true" />}
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
