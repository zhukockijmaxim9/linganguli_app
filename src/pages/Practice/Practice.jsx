import styles from './Practice.module.css'

const practiceStats = [
  { value: '15', label: 'Решено сегодня' },
  { value: '127', label: 'Всего решено' },
  { value: '85%', label: 'Точность' },
]

const filters = [
  {
    label: 'Сложность',
    options: [
      { value: 'all', label: 'Все уровни' },
      { value: 'easy', label: 'Легко' },
      { value: 'medium', label: 'Средне' },
      { value: 'hard', label: 'Сложно' },
    ],
  },
  {
    label: 'Тема',
    options: [
      { value: 'all', label: 'Все темы' },
      { value: 'basics', label: 'Основы' },
      { value: 'data-structures', label: 'Структуры данных' },
      { value: 'algorithms', label: 'Алгоритмы' },
      { value: 'oop', label: 'ООП' },
    ],
  },
  {
    label: 'Статус',
    options: [
      { value: 'all', label: 'Все' },
      { value: 'unsolved', label: 'Не решено' },
      { value: 'solved', label: 'Решено' },
      { value: 'in-progress', label: 'В процессе' },
    ],
  },
]

const dailyTasks = [
  {
    title: 'Калькулятор',
    difficulty: 'Легко',
    status: 'Решено',
    xp: '+10 XP',
    description:
      'Создайте простой калькулятор, который выполняет основные арифметические операции (сложение, вычитание, умножение, деление).',
    hints: [
      '💡 Используйте input() для ввода чисел',
      '💡 Примените условные операторы для выбора операции',
    ],
    tags: ['Переменные', 'Условия', 'Ввод/вывод'],
    stats: ['1 250 решений', '5 мин'],
    actions: ['Посмотреть решение', 'Решить снова'],
  },
  {
    title: 'Проверка четности',
    difficulty: 'Легко',
    status: 'Решено',
    xp: '+10 XP',
    description:
      'Напишите программу, которая проверяет, является ли введенное число четным или нечетным.',
    hints: ['💡 Используйте оператор % для проверки остатка'],
    tags: ['Условия', 'Операторы'],
    stats: ['980 решений', '3 мин'],
    actions: ['Посмотреть решение', 'Решить снова'],
  },
  {
    title: 'Поиск в списке',
    difficulty: 'Средне',
    status: 'Решено',
    xp: '+20 XP',
    description:
      'Создайте функцию, которая ищет элемент в списке и возвращает его индекс. Если элемент не найден, верните -1.',
    hints: [
      '💡 Используйте цикл for с enumerate()',
      '💡 Обработайте случай, когда элемент не найден',
    ],
    tags: ['Списки', 'Функции', 'Циклы'],
    stats: ['750 решений', '10 мин'],
    actions: ['Посмотреть решение', 'Решить снова'],
  },
  {
    title: 'Сумма чисел',
    difficulty: 'Легко',
    status: 'В процессе',
    xp: '+10 XP',
    description:
      'Напишите программу, которая вычисляет сумму всех чисел от 1 до n, где n вводится пользователем.',
    hints: ['💡 Используйте цикл for или while', '💡 Инициализируйте переменную для суммы'],
    tags: ['Циклы', 'Переменные'],
    stats: ['1 100 решений', '5 мин'],
    actions: ['Продолжить', 'Сбросить'],
  },
  {
    title: 'Сортировка пузырьком',
    difficulty: 'Средне',
    status: 'Не решено',
    xp: '+20 XP',
    description: 'Реализуйте алгоритм сортировки пузырьком для массива чисел.',
    hints: ['💡 Используйте вложенные циклы', '💡 Сравнивайте соседние элементы'],
    tags: ['Алгоритмы', 'Сортировка', 'Циклы'],
    stats: ['650 решений', '15 мин'],
    actions: ['Решить', 'Подсказка'],
  },
]

const challenges = [
  {
    title: 'Алгоритм Дейкстры',
    description:
      'Реализуйте алгоритм поиска кратчайшего пути в графе с использованием алгоритма Дейкстры.',
    reward: '500 XP',
    time: '2 часа',
    difficulty: 'Сложно',
    featured: true,
    extra: 'Приз: Премиум доступ на месяц',
  },
  {
    title: 'Машинное обучение',
    description: 'Создайте простую модель линейной регрессии для предсказания цен на недвижимость.',
    reward: '300 XP',
    time: '4 часа',
    difficulty: 'Средне',
  },
  {
    title: 'Веб-скрапинг',
    description: 'Создайте скрипт для сбора данных с веб-сайта и сохранения их в CSV файл.',
    reward: '250 XP',
    time: '3 часа',
    difficulty: 'Средне',
  },
]

const projects = [
  {
    icon: 'fas fa-calculator',
    title: 'Калькулятор с GUI',
    description: 'Создайте графический интерфейс для калькулятора с использованием tkinter.',
    difficulty: 'Легко',
    duration: '2-3 дня',
    stack: 'tkinter, Python',
    skills: ['GUI', 'tkinter', 'ООП'],
  },
  {
    icon: 'fas fa-database',
    title: 'Система управления базой данных',
    description: 'Создайте CRUD приложение для управления базой данных сотрудников.',
    difficulty: 'Средне',
    duration: '1-2 недели',
    stack: 'SQLite, Flask',
    skills: ['Базы данных', 'Flask', 'SQL'],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Анализатор данных',
    description:
      'Создайте инструмент для анализа и визуализации данных с помощью pandas и matplotlib.',
    difficulty: 'Сложно',
    duration: '2-3 недели',
    stack: 'pandas, matplotlib',
    skills: ['Анализ данных', 'Визуализация', 'pandas'],
  },
]

const algorithmCategories = [
  { icon: 'fas fa-sort', title: 'Сортировка', info: ['12 задач', '3-5 часов'] },
  { icon: 'fas fa-search', title: 'Поиск', info: ['8 задач', '2-3 часа'] },
  { icon: 'fas fa-project-diagram', title: 'Графы', info: ['15 задач', '5-7 часов'] },
  { icon: 'fas fa-puzzle-piece', title: 'Динамическое программирование', info: ['10 задач', '4-6 часов'] },
]

function Practice() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHead}>
          <div>
            <h1>Практические задания</h1>
            <p>Решайте задачи разной сложности и оттачивайте навыки программирования.</p>
          </div>
          <div className={styles.statRow}>
            {practiceStats.map((stat) => (
              <div key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </header>

        <section className={styles.filterBar}>
          <div className={styles.tabs}>
            {['Ежедневные', 'Вызовы', 'Проекты', 'Алгоритмы'].map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`${styles.tabBtn} ${index === 0 ? styles.active : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className={styles.filters}>
            {filters.map((filter) => (
              <label key={filter.label} className={styles.filterField}>
                <span>{filter.label}</span>
                <select defaultValue={filter.options[0].value}>
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Ежедневные задания</h2>
            <div className={styles.dailyGoal}>
              <div className={styles.goalChart} aria-hidden="true">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                    strokeDashoffset="25"
                  />
                </svg>
                <div className={styles.goalText}>
                  <span>3</span>
                  <small>из 5</small>
                </div>
              </div>
              <div>
                <h3>Ежедневная цель</h3>
                <p>Решите 5 задач сегодня для поддержания streak.</p>
                <span>
                  <i className="fas fa-fire" aria-hidden="true" />
                  7 дней подряд
                </span>
              </div>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {dailyTasks.map((task) => (
              <article key={task.title} className={styles.taskCard}>
                <div className={styles.taskHead}>
                  <span>{task.difficulty}</span>
                  <span>{task.status}</span>
                  <span>{task.xp}</span>
                </div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className={styles.hints}>
                  {task.hints.map((hint) => (
                    <span key={hint}>{hint}</span>
                  ))}
                </div>
                <div className={styles.tags}>
                  {task.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.taskFooter}>
                  <div>
                    {task.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>
                  <div className={styles.taskActions}>
                    {task.actions.map((action) => (
                      <button key={action} type="button">
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Вызовы недели</h2>
            <div className={styles.challengeMeta}>
              <span>
                <i className="fas fa-clock" aria-hidden="true" />
                Осталось: 3 дня 12 часов
              </span>
              <span>
                <i className="fas fa-users" aria-hidden="true" />
                2 450 участников
              </span>
            </div>
          </div>
          <div className={styles.challengeGrid}>
            {challenges.map((challenge) => (
              <article
                key={challenge.title}
                className={`${styles.challengeCard} ${
                  challenge.featured ? styles.featured : ''
                }`}
              >
                {challenge.featured && <span className={styles.badge}>Текущий вызов</span>}
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
                <div className={styles.metaRow}>
                  <span>
                    <i className="fas fa-trophy" aria-hidden="true" />
                    {challenge.reward}
                  </span>
                  <span>
                    <i className="fas fa-clock" aria-hidden="true" />
                    {challenge.time}
                  </span>
                  <span>
                    <i className="fas fa-signal" aria-hidden="true" />
                    {challenge.difficulty}
                  </span>
                </div>
                {challenge.extra && <p className={styles.extra}>{challenge.extra}</p>}
                <button type="button" className={styles.primaryBtn}>
                  Принять вызов
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Практические проекты</h2>
            <p>Создавайте реальные проекты и добавляйте их в портфолио.</p>
          </div>
          <div className={styles.cardGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <i className={project.icon} aria-hidden="true" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectMeta}>
                  <span className={styles.badge}>{project.difficulty}</span>
                  <span>{project.duration}</span>
                  <span>{project.stack}</span>
                </div>
                <div className={styles.tags}>
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <button type="button" className={styles.secondaryBtn}>
                  Начать проект
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Алгоритмы и структуры данных</h2>
            <p>Изучайте классические алгоритмы и улучшайте навыки решения задач.</p>
          </div>
          <div className={styles.cardGrid}>
            {algorithmCategories.map((category) => (
              <article key={category.title} className={styles.categoryCard}>
                <i className={category.icon} aria-hidden="true" />
                <h3>{category.title}</h3>
                <div>
                  {category.info.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <button type="button" className={styles.primaryBtn}>
                  Начать изучение
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Редактор кода</h2>
            <p>Решайте задачи прямо в браузере.</p>
          </div>
          <div className={styles.editorCard}>
            <header className={styles.editorHead}>
              <h3>Редактор кода</h3>
              <div className={styles.editorActions}>
                <button type="button">Запустить</button>
                <button type="button">Проверить</button>
                <button type="button">Отправить</button>
              </div>
            </header>
            <div className={styles.editorBody}>
              <div className={styles.editorPane}>
                <div className={styles.editorToolbar}>
                  <select defaultValue="3.10">
                    <option value="3.9">Python 3.9</option>
                    <option value="3.10">Python 3.10</option>
                    <option value="3.11">Python 3.11</option>
                  </select>
                </div>
                <textarea
                  defaultValue={`def solve():
    # Ваш код здесь
    pass

if __name__ == "__main__":
    result = solve()
    print(result)`}
                />
              </div>
              <div className={styles.outputPane}>
                <div className={styles.outputHead}>
                  <span>Вывод</span>
                  <button type="button">Очистить</button>
                </div>
                <div className={styles.outputBody}>
                  <div>Готов к выполнению...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Practice
