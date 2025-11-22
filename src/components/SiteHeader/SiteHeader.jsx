import { NavLink } from 'react-router-dom'
import styles from './SiteHeader.module.css'

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/courses', label: 'Курсы' },
  { to: '/practice', label: 'Практика' },
  { to: '/achievements', label: 'Достижения' },
  { to: '/profile', label: 'Профиль' },
]

function SiteHeader() {
  return (
    <header className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <i className="fas fa-code" aria-hidden="true" />
          <span>Linganguli</span>
        </div>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <div className={styles.counter}>
            <i className="fas fa-fire" aria-hidden="true" />
            <span>7</span>
          </div>
          <div className={styles.counter}>
            <i className="fas fa-star" aria-hidden="true" />
            <span>1 250 XP</span>
          </div>
          <button type="button" className={styles.helpBtn}>
            <i className="fas fa-heart" aria-hidden="true" />
            <span>Психолог</span>
          </button>
          <div className={styles.avatar}>
            <img
              src="https://via.placeholder.com/40x40/4CAF50/FFFFFF?text=U"
              alt="Профиль"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
