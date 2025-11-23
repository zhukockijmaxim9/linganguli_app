import { Link } from 'react-router-dom'
import styles from './Achievements.module.css'

const summaryStats = [
  { value: '8', label: 'Получено' },
  { value: '25', label: 'Всего' },
  { value: '32%', label: 'Прогресс' },
]

const categories = [
  {
    id: 'learning',
    title: 'Обучение',
    achievements: [
      { icon: 'fas fa-fire', title: 'Первые шаги', text: 'Завершите первый урок', reward: '+50 XP', date: '15 января 2024', earned: true },
      { icon: 'fas fa-book', title: 'Ученик', text: 'Завершите 5 уроков', reward: '+100 XP', date: '18 января 2024', earned: true },
      { icon: 'fas fa-graduation-cap', title: 'Студент', text: 'Завершите 20 уроков', reward: '+200 XP', date: '25 января 2024', earned: true },
      { icon: 'fas fa-crown', title: 'Мастер курса', text: 'Завершите полный курс', reward: '+500 XP', progress: 75, earned: false },
    ],
  },
  {
    id: 'practice',
    title: 'Практика',
    achievements: [
      { icon: 'fas fa-code', title: 'Программист', text: 'Напишите 10 программ', reward: '+100 XP', date: '20 января 2024', earned: true },
      { icon: 'fas fa-bug', title: 'Отладчик', text: 'Исправьте 25 ошибок', reward: '+150 XP', date: '22 января 2024', earned: true },
      { icon: 'fas fa-trophy', title: 'Решатель задач', text: 'Решите 100 задач', reward: '+300 XP', progress: 127, earned: false },
      { icon: 'fas fa-brain', title: 'Алгоритмист', text: 'Решите 50 алгоритмических задач', reward: '+400 XP', progress: 20, earned: false },
    ],
  },
  {
    id: 'streak',
    title: 'Streak',
    achievements: [
      { icon: 'fas fa-fire', title: 'Начало пути', text: 'Поддерживайте streak 3 дня', reward: '+50 XP', date: '17 января 2024', earned: true },
      { icon: 'fas fa-fire', title: 'Streak Master', text: 'Поддерживайте streak 7 дней', reward: '+100 XP', date: '22 января 2024', earned: true },
      { icon: 'fas fa-fire', title: 'Непрерывность', text: 'Поддерживайте streak 30 дней', reward: '+500 XP', progress: 23, earned: false },
      { icon: 'fas fa-fire', title: 'Легенда', text: 'Поддерживайте streak 100 дней', reward: '+1000 XP', progress: 7, earned: false },
    ],
  },
  {
    id: 'special',
    title: 'Особые',
    achievements: [
      { icon: 'fas fa-heart', title: 'Первый день', text: 'Начните путешествие в мир Python', reward: '+25 XP', date: '15 января 2024', earned: true },
      { icon: 'fas fa-star', title: 'Звезда', text: 'Заработайте 1000 XP', reward: '+200 XP', date: '28 января 2024', earned: true },
      { icon: 'fas fa-gem', title: 'Драгоценность', text: 'Заработайте 5000 XP', reward: '+1000 XP', progress: 25, earned: false },
      { icon: 'fas fa-crown', title: 'Король Python', text: 'Достигните максимального уровня', reward: '+2000 XP', progress: 12, earned: false },
    ],
  },
]

const highlightStats = [
  { icon: 'fas fa-trophy', value: '8', label: 'Достижений получено' },
  { icon: 'fas fa-star', value: '1 250', label: 'XP заработано' },
  { icon: 'fas fa-fire', value: '7', label: 'Дней streak' },
  { icon: 'fas fa-target', value: '32%', label: 'Общий прогресс' },
]

const recentAchievements = [
  { icon: 'fas fa-star', title: 'Звезда', text: 'Заработайте 1000 XP', date: '28 января 2024', reward: '+200 XP' },
  { icon: 'fas fa-graduation-cap', title: 'Студент', text: 'Завершите 20 уроков', date: '25 января 2024', reward: '+200 XP' },
  { icon: 'fas fa-bug', title: 'Отладчик', text: 'Исправьте 25 ошибок', date: '22 января 2024', reward: '+150 XP' },
]

function Achievements() {
  return (
    <main className={styles.page}>
      <section className="section">
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Хлебные крошки">
            <Link to="/">Главная</Link>
            <span>/</span>
            <span>Достижения</span>
          </nav>

          <header className={styles.pageHead}>
            <div>
              <h1>Достижения</h1>
              <p>Отмечайте свои успехи и мотивируйте себя на дальнейшее изучение Python.</p>
            </div>
            <dl className={styles.statRow}>
              {summaryStats.map((stat) => (
                <div key={stat.label}>
                  <dt className={styles.statValue}>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </header>

          <nav className={styles.tabRow} aria-label="Категории достижений">
            {categories.map((category, index) => (
              <button key={category.id} type="button" className={`${styles.tabBtn} ${index === 0 ? styles.active : ''}`}>
                {category.title}
              </button>
            ))}
          </nav>

          {categories.map((category) => (
            <section key={category.id} className={styles.categoryBlock}>
              <header>
                <h2>{category.title}</h2>
              </header>
              <div className={styles.cardGrid}>
                {category.achievements.map((item) => (
                  <article key={item.title} className={`card ${styles.achievementCard} ${item.earned ? styles.earned : ''}`}>
                    <header className={styles.cardHead}>
                      <i className={item.icon} aria-hidden="true" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </header>
                    <div className={styles.cardBody}>
                      <span className={styles.reward}>{item.reward}</span>
                      {item.date && <span className={styles.date}>{item.date}</span>}
                      {typeof item.progress === 'number' && (
                        <div className={styles.progressInfo}>
                          <div className="progress-track">
                            <span style={{ width: `${item.progress}%` }} />
                          </div>
                          <span>{item.progress}%</span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.highlightGrid}>
            {highlightStats.map((stat) => (
              <article key={stat.label} className={`card ${styles.highlightCard}`}>
                <i className={stat.icon} aria-hidden="true" />
                <div>
                  <span className={styles.statValue}>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className={styles.sectionHead}>
            <h2>Последние достижения</h2>
          </header>
          <div className={styles.recentList}>
            {recentAchievements.map((item) => (
              <article key={item.title} className={`card ${styles.recentItem}`}>
                <i className={item.icon} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <span className={styles.reward}>{item.reward}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Achievements
