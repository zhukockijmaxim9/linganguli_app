import styles from './Home.module.css'

const courseCards = [
  {
    title: 'Основы Python',
    level: 'beginner',
    badge: 'Популярный',
    description: 'Изучите базовые концепции программирования и синтаксис Python.',
    lessons: '15 уроков',
    hours: '3 часа',
    reward: '50 XP',
    progress: 25,
    cta: 'Продолжить',
    locked: false,
  },
  {
    title: 'Структуры данных',
    level: 'intermediate',
    badge: 'Новый',
    description: 'Списки, словари, кортежи и работа с данными.',
    lessons: '20 уроков',
    hours: '5 часов',
    reward: '100 XP',
    progress: 0,
    cta: 'Начать',
    locked: false,
  },
  {
    title: 'ООП и модули',
    level: 'advanced',
    badge: 'Premium',
    description: 'Объектно-ориентированное программирование и создание модулей.',
    lessons: '25 уроков',
    hours: '8 часов',
    reward: '200 XP',
    progress: 0,
    cta: 'Заблокировано',
    locked: true,
  },
]

const practiceTasks = [
  {
    title: 'Калькулятор',
    difficulty: 'Легко',
    difficultyIcon: 'fas fa-leaf',
    xp: '+10 XP',
    description:
      'Создайте простой калькулятор, который выполняет основные арифметические операции.',
    hints: ['💡 Используйте input() для ввода'],
  },
]

const achievements = [
  {
    icon: 'fas fa-fire',
    title: 'Первые шаги',
    description: 'Завершите первый урок',
    progress: 100,
    earned: true,
  },
  {
    icon: 'fas fa-code',
    title: 'Программист',
    description: 'Напишите 10 программ',
    progress: 100,
    earned: true,
  },
  {
    icon: 'fas fa-trophy',
    title: 'Мастер Python',
    description: 'Завершите все курсы',
    progress: 30,
    earned: false,
  },
]

const contactOptions = [
  { icon: 'fas fa-phone', label: 'Позвонить сейчас' },
  { icon: 'fas fa-comments', label: 'Написать сообщение' },
  { icon: 'fas fa-video', label: 'Видеозвонок' },
]

function Home() {
  return (
    <div className={styles.page}>
      <section className={`${styles.section} ${styles.hero}`} id="hero">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1>Изучай Python с удовольствием</h1>
              <p>
                Интерактивные уроки, практические задания и мгновенная обратная
                связь. Сделай программирование своим хобби!
              </p>
              <div className={styles.heroStats}>
                <div>
                  <span className={styles.statNumber}>50+</span>
                  <span>уроков</span>
                </div>
                <div>
                  <span className={styles.statNumber}>200+</span>
                  <span>задач</span>
                </div>
                <div>
                  <span className={styles.statNumber}>10 000+</span>
                  <span>студентов</span>
                </div>
              </div>
              <button type="button" className={styles.primaryBtn}>
                <i className="fas fa-play" aria-hidden="true" />
                <span>Начать обучение</span>
              </button>
            </div>
            <div className={styles.codeCard}>
              <div className={styles.codeHead}>
                <span className={styles.codeDots} aria-hidden="true">
                  ● ● ●
                </span>
                <span>main.py</span>
              </div>
              <pre className={styles.codeBody}>
{`def welcome():
    print("Привет, программист!")
    return "Успех!"

result = welcome()
print(result)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="courses">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Выбери свой путь в Python</h2>
            <p>Курсы для любого уровня подготовки</p>
          </div>
          <div className={styles.cardGrid}>
            {courseCards.map((course) => (
              <article
                key={course.title}
                className={`${styles.courseCard} ${
                  course.locked ? styles.locked : ''
                }`}
              >
                <header className={styles.courseHead}>
                  <div className={styles.courseIcon}>
                    <i className="fas fa-code" aria-hidden="true" />
                  </div>
                  <span className={styles.badge}>{course.badge}</span>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${course.progress}%` }}
                    />
                    <span>{course.progress}%</span>
                  </div>
                </header>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className={styles.courseMeta}>
                  <span>
                    <i className="fas fa-book" aria-hidden="true" />
                    {course.lessons}
                  </span>
                  <span>
                    <i className="fas fa-clock" aria-hidden="true" />
                    {course.hours}
                  </span>
                  <span>
                    <i className="fas fa-trophy" aria-hidden="true" />
                    {course.reward}
                  </span>
                </div>
                <button
                  type="button"
                  className={course.locked ? styles.lockedBtn : styles.primaryBtn}
                >
                  {course.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="practice">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Практика каждый день</h2>
            <p>Задачи для закрепления знаний</p>
          </div>
          <div className={styles.cardGrid}>
            {practiceTasks.map((task) => (
              <article key={task.title} className={styles.taskCard}>
                <div className={styles.taskHead}>
                  <span>
                    <i className={task.difficultyIcon} aria-hidden="true" />
                    {task.difficulty}
                  </span>
                  <span>{task.xp}</span>
                </div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className={styles.hints}>
                  {task.hints.map((hint) => (
                    <span key={hint}>{hint}</span>
                  ))}
                </div>
                <button type="button" className={styles.primaryBtn}>
                  Решить
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="achievements">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Достижения</h2>
            <p>Мотивируйте себя наградами</p>
          </div>
          <div className={styles.cardGrid}>
            {achievements.map((item) => (
              <article
                key={item.title}
                className={`${styles.achievementCard} ${
                  item.earned ? styles.earned : ''
                }`}
              >
                <div className={styles.achievementHead}>
                  <i className={item.icon} aria-hidden="true" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <div className={styles.progress}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${item.progress}%` }}
                  />
                  <span>{item.progress}%</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Помощь психолога</h2>
            <p>Поддержка рядом, когда нужна мотивация</p>
          </div>
          <div className={styles.modal}>
            <div className={styles.modalHead}>
              <h3>Анна Петрова</h3>
              <span>Сертифицированный психолог</span>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.avatarLarge}>
                <img
                  src="https://via.placeholder.com/80x80/2196F3/FFFFFF?text=П"
                  alt="Анна Петрова"
                />
              </div>
              <div>
                <div className={styles.rating}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <span>4.9 (127 отзывов)</span>
                </div>
                <div className={styles.contactList}>
                  {contactOptions.map((option) => (
                    <button key={option.label} type="button">
                      <i className={option.icon} aria-hidden="true" />
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
                <p>
                  Кризисная ситуация? Звоните{' '}
                  <a href="tel:88002000122">8-800-200-01-22</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Редактор кода</h2>
            <p>Пробуйте идеи прямо на платформе</p>
          </div>
          <div className={styles.modal}>
            <div className={styles.modalHead}>
              <h3>main.py</h3>
              <div className={styles.editorActions}>
                <button type="button">Запустить</button>
                <button type="button">Проверить</button>
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.editor}>
                <div className={styles.editorBar}>
                  <select defaultValue="3.11" aria-label="Версия Python">
                    <option value="3.9">Python 3.9</option>
                    <option value="3.10">Python 3.10</option>
                    <option value="3.11">Python 3.11</option>
                  </select>
                </div>
                <textarea
                  defaultValue={`def hello_world():
    print("Привет, мир!")
    return "Успех!"

result = hello_world()
print(result)`}
                />
              </div>
              <div className={styles.output}>
                <div className={styles.outputHead}>
                  <span>Вывод</span>
                  <button type="button">Очистить</button>
                </div>
                <div className={styles.outputBody}>
                  <div>Привет, мир!</div>
                  <div>Успех!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button type="button" className={styles.themeToggle} aria-label="Сменить тему">
        <i className="fas fa-moon" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Home
