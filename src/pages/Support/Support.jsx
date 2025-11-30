import { useState } from 'react';
import styles from './Support.module.css';

const supportContacts = [
  {
    icon: 'fas fa-phone',
    title: 'Телефон доверия',
    number: '8-800-2000-122',
    description: 'Бесплатная круглосуточная психологическая помощь',
    available: '24/7',
    type: 'phone'
  },
  {
    icon: 'fas fa-comments',
    title: 'Онлайн-чат',
    description: 'Анонимная психологическая поддержка в чате',
    available: 'Круглосуточно',
    type: 'chat'
  },
  {
    icon: 'fas fa-video',
    title: 'Видеоконсультация',
    description: 'Персональная консультация с психологом',
    available: 'По записи',
    type: 'video'
  }
];

const emergencyContacts = [
  {
    name: 'Скорая помощь',
    number: '103',
    description: 'Медицинская помощь в экстренных ситуациях'
  },
  {
    name: 'Единая служба спасения',
    number: '112',
    description: 'Единый номер для всех экстренных служб'
  }
];

const psychologists = [
  {
    name: 'Анна Петрова',
    specialty: 'Кризисный психолог',
    experience: '8 лет',
    rating: '4.9',
    reviews: '127 отзывов',
    avatar: 'https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=AP',
    languages: ['Русский', 'Английский'],
    price: 'Бесплатно'
  },
  {
    name: 'Михаил Иванов',
    specialty: 'Когнитивно-поведенческая терапия',
    experience: '6 лет',
    rating: '4.8',
    reviews: '89 отзывов',
    avatar: 'https://via.placeholder.com/80x80/2196F3/FFFFFF?text=MI',
    languages: ['Русский'],
    price: 'Бесплатно'
  },
  {
    name: 'Елена Сидорова',
    specialty: 'Семейный психолог',
    experience: '10 лет',
    rating: '4.9',
    reviews: '156 отзывов',
    avatar: 'https://via.placeholder.com/80x80/9C27B0/FFFFFF?text=ES',
    languages: ['Русский', 'Французский'],
    price: 'Бесплатно'
  }
];

const resources = [
  {
    icon: 'fas fa-book',
    title: 'Статьи и материалы',
    description: 'Полезные статьи о ментальном здоровье и стрессе'
  },
  {
    icon: 'fas fa-head-side-virus',
    title: 'Техники релаксации',
    description: 'Упражнения для снижения тревожности и стресса'
  },
  {
    icon: 'fas fa-users',
    title: 'Группы поддержки',
    description: 'Онлайн-встречи с людьми, переживающими похожие трудности'
  }
];

function Support() {
  const [activeTab, setActiveTab] = useState('contacts');

  return (
    <main className={styles.page}>
      <section className="section">
        <div className="container">
          <header className={styles.pageHead}>
            <div>
              <h1>Психологическая поддержка</h1>
              <p>Мы здесь, чтобы помочь вам в трудную минуту. Вы не одни.</p>
            </div>
            <dl className={styles.statRow}>
              <div>
                <dt className={styles.statValue}>24/7</dt>
                <dd>Поддержка</dd>
              </div>
              <div>
                <dt className={styles.statValue}>100%</dt>
                <dd>Анонимно</dd>
              </div>
              <div>
                <dt className={styles.statValue}>0₽</dt>
                <dd>Бесплатно</dd>
              </div>
            </dl>
          </header>

          <div className={`card ${styles.alertBanner}`}>
            <i className="fas fa-exclamation-triangle" aria-hidden="true" />
            <div>
              <h3>Важно!</h3>
              <p>Если вы испытываете острые суицидальные мысли или находитесь в опасности, немедленно обратитесь в экстренные службы.</p>
            </div>
          </div>

          <div className={`card ${styles.tabRow}`}>
            {[
              { id: 'contacts', label: 'Контакты' },
              { id: 'psychologists', label: 'Психологи' },
              { id: 'resources', label: 'Ресурсы' },
              { id: 'emergency', label: 'Экстренная помощь' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === 'contacts' && (
        <section className="section">
          <div className="container">
            <div className={styles.cardGrid}>
              {supportContacts.map((contact) => (
                <article key={contact.title} className={`card ${styles.contactCard}`}>
                  <i className={contact.icon} aria-hidden="true" />
                  <h3>{contact.title}</h3>
                  <p>{contact.description}</p>
                  {contact.number && (
                    <a href={`tel:${contact.number}`} className={styles.phoneLink}>
                      {contact.number}
                    </a>
                  )}
                  <div className={styles.availability}>
                    <i className="fas fa-clock" aria-hidden="true" />
                    {contact.available}
                  </div>
                  <button 
                    type="button" 
                    className={`btn ${contact.type === 'phone' ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {contact.type === 'phone' ? 'Позвонить' : contact.type === 'chat' ? 'Начать чат' : 'Записаться'}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'psychologists' && (
        <section className="section">
          <div className="container">
            <div className={styles.cardGrid}>
              {psychologists.map((psychologist) => (
                <article key={psychologist.name} className={`card ${styles.psychologistCard}`}>
                  <img src={psychologist.avatar} alt={psychologist.name} />
                  <div className={styles.psychologistInfo}>
                    <h3>{psychologist.name}</h3>
                    <p className={styles.specialty}>{psychologist.specialty}</p>
                    <div className={styles.rating}>
                      <i className="fas fa-star" aria-hidden="true" />
                      <span>{psychologist.rating} ({psychologist.reviews})</span>
                    </div>
                    <div className={styles.details}>
                      <span>
                        <i className="fas fa-briefcase" aria-hidden="true" />
                        {psychologist.experience}
                      </span>
                      <span>
                        <i className="fas fa-language" aria-hidden="true" />
                        {psychologist.languages.join(', ')}
                      </span>
                    </div>
                    <div className={styles.price}>{psychologist.price}</div>
                    <button type="button" className="btn btn-primary">
                      Записаться на консультацию
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'resources' && (
        <section className="section">
          <div className="container">
            <div className={styles.cardGrid}>
              {resources.map((resource) => (
                <article key={resource.title} className={`card ${styles.resourceCard}`}>
                  <i className={resource.icon} aria-hidden="true" />
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <button type="button" className="btn btn-secondary">
                    Изучить
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'emergency' && (
        <section className="section">
          <div className="container">
            <div className={styles.emergencyGrid}>
              {emergencyContacts.map((contact) => (
                <article key={contact.name} className={`card ${styles.emergencyCard}`}>
                  <i className="fas fa-exclamation-circle" aria-hidden="true" />
                  <h3>{contact.name}</h3>
                  <a href={`tel:${contact.number}`} className={styles.emergencyNumber}>
                    {contact.number}
                  </a>
                  <p>{contact.description}</p>
                  <button type="button" className="btn btn-primary">
                    Позвонить сейчас
                  </button>
                </article>
              ))}
            </div>
            
            <div className={`card ${styles.safetyPlan}`}>
              <h3>План безопасности</h3>
              <ul>
                <li>Сохраните номера экстренных служб в быстром наборе</li>
                <li>Расскажите близкому человеку о своем состоянии</li>
                <li>Обратитесь к психологу при первых признаках стресса</li>
                <li>Помните: обращаться за помощью - это нормально</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className={`card ${styles.supportMessage}`}>
            <i className="fas fa-hands-helping" aria-hidden="true" />
            <div>
              <h2>Вы не одни</h2>
              <p>
                Каждый человек иногда сталкивается с трудностями. Обращение за помощью - 
                это проявление силы и заботы о себе. Наши психологи готовы выслушать 
                и поддержать вас в любой ситуации.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Support;