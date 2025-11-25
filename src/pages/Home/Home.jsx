import styles from "./Home.module.css";
import Navigation from "../../components/Navigation/Navigation";
import PixelBlast from "../../components/PixelBlast/PixelBlast";

const courseCards = [
  {
    title: "Основы Python",
    level: "beginner",
    badge: "Популярный",
    description: "Изучите базовые концепции программирования и синтаксис Python.",
    lessons: "15 уроков",
    hours: "3 часа",
    reward: "50 XP",
    progress: 25,
    cta: "Продолжить",
    locked: false,
  },
  {
    title: "Структуры данных",
    level: "intermediate",
    badge: "Новый",
    description: "Списки, словари, кортежи и работа с данными.",
    lessons: "20 уроков",
    hours: "5 часов",
    reward: "100 XP",
    progress: 0,
    cta: "Начать",
    locked: false,
  },
  {
    title: "ООП и модули",
    level: "advanced",
    badge: "Premium",
    description: "Объектно-ориентированное программирование и создание модулей.",
    lessons: "25 уроков",
    hours: "8 часов",
    reward: "200 XP",
    progress: 0,
    cta: "Заблокировано",
    locked: true,
  },
];

const practiceTasks = [
  {
    title: "Калькулятор",
    difficulty: "Легко",
    difficultyIcon: "fas fa-leaf",
    xp: "+10 XP",
    description: "Создайте простой калькулятор, который выполняет основные арифметические операции.",
    hints: ["💡 Используйте input() для ввода"],
  },
];

const achievements = [
  {
    icon: "fas fa-fire",
    title: "Первые шаги",
    description: "Завершите первый урок",
    progress: 100,
    earned: true,
  },
  {
    icon: "fas fa-code",
    title: "Программист",
    description: "Напишите 10 программ",
    progress: 100,
    earned: true,
  },
  {
    icon: "fas fa-trophy",
    title: "Мастер Python",
    description: "Завершите все курсы",
    progress: 30,
    earned: false,
  },
];

const contactOptions = [
  { icon: "fas fa-phone", label: "Позвонить сейчас" },
  { icon: "fas fa-comments", label: "Написать сообщение" },
  { icon: "fas fa-video", label: "Видеозвонок" },
];

const heroStats = [
  { label: "уроков", value: "50+" },
  { label: "задач", value: "200+" },
  { label: "студентов", value: "10 000+" },
];

function Home() {
  return (
    <main className={styles.page}>
      {/* Компонент заднего фона */}
      <div className={styles.pixelback}>
        <PixelBlast
          variant="square"
          pixelSize={6}
          color="rgba(27, 209, 191, 1)"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples={false}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* <header className={styles.bar}>
        <div className={styles.brand}>
          <i className="fas fa-code" aria-hidden="true" />
          <span>Linganguli</span>
        </div>
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
            <img src="https://via.placeholder.com/40x40/4CAF50/FFFFFF?text=U" alt="Профиль" />
          </div>
        </div>
      </header> */}

      <Navigation />

      <section className={styles.hero} id="hero">
        <header className={styles.heroText}>
          <h1>
            Изучайте Python
            <br />
            с удовольствием <br />
            на Linganguli
          </h1>
          {/* <p>
            Интерактивные уроки, практические задания и мгновенная обратная связь. Сделай программирование своим хобби!
          </p> */}
          <dl className={styles.heroStats}>
            {heroStats.map((stat) => (
              <div key={stat.label} className={styles.card}>
                <dt className={styles.statNumber}>{stat.value}</dt>
                <dt className={styles.label}>{stat.label}</dt>
              </div>
            ))}
          </dl>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-play" aria-hidden="true" />
            <span>Начать обучение</span>
          </button>
        </header>

        <article className={styles.codeCard}>
          <header className={styles.codeHead}>
            <span className={styles.codeDots} aria-hidden="true">
              ● ● ●
            </span>
            <span>main.py</span>
          </header>
          <pre className={styles.codeBody}>
            {`def welcome():
    print("Привет, программист!")
    return "Успех!"

result = welcome()
print(result)`}
          </pre>
        </article>
      </section>

      <section className={styles.courses} id="courses">
        <header className="section-head">
          <h2>Выбери свой путь в Python</h2>
          <p>Курсы для любого уровня подготовки</p>
        </header>
        <div className={styles.cardGrid}>
          {courseCards.map((course) => (
            <article key={course.title} className={`${styles.courseCard} ${course.locked ? styles.locked : ""}`}>
              <header className={styles.courseHead}>
                <div className={styles.courseIcon}>
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
              <ul className={styles.courseMeta}>
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
              </ul>
              <button type="button" className={course.locked ? styles.lockedBtn : "btn btn-primary"}>
                {course.cta}
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="practice">
        <div className="container">
          <header className="section-head">
            <h2>Практика каждый день</h2>
            <p>Задачи для закрепления знаний</p>
          </header>
          <div className={styles.cardGrid}>
            {practiceTasks.map((task) => (
              <article key={task.title} className={`card ${styles.taskCard}`}>
                <header className={styles.taskHead}>
                  <span>
                    <i className={task.difficultyIcon} aria-hidden="true" />
                    {task.difficulty}
                  </span>
                  <span>{task.xp}</span>
                </header>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <ul className={`${styles.hints} list-clean`}>
                  {task.hints.map((hint) => (
                    <li key={hint}>{hint}</li>
                  ))}
                </ul>
                <button type="button" className="btn btn-primary">
                  Решить
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="achievements">
        <div className="container">
          <header className="section-head">
            <h2>Достижения</h2>
            <p>Мотивируйте себя наградами</p>
          </header>
          <div className={styles.cardGrid}>
            {achievements.map((item) => (
              <article
                key={item.title}
                className={`card ${styles.achievementCard} ${item.earned ? styles.earned : ""}`}
              >
                <header className={styles.achievementHead}>
                  <i className={item.icon} aria-hidden="true" />
                  <h3>{item.title}</h3>
                </header>
                <p>{item.description}</p>
                <div className={styles.progressInfo}>
                  <div className="progress-track">
                    <span style={{ width: `${item.progress}%` }} />
                  </div>
                  <span>{item.progress}%</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2>Помощь психолога</h2>
            <p>Поддержка рядом, когда нужна мотивация</p>
          </header>
          <article className={`card ${styles.modal}`}>
            <header className={styles.modalHead}>
              <h3>Анна Петрова</h3>
              <span>Сертифицированный психолог</span>
            </header>
            <div className={styles.modalBody}>
              <div className={styles.avatarLarge}>
                <img src="https://via.placeholder.com/80x80/2196F3/FFFFFF?text=П" alt="Анна Петрова" />
              </div>
              <div>
                <div className={`${styles.rating} badge`}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <span>4.9 (127 отзывов)</span>
                </div>
                <div className={styles.contactList}>
                  {contactOptions.map((option) => (
                    <button key={option.label} type="button" className="btn btn-secondary">
                      <i className={option.icon} aria-hidden="true" />
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
                <p>
                  Кризисная ситуация? Звоните <a href="tel:88002000122">8-800-200-01-22</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2>Редактор кода</h2>
            <p>Пробуйте идеи прямо на платформе</p>
          </header>
          <article className={`card ${styles.modal}`}>
            <header className={styles.modalHead}>
              <h3>main.py</h3>
              <div className={styles.editorActions}>
                <button type="button" className="btn btn-secondary">
                  Запустить
                </button>
                <button type="button" className="btn btn-secondary">
                  Проверить
                </button>
              </div>
            </header>
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
              <section className={styles.output}>
                <header className={styles.outputHead}>
                  <span>Вывод</span>
                  <button type="button" className="btn btn-secondary">
                    Очистить
                  </button>
                </header>
                <div className={styles.outputBody}>
                  <div>Привет, мир!</div>
                  <div>Успех!</div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
      <button type="button" className={styles.themeToggle} aria-label="Сменить тему">
        <i className="fas fa-moon" aria-hidden="true" />
      </button>
    </main>
  );
}

export default Home;
