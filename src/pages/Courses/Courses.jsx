import { Link } from 'react-router-dom'
import styles from './Courses.module.css'

const courseStats = [
  { value: '5', label: 'Курсов' },
  { value: '120+', label: 'Уроков' },
  { value: '500+', label: 'Задач' },
]

const filterTabs = [
  { id: 'all', label: 'Все курсы' },
  { id: 'beginner', label: 'Начинающим' },
  { id: 'intermediate', label: 'Средний уровень' },
  { id: 'advanced', label: 'Продвинутый' },
]

const courseCards = [
  {
    title: 'Основы Python',
    description:
      'Изучите базовые концепции программирования и синтаксис Python. Идеально для начинающих программистов.',
    badge: 'Популярный',
    progress: 25,
    lessons: '15 уроков',
    hours: '3 часа',
    reward: '50 XP',
    students: '2 500 студентов',
    topics: ['Переменные', 'Циклы', 'Функции', 'Условия'],
    rating: '4.9 (1 200 отзывов)',
    locked: false,
  },
  {
    title: 'Структуры данных',
    description:
      'Списки, словари, кортежи и другие структуры данных Python для эффективной работы с информацией.',
    badge: 'Новый',
    progress: 0,
    lessons: '20 уроков',
    hours: '5 часов',
    reward: '100 XP',
    students: '1 800 студентов',
    topics: ['Списки', 'Словари', 'Кортежи', 'Множества'],
    rating: '4.8 (850 отзывов)',
    locked: false,
  },
  {
    title: 'ООП и модули',
    description:
      'Объектно-ориентированное программирование, создание модулей и пакетов для профессиональной разработки.',
    badge: 'Premium',
    progress: 0,
    lessons: '25 уроков',
    hours: '8 часов',
    reward: '200 XP',
    students: '1 200 студентов',
    topics: ['Классы', 'Наследование', 'Модули', 'Пакеты'],
    rating: '4.9 (650 отзывов)',
    locked: true,
  },
  {
    title: 'Веб-разработка с Flask',
    description:
      'Создавайте веб-приложения с помощью Flask — легкого и мощного фреймворка для Python.',
    badge: 'Популярный',
    progress: 0,
    lessons: '18 уроков',
    hours: '6 часов',
    reward: '150 XP',
    students: '1 500 студентов',
    topics: ['Flask', 'HTML', 'CSS', 'Базы данных'],
    rating: '4.7 (900 отзывов)',
    locked: false,
  },
  {
    title: 'Анализ данных с Pandas',
    description:
      'Изучите библиотеку Pandas для анализа данных, визуализации и машинного обучения.',
    badge: 'Premium',
    progress: 0,
    lessons: '22 урока',
    hours: '7 часов',
    reward: '180 XP',
    students: '980 студентов',
    topics: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    rating: '4.8 (720 отзывов)',
    locked: true,
  },
]

const learningObjectives = [
  'Основы синтаксиса Python',
  'Работа с переменными и типами данных',
  'Условные операторы и циклы',
  'Создание и использование функций',
  'Обработка ошибок и исключений',
]

const requirements = [
  'Компьютер с доступом в интернет',
  'Установленный Python 3.7+',
  '2–3 часа в неделю',
]

const curriculum = [
  {
    title: 'Модуль 1: Введение в Python',
    duration: '45 мин',
    lessons: [
      { title: 'Установка Python и IDE', status: 'done', duration: '10 мин' },
      { title: 'Первая программа "Hello World"', status: 'done', duration: '15 мин' },
      { title: 'Переменные и типы данных', status: 'pending', duration: '20 мин' },
    ],
  },
  {
    title: 'Модуль 2: Основы программирования',
    duration: '1 ч 30 мин',
    lessons: [
      { title: 'Условные операторы if/else', status: 'pending', duration: '25 мин' },
      { title: 'Циклы for и while', status: 'pending', duration: '30 мин' },
      { title: 'Списки и работа с ними', status: 'pending', duration: '35 мин' },
    ],
  },
]

const reviewSummary = {
  rating: '4.9',
  total: '1 200 отзывов',
  breakdown: [
    { label: '5', percent: 85 },
    { label: '4', percent: 12 },
    { label: '3', percent: 2 },
    { label: '2', percent: 1 },
    { label: '1', percent: 0 },
  ],
}

const reviews = [
  {
    name: 'Анна Петрова',
    avatar: 'https://via.placeholder.com/40x40/4CAF50/FFFFFF?text=A',
    date: '2 дня назад',
    text: 'Отличный курс для начинающих! Все объясняется очень понятно, много практических заданий. Рекомендую!',
  },
  {
    name: 'Михаил Иванов',
    avatar: 'https://via.placeholder.com/40x40/2196F3/FFFFFF?text=M',
    date: '1 неделю назад',
    text: 'Хорошо структурированный материал, понятные примеры. Помог мне начать программировать на Python.',
  },
]

function Courses() {
  return (
    <main className={styles.page}>
      <section className="section">
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Хлебные крошки">
            <Link to="/">Главная</Link>
            <span>/</span>
            <span>Курсы Python</span>
          </nav>

          <header className={styles.pageHead}>
            <div>
              <h1>Курсы Python</h1>
              <p>Выберите курс, который подходит вашему уровню, и начните изучать Python.</p>
            </div>
            <dl className={styles.statRow}>
              {courseStats.map((stat) => (
                <div key={stat.label}>
                  <dt className={styles.statValue}>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </header>

          <div className={`card ${styles.filterBar}`}>
            <nav className={styles.tabs} aria-label="Фильтр курсов">
              {filterTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.tabBtn} ${index === 0 ? styles.active : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
            <div className={styles.filterInputs}>
              <label className={styles.search}>
                <i className="fas fa-search" aria-hidden="true" />
                <input type="search" placeholder="Поиск курсов..." />
              </label>
              <select defaultValue="popular" aria-label="Сортировка">
                <option value="popular">По популярности</option>
                <option value="newest">Сначала новые</option>
                <option value="difficulty">По сложности</option>
                <option value="progress">По прогрессу</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cardGrid}>
            {courseCards.map((course) => (
              <article key={course.title} className={`card ${styles.courseCard} ${course.locked ? styles.locked : ''}`}>
                <header className={styles.courseHeader}>
                  <div className={styles.icon}>
                    <i className="fas fa-code" aria-hidden="true" />
                  </div>
                  <span className="badge">{course.badge}</span>
                  <div className={styles.progressInfo}>
                    <div className="progress-track">
                      <span style={{ width: `${course.progress}%` }} />
                    </div>
                    <span>{course.progress}%</span>
                  </div>
                </header>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <ul className={`${styles.metaList} list-clean`}>
                  <li>
                    <i className="fas fa-book" aria-hidden="true" />
                    {course.lessons}
                  </li>
                  <li>
                    <i className="fas fa-clock" aria-hidden="true" />
                    {course.hours}
                  </li>
                  <li>
                    <i className="fas fa-trophy" aria-hidden="true" />
                    {course.reward}
                  </li>
                  <li>
                    <i className="fas fa-users" aria-hidden="true" />
                    {course.students}
                  </li>
                </ul>
                <ul className={`${styles.tags} list-clean`}>
                  {course.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <div className={styles.rating}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <span>{course.rating}</span>
                </div>
                <footer className={styles.courseActions}>
                  <button type="button" className={course.locked ? styles.lockedBtn : 'btn btn-primary'}>
                    {course.locked ? 'Заблокировано' : 'Продолжить'}
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Подробнее
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            <article className={`card ${styles.detailCard}`}>
              <header className={styles.detailHead}>
                <div className={styles.icon}>
                  <i className="fas fa-code" aria-hidden="true" />
                </div>
                <div>
                  <h2>Основы Python</h2>
                  <p>Изучите базовые концепции программирования и синтаксис Python.</p>
                </div>
              </header>
              <ul className={`${styles.metaList} list-clean`}>
                <li>
                  <i className="fas fa-clock" aria-hidden="true" />
                  3 часа
                </li>
                <li>
                  <i className="fas fa-book" aria-hidden="true" />
                  15 уроков
                </li>
                <li>
                  <i className="fas fa-trophy" aria-hidden="true" />
                  50 XP
                </li>
                <li>
                  <i className="fas fa-users" aria-hidden="true" />
                  2 500 студентов
                </li>
              </ul>
              <nav className={styles.tabs} aria-label="Детали курса">
                <button type="button" className={`${styles.tabBtn} ${styles.active}`}>
                  Обзор
                </button>
                <button type="button" className={styles.tabBtn}>
                  Программа
                </button>
                <button type="button" className={styles.tabBtn}>
                  Отзывы
                </button>
              </nav>
              <div className={styles.overview}>
                <h3>О курсе</h3>
                <p>
                  Этот курс идеально подходит для тех, кто только начинает изучать программирование.
                  Вы изучите основные концепции Python и научитесь писать простые программы.
                </p>
                <h4>Что вы изучите</h4>
                <ul>
                  {learningObjectives.map((item) => (
                    <li key={item}>
                      <i className="fas fa-check" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h4>Требования</h4>
                <ul>
                  {requirements.map((item) => (
                    <li key={item}>
                      <i className="fas fa-circle" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className={`card ${styles.detailCard}`}>
              <h3>Программа курса</h3>
              <div className={styles.curriculum}>
                {curriculum.map((section) => (
                  <section key={section.title} className={styles.curriculumSection}>
                    <header className={styles.curriculumHead}>
                      <h4>{section.title}</h4>
                      <span>{section.duration}</span>
                    </header>
                    <div>
                      {section.lessons.map((lesson) => (
                        <div key={lesson.title} className={styles.lesson}>
                          <i className="fas fa-play-circle" aria-hidden="true" />
                          <span>{lesson.title}</span>
                          <span>{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <article className={`card ${styles.detailCard}`}>
              <h3>Отзывы</h3>
              <div className={styles.reviewSummary}>
                <div>
                  <span className={styles.statValue}>{reviewSummary.rating}</span>
                  <div className={styles.rating}>
                    <i className="fas fa-star" aria-hidden="true" />
                    <span>{reviewSummary.total}</span>
                  </div>
                </div>
                <div className={styles.breakdown}>
                  {reviewSummary.breakdown.map((item) => (
                    <div key={item.label} className={styles.breakdownRow}>
                      <span>{item.label}</span>
                      <div className="progress-track">
                        <span style={{ width: `${item.percent}%` }} />
                      </div>
                      <span>{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.reviewList}>
                {reviews.map((review) => (
                  <article key={review.name} className={styles.reviewItem}>
                    <img src={review.avatar} alt={review.name} />
                    <div>
                      <div className={styles.reviewHead}>
                        <strong>{review.name}</strong>
                        <span>{review.date}</span>
                      </div>
                      <p>{review.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Courses
