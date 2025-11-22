import styles from './Profile.module.css'

const profileStats = [
  { value: '7', label: 'Дней streak' },
  { value: '1 250', label: 'XP' },
  { value: '127', label: 'Решено задач' },
  { value: '5', label: 'Курсов' },
]

const learningProgress = [
  { title: 'Основы Python', progress: 75 },
  { title: 'Структуры данных', progress: 45 },
  { title: 'ООП и модули', progress: 20 },
]

const activityFeed = [
  { icon: 'fas fa-check-circle', title: 'Решена задача "Калькулятор"', meta: '2 часа назад • +10 XP' },
  { icon: 'fas fa-book', title: 'Завершен урок "Функции"', meta: '5 часов назад • +15 XP' },
  { icon: 'fas fa-trophy', title: 'Получено достижение "Первые шаги"', meta: '1 день назад • +50 XP' },
  { icon: 'fas fa-fire', title: 'Поддержан streak 7 дней', meta: '2 дня назад • +25 XP' },
]

const weeklyStats = [
  { icon: 'fas fa-tasks', value: '23', label: 'Задач решено' },
  { icon: 'fas fa-clock', value: '8.5', label: 'Часов изучения' },
  { icon: 'fas fa-star', value: '340', label: 'XP заработано' },
  { icon: 'fas fa-fire', value: '7', label: 'Дней streak' },
]

const goals = [
  { title: 'Изучить основы Python', text: 'Завершить курс до конца месяца', progress: 75 },
  { title: 'Решить 100 задач', text: 'Достичь отметки в 100 решенных задач', progress: 127 },
]

const achievements = [
  { icon: 'fas fa-fire', title: 'Первые шаги', text: 'Завершите первый урок', date: '15 января 2024', earned: true },
  { icon: 'fas fa-code', title: 'Программист', text: 'Напишите 10 программ', date: '20 января 2024', earned: true },
  { icon: 'fas fa-fire', title: 'Streak Master', text: 'Поддерживайте streak 7 дней', date: '22 января 2024', earned: true },
  { icon: 'fas fa-trophy', title: 'Мастер Python', text: 'Завершите все курсы', progress: 30, earned: false },
]

const enrolledCourses = [
  {
    title: 'Основы Python',
    description: 'Изучите базовые концепции программирования и синтаксис Python',
    progress: 75,
    lessons: '12/15 уроков',
    hours: '2.5/3 часа',
    reward: '375/500 XP',
  },
  {
    title: 'Структуры данных',
    description: 'Списки, словари, кортежи и работа с данными',
    progress: 45,
    lessons: '9/20 уроков',
    hours: '2.5/5 часов',
    reward: '225/500 XP',
  },
]

const timeline = [
  {
    date: 'Сегодня',
    items: [
      { icon: 'fas fa-check-circle', title: 'Решена задача "Калькулятор"', meta: '2 часа назад • +10 XP' },
      { icon: 'fas fa-book', title: 'Завершен урок "Функции"', meta: '5 часов назад • +15 XP' },
    ],
  },
  {
    date: 'Вчера',
    items: [{ icon: 'fas fa-trophy', title: 'Получено достижение "Первые шаги"', meta: '1 день назад • +50 XP' }],
  },
]

function Profile() {
  return (
    <div className={styles.page}>
      <section className={styles.profileHero}>
        <div className={styles.container}>
          <div className={styles.profileRow}>
            <div className={styles.avatarBlock}>
              <img
                src="https://via.placeholder.com/120x120/4CAF50/FFFFFF?text=U"
                alt="Аватар пользователя"
              />
              <button type="button" className={styles.iconBtn} aria-label="Изменить фото">
                <i className="fas fa-camera" aria-hidden="true" />
              </button>
            </div>
            <div className={styles.profileInfo}>
              <h1>Алексей Программистов</h1>
              <p>Python Developer</p>
              <div className={styles.statRow}>
                {profileStats.map((stat) => (
                  <div key={stat.label}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.levelBar}>
                <div>
                  <span>Уровень 12</span>
                  <small>650 / 1000 XP</small>
                </div>
                <div className={styles.progress}>
                  <div className={styles.progressFill} style={{ width: '65%' }} />
                </div>
              </div>
            </div>
            <div className={styles.heroActions}>
              <button type="button" className={styles.primaryBtn}>
                <i className="fas fa-edit" aria-hidden="true" />
                Редактировать
              </button>
              <button type="button" className={styles.secondaryBtn}>
                <i className="fas fa-share" aria-hidden="true" />
                Поделиться
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.tabRow}>
            {['Обзор', 'Достижения', 'Курсы', 'Активность', 'Настройки'].map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`${styles.tabBtn} ${index === 0 ? styles.active : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHead}>
                <h3>Прогресс обучения</h3>
                <button type="button" className={styles.linkBtn}>
                  Подробнее
                </button>
              </header>
              <div className={styles.cardBody}>
                {learningProgress.map((item) => (
                  <div key={item.title} className={styles.progressItem}>
                    <div>
                      <span>{item.title}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.progressFill} style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHead}>
                <h3>Последняя активность</h3>
              </header>
              <div className={styles.cardBody}>
                {activityFeed.map((item) => (
                  <div key={item.title} className={styles.activityItem}>
                    <i className={item.icon} aria-hidden="true" />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHead}>
                <h3>Статистика за неделю</h3>
              </header>
              <div className={styles.cardBody}>
                <div className={styles.statGrid}>
                  {weeklyStats.map((stat) => (
                    <div key={stat.label} className={styles.statCard}>
                      <i className={stat.icon} aria-hidden="true" />
                      <div>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHead}>
                <h3>Цели обучения</h3>
                <button type="button" className={styles.linkBtn}>
                  Изменить
                </button>
              </header>
              <div className={styles.cardBody}>
                {goals.map((goal) => (
                  <div key={goal.title} className={styles.goalItem}>
                    <div>
                      <h4>{goal.title}</h4>
                      <p>{goal.text}</p>
                    </div>
                    <div className={styles.goalProgress}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${goal.progress % 100}%` }}
                        />
                      </div>
                      <span>{goal.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className={styles.card}>
            <header className={styles.cardHead}>
              <h3>Достижения</h3>
              <span>Получено: 8 из 25</span>
            </header>
            <div className={styles.cardBody}>
              <div className={styles.progress}>
                <div className={styles.progressFill} style={{ width: '32%' }} />
              </div>
              <div className={styles.achievementGrid}>
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className={`${styles.achievementCard} ${
                      achievement.earned ? styles.earned : ''
                    }`}
                  >
                    <i className={achievement.icon} aria-hidden="true" />
                    <h4>{achievement.title}</h4>
                    <p>{achievement.text}</p>
                    {achievement.date && <span>{achievement.date}</span>}
                    {typeof achievement.progress === 'number' && (
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <header className={styles.cardHead}>
              <h3>Мои курсы</h3>
            </header>
            <div className={styles.cardBody}>
              <div className={styles.courseGrid}>
                {enrolledCourses.map((course) => (
                  <div key={course.title} className={styles.courseCard}>
                    <div className={styles.courseHead}>
                      <h4>{course.title}</h4>
                      <span>{course.progress}%</span>
                    </div>
                    <p>{course.description}</p>
                    <div className={styles.progress}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
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
                    <div className={styles.courseActions}>
                      <button type="button" className={styles.primaryBtn}>
                        Продолжить
                      </button>
                      <button type="button" className={styles.secondaryBtn}>
                        Подробнее
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <header className={styles.cardHead}>
              <h3>История активности</h3>
              <div className={styles.filters}>
                <select defaultValue="week">
                  <option value="week">За неделю</option>
                  <option value="month">За месяц</option>
                  <option value="year">За год</option>
                </select>
                <select defaultValue="all">
                  <option value="all">Все действия</option>
                  <option value="lessons">Уроки</option>
                  <option value="tasks">Задачи</option>
                  <option value="achievements">Достижения</option>
                </select>
              </div>
            </header>
            <div className={styles.cardBody}>
              {timeline.map((entry) => (
                <div key={entry.date} className={styles.timelineBlock}>
                  <strong>{entry.date}</strong>
                  {entry.items.map((item) => (
                    <div key={item.title} className={styles.timelineItem}>
                      <i className={item.icon} aria-hidden="true" />
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <header className={styles.cardHead}>
              <h3>Настройки профиля</h3>
            </header>
            <div className={styles.cardBody}>
              <form className={styles.formGrid}>
                <label className={styles.formField}>
                  <span>Полное имя</span>
                  <input type="text" defaultValue="Алексей Программистов" />
                </label>
                <label className={styles.formField}>
                  <span>Email</span>
                  <input type="email" defaultValue="alexey@example.com" />
                </label>
                <label className={styles.formField}>
                  <span>О себе</span>
                  <textarea
                    rows={3}
                    defaultValue="Изучаю Python и мечтаю стать разработчиком"
                  />
                </label>
                <label className={styles.formField}>
                  <span>Ежедневная цель (задач)</span>
                  <input type="number" min="1" max="20" defaultValue="5" />
                </label>
                <label className={styles.formField}>
                  <span>Предпочитаемая сложность</span>
                  <select defaultValue="medium">
                    <option value="easy">Легко</option>
                    <option value="medium">Средне</option>
                    <option value="hard">Сложно</option>
                  </select>
                </label>
                <label className={styles.checkbox}>
                  <input type="checkbox" defaultChecked />
                  <span>Уведомления о новых задачах</span>
                </label>
                <label className={styles.checkbox}>
                  <input type="checkbox" defaultChecked />
                  <span>Публичный профиль</span>
                </label>
                <label className={styles.checkbox}>
                  <input type="checkbox" />
                  <span>Показывать прогресс друзьям</span>
                </label>
                <div className={styles.formActions}>
                  <button type="button" className={styles.primaryBtn}>
                    Сохранить изменения
                  </button>
                  <button type="button" className={styles.secondaryBtn}>
                    Сбросить
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Profile
