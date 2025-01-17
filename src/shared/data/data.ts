import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  InboxIcon,
} from '@heroicons/react/16/solid';
import { Data } from '@shared/types';

export const mainResponseRu: Data = {
  info: {
    imageUrl: '/photo.jpg',
    name: 'Батрак Артем Евгеньевич',
    profession: 'Frontend разработчик',
    education:
      'Факультет компьютерных технологий и прикладной математики Кафедра информационных технологий Специальность «Прикладная математика и информатика»',
    themeGraduationPaper:
      'Краудфандинговая платформа с поддержкой нескольких блокчейн сетей',
    teacher: 'Синица Сергей Геннадьевич',
  },
  aboutMe: [
    {
      title: 'Личная информация',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Батрак Артем Евгеньевич',
        },
        {
          label: 'Дата рождения',
          icon: CalendarIcon,
          text: '02.10.2001',
        },
        {
          label: 'Место проживания',
          icon: MapPinIcon,
          text: 'г. Краснодар',
        },
        {
          label: 'Телефон',
          icon: DevicePhoneMobileIcon,
          text: '8-999-999-99-99',
        },
        {
          label: 'Почта',
          icon: InboxIcon,
          text: 'example.com',
        },
      ],
    },
    {
      title: 'Образование',
      items: [
        {
          label: 'Магистратура',
          icon: AcademicCapIcon,
          text: 'КубГУ, Прикладная математика и информатика / 2023-2025',
        },
        {
          label: 'Бакалавриат',
          icon: AcademicCapIcon,
          text: 'КубГУ, Прикладная математика и информатика / 2019-2023',
        },
        {
          label: 'Среднее образовательное ',
          icon: AcademicCapIcon,
          text: 'МБОУ СОШ №37 / 2008-2019',
        },
      ],
    },
    {
      title: 'Опыт работы',
      items: [
        {
          label: 'Sportmaster Lab',
          icon: BriefcaseIcon,
          text: 'Программист (2022 - настоящее время)',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Технологический стек',
          text: 'Oracle SQL, Vue.js, React.js, Pinia, Vuex, Node.js, Nest.js',
        },
        {
          label: 'Контроль версий',
          text: 'Git, GitLab, GitHub',
        },
      ],
    },
  ],
};
export const mainResponseEng: Data = {
  info: {
    imageUrl: '/photo.jpg',
    name: 'Batrak Artem Evgenievich',
    profession: 'Frontend developer',
    education:
      "Faculty of Computer Technologies and Applied Mathematics, Department of Information Technologies, Major in 'Applied Mathematics and Computer Science'",
    themeGraduationPaper:
      'Crowdfunding platform with support for multiple blockchain networks',
    teacher: 'Sinitsa Sergey Gennadievich',
  },
  aboutMe: [
    {
      title: 'Personal Information',
      items: [
        {
          label: 'Full Name',
          icon: UserIcon,
          text: 'Batrak Artem Evgenievich',
        },
        {
          label: 'Date of Birth',
          icon: CalendarIcon,
          text: '02.10.2001',
        },
        {
          label: 'Place of Residence',
          icon: MapPinIcon,
          text: 'Krasnodar',
        },
        {
          label: 'Phone',
          icon: DevicePhoneMobileIcon,
          text: '8-999-999-99-99',
        },
        {
          label: 'Email',
          icon: InboxIcon,
          text: 'example.com',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          label: "Master's Degree",
          icon: AcademicCapIcon,
          text: 'Kuban State University, Applied Mathematics and Computer Science / 2023-2025',
        },
        {
          label: "Bachelor's Degree",
          icon: AcademicCapIcon,
          text: 'Kuban State University, Applied Mathematics and Computer Science / 2019-2023',
        },
        {
          label: 'Secondary Education',
          icon: AcademicCapIcon,
          text: 'Secondary School No. 37 / 2008-2019',
        },
      ],
    },
    {
      title: 'Work Experience',
      items: [
        {
          label: 'Sportmaster Lab',
          icon: BriefcaseIcon,
          text: 'Programmer',
        },
      ],
    },
    {
      title: 'Skills and Specialization',
      items: [
        {
          label: 'Tech stack',
          text: 'Oracle SQL, Vue.js, React.js, Pinia, Vuex, Node.js, Nest.js',
        },
        {
          label: 'Version control',
          text: 'Git, GitLab, GitHub',
        },
      ],
    },
  ],
};

export const referatResponseEng = [
  {
    title: 'Introduction',
    body: 'Crowdfunding is a way of collective financing of projects in which funds are collected from a large number of people through special Internet platforms. This method has become popular thanks to the development of digital technologies and social networks, providing the author’s opportunity to directly contact potential investors and customers. ',
  },
  {
    title: 'Principles of operation of the distribution system of goods',
    body: `<p> Blockchain -based crowdfunding combines the principles of collective financing and distributed registry technology. 
          This approach ensures transparency, safety and decentralization of the funding process. This is how it works: </p>
    
    <br/> <strong> 1. Creating a project and a smart contract </strong> <br/>
 <p> The project initiator is developing a smart contract that automatically controls the fundraising.
 The smart contract contains conditions: collection goals, terms, minimum and maximum contribution.
 The project is published on the blockchain platform (for example, Ethereum, Binance Smart Chain, Solana). </p>

 <p> <br/> <strong> 2. Attraction of investors </strong> <br/>
 Investors translate cryptocurrency (ETH, BNB, SOL or Steabelcoins) to the address of the smart contract.
 In return, they can receive project tokens (for example, Utility Tokens or NFT), which confirm their participation. </p>

 <p> <br/> <strong> 3. Storage and protection of funds </strong> <br/>
 Means are stored on a smart contract and are not directly received to the organizer.
 Money is unlocked only when fulfilling the terms of the contract (for example, achieving the goal of the collection).
 If the goal is not achieved on time, money is automatically returned to depositors. </p>

 <p> <br/> <strong> 4. Decentralization and transparency </strong> <br/>
 All transactions and smart contract conditions are open and recorded in the blockchain, which excludes fraud.
 Anyone can check the movement of funds and the fulfillment of conditions. </p>

 <p> <br/> <strong> 5. Distribution of tokens or profit </strong> <br/>
 After collecting funds, the project is implemented, and investors can receive a profit or access to the product.
 If successful, tokens can grow in price, providing depositors with benefits. </p>
    `,
  },
  {
    title: 'Advantages',
    body: `
    <strong> 1. Transparency and trust </strong>
 <p> All transactions are available for checks in the blockchain. </p>
 <p> The conditions of the smart contract are open and unchanged. </p> <br/>

 <strong> 2. Automation of processes </strong>
 <p> smart contracts automatically control the means. </p>
 <p> The intermediaries are excluded, the costs are reduced. </p> <br/>

 <strong> 3. Decentralization </strong>
 <p> The project does not depend on banks and financial structures. </p>
 <p> Financing is available around the world. </p> <br/>

 <strong> 4. Safety </strong>
 <p> Means are protected by smart contracts. </p>
 <p> The risk of fraud is minimized. </p> <br/>

 <strong> 5. Global access </strong>
 <p> Participation is possible from anywhere in the world. </p>
 <p> The expansion of the audience and an increase in the chances of success. </p> <br/>

 <strong> 6. Attraction of investors through tokenization </strong>
 <p> The release of tokens stimulates depositors. </p>
 <p> Tokens can grow in price and benefit. </p> <br/>

 <strong> 7. Reducing barriers for startups </strong>
 <p> Complex procedures are not required to start. </p>
 <p> A light start through blockchain platforms. </p> <br/>

 <strong> 8. Community and involvement </strong>
 <p> Voting and participation in the project through. </p>
 <p> The formation of a loyal community. </p> <br/>
    
    `,
  },
  {
    title: 'Conclusion',
    body: '<p> Crowdfunding using blockchain technology opens new horizons to finance projects, ensuring transparency, safety and trust between participants. Smart contracts automate the implementation of the terms of agreements, minimizing the risks of fraud and reducing operating costs. Decentralization simplifies access to investments for a wide range of people around the world, contributing to the development of innovative ideas and startups. Despite the existing legal and technical challenges, the integration of blockchain into crowdfunding platforms has significant potential for the transformation of the financial market, making the process of attracting investments more efficient and safe </p> ',
  },
];

export const referatResponseRu = [
  {
    title: 'Введение',
    body: 'Краудфандинг представляет собой способ коллективного финансирования проектов, при котором средства собираются от большого числа людей через специальные интернет-платформы. Этот метод стал популярным благодаря развитию цифровых технологий и социальных сетей, предоставив возможность авторам проектов напрямую обращаться к потенциальным инвесторам и покупателям.',
  },
  {
    title: 'Принципы работы системы распределения товаров',
    body: `<p>Краудфандинг на основе блокчейна сочетает в себе принципы коллективного финансирования и технологии распределённого реестра. 
    Такой подход обеспечивает прозрачность, безопасность и децентрализацию процесса сбора средств. Вот как это работает:</p>
    
    <br/><strong>1. Создание проекта и смарт-контракта</strong><br/>
    <p>Инициатор проекта разрабатывает смарт-контракт, который автоматически управляет сбором средств.
    Смарт-контракт содержит условия: цели сбора, сроки, минимальный и максимальный вклад.
    Проект публикуется на блокчейн-платформе (например, Ethereum, Binance Smart Chain, Solana).</p>

    <p><br/><strong>2. Привлечение инвесторов</strong><br/>
    Инвесторы переводят криптовалюту (ETH, BNB, SOL или стейблкоины) на адрес смарт-контракта.
    Взамен они могут получать токены проекта (например, utility-токены или NFT), которые подтверждают их участие.</p>

    <p><br/><strong>3. Хранение и защита средств</strong><br/>
    Средства хранятся на смарт-контракте и не поступают напрямую организатору.
    Деньги разблокируются только при выполнении условий контракта (например, достижение цели сбора).
    Если цель не достигнута в срок, деньги автоматически возвращаются вкладчикам.</p>

    <p><br/><strong>4. Децентрализация и прозрачность</strong><br/>
    Все транзакции и условия смарт-контракта открыты и записаны в блокчейне, что исключает мошенничество.
    Любой желающий может проверить движение средств и выполнение условий.</p>

    <p><br/><strong>5. Распределение токенов или прибыли</strong><br/>
    После сбора средств проект реализуется, а инвесторы могут получать прибыль или доступ к продукту.
    В случае успеха токены могут расти в цене, обеспечивая вкладчикам выгоду.</p>
    `,
  },
  {
    title: 'Преимущества',
    body: `
    <strong>1. Прозрачность и доверие</strong>
    <p>Все транзакции доступны для проверки в блокчейне.</p>
    <p>Условия смарт-контракта открыты и неизменяемы.</p><br/>
    
    <strong>2. Автоматизация процессов</strong>
    <p>Смарт-контракты автоматически управляют средствами.</p>
    <p>Исключены посредники, снижаются затраты.</p><br/>

    <strong>3. Децентрализация</strong>
    <p>Проект не зависит от банков и финансовых структур.</p>
    <p>Финансирование доступно по всему миру.</p><br/>

    <strong>4. Безопасность</strong>
    <p>Средства защищены смарт-контрактами.</p>
    <p>Минимизирован риск мошенничества.</p><br/>
    
    <strong>5. Глобальный доступ</strong>
    <p>Участие возможно из любой точки мира.</p>
    <p>Расширение аудитории и повышение шансов на успех.</p><br/>
    
    <strong>6. Привлечение инвесторов через токенизацию</strong>
    <p>Выпуск токенов стимулирует вкладчиков.</p>
    <p>Токены могут расти в цене и приносить выгоду.</p><br/>
    
    <strong>7. Снижение барьеров для стартапов</strong>
    <p>Не требуются сложные процедуры для запуска.</p>
    <p>Лёгкий старт через блокчейн-платформы.</p><br/>

    <strong>8. Сообщество и вовлечённость</strong>
    <p>Голосование и участие в проекте через.</p>
    <p>Формирование лояльного сообщества.</p><br/>
    
    `,
  },
  {
    title: 'Заключение',
    body: '<p>Краудфандинг с использованием технологии блокчейн открывает новые горизонты для финансирования проектов, обеспечивая прозрачность, безопасность и доверие между участниками. Смарт-контракты автоматизируют выполнение условий соглашений, минимизируя риски мошенничества и снижая операционные затраты. Децентрализация упрощает доступ к инвестициям для широкого круга людей по всему миру, способствуя развитию инновационных идей и стартапов. Несмотря на существующие правовые и технические вызовы, интеграция блокчейна в краудфандинговые платформы имеет значительный потенциал для трансформации финансового рынка, делая процесс привлечения инвестиций более эффективным и безопасным</p>',
  },
];

export const biographyResponse = {
  articles: [
    {
      title: 'Личностное становление',
      body: 'В процессе личностного становления я научился понимать свои сильные и слабые стороны, что стало основой для дальнейшего развития. Опыт общения с различными людьми, включая друзей, коллег и наставников, помог мне развить навыки эмпатии и активного слушания. Я стремлюсь к самосовершенствованию через чтение, участие в тренингах и открытие для себя новых горизонтов.',
    },
    {
      title: 'Профессиональное становление',
      body: 'Мое профессиональное становление началось с получения степени бакалавра в области прикладной математики и информатики, что дало мне необходимые теоретические знания.',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: 'В ближайшие годы я планирую углубить свои знания в области веб разработки и развить навыки работы с новыми инструментами и технологиями. Моя долгосрочная цель — занять руководящую позицию в области разработки, где смогу не только применять свои знания, но и вдохновлять других. Я вижу свою карьеру как постоянное движение к новым горизонтам, где я смогу сочетать профессиональные достижения с личными интересами, помогая людям и организациям достигать их целей.',
    },
  ],
};

export const reportSearchResponse = [
  {
    id: 1,
    numberPhrase: 1,
    language: 'ru',
    phrase:
      'Разработка краудфандинговой платформы с поддержкой нескольких блокчейн сетей',
    search: 'Google',
    countDocuments: '38 100',
    link: 'https://www.google.ru/search?q=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B+%D1%81+%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%BE%D0%B9+%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+%D1%81%D0%B5%D1%82%D0%B5%D0%B9&newwindow=1&sca_esv=3c482c60c5a06c42&hl=ru&source=hp&ei=C_woZ6WiCImuwPAPhuzHmQ4&iflsig=AL9hbdgAAAAAZykKG-_jj-EOkKVH_6nH8pE0xQr_6ydQ&ved=0ahUKEwjl04P_kcOJAxUJFxAIHQb2MeMQ4dUDCA0&uact=5&oq=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B+%D1%81+%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%BE%D0%B9+%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+%D1%81%D0%B5%D1%82%D0%B5%D0%B9&gs_lp=Egdnd3Mtd2l6IpEB0KDQsNC30YDQsNCx0L7RgtC60LAg0LrRgNCw0YPQtNGE0LDQvdC00LjQvdCz0L7QstC-0Lkg0L_Qu9Cw0YLRhNC-0YDQvNGLINGBINC_0L7QtNC00LXRgNC20LrQvtC5INC90LXRgdC60L7Qu9GM0LrQuNGFINCx0LvQvtC60YfQtdC50L0g0YHQtdGC0LXQuTIaEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigMyGhAAGIAEGLQCGNQDGOUCGLcDGIoFGOoCGIoDMhoQABiABBi0AhjUAxjlAhi3AxiKBRjqAhiKAzIaEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigMyGhAAGIAEGLQCGNQDGOUCGLcDGIoFGOoCGIoDMhoQABiABBi0AhjUAxjlAhi3AxiKBRjqAhiKAzIaEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigMyGhAAGIAEGLQCGNQDGOUCGLcDGIoFGOoCGIoDMhoQABiABBi0AhjUAxjlAhi3AxiKBRjqAhiKAzIaEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigNI3QlQnQVYnQVwAXgAkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEBmAIBoAIIqAIKmAMIkgcBMaAHAA&sclient=gws-wiz',
  },
  {
    id: 2,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '9000',
    link: 'https://yandex.ru/search/?text=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B+%D1%81+%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%BE%D0%B9+%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+%D1%81%D0%B5%D1%82%D0%B5%D0%B9&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 3,
    search: 'Bing',
    language: 'ru',
    countDocuments: '2400',
    link: 'https://www.bing.com/search?q=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B+%D1%81+%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%BE%D0%B9+%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+%D1%81%D0%B5%D1%82%D0%B5%D0%B9&form=QBLH&sp=-1&lq=0&pq=%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B+%D1%81+%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%BE%D0%B9+%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+%D1%81%D0%B5%D1%82%D0%B5%D0%B9&sc=0-76&qs=n&sk=&cvid=CCA4632A11CE4014BDE48B56F248AC8D&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 4,
    numberPhrase: 2,
    language: 'ru',
    phrase: 'Синица Сергей Геннадьевич',
    search: 'Google',
    countDocuments: '19 400',
    link: 'https://www.google.ru/search?q=%D0%A1%D0%B8%D0%BD%D0%B8%D1%86%D0%B0+%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9+%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&newwindow=1&sca_esv=3c482c60c5a06c42&hl=ru&ei=DfwoZ5q9Kb3JwPAPv7v2-QY&ved=0ahUKEwja956AksOJAxW9JBAIHb-dPW8Q4dUDCA8&uact=5&oq=%D0%A1%D0%B8%D0%BD%D0%B8%D1%86%D0%B0+%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9+%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&gs_lp=Egxnd3Mtd2l6LXNlcnAiMNCh0LjQvdC40YbQsCDQodC10YDQs9C10Lkg0JPQtdC90L3QsNC00YzQtdCy0LjRhzIFEAAYgAQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESIAEUABYAHAAeACQAQCYAV6gAV6qAQExuAEDyAEA-AEC-AEBmAIBoAJkmAMAkgcDMC4xoAehBA&sclient=gws-wiz-serp',
  },
  {
    id: 5,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '10 000',
    link: 'https://yandex.ru/search/?text=%D0%A1%D0%B8%D0%BD%D0%B8%D1%86%D0%B0+%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9+%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 6,
    search: 'Bing',
    language: 'ru',
    countDocuments: '105 000',
    link: 'https://www.bing.com/search?q=%D0%A1%D0%B8%D0%BD%D0%B8%D1%86%D0%B0+%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9+%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&qs=n&form=QBRE&sp=-1&lq=0&pq=%D1%81%D0%B8%D0%BD%D0%B8%D1%86%D0%B0+%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9+%D0%B3%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&sc=9-25&sk=&cvid=B48706E00F854577BA29719BB38DD3B5&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 7,
    numberPhrase: 3,
    language: 'ru',
    phrase: 'краудфандинговая платформа с использованием блокчейна',
    search: 'Google',
    countDocuments: '66 000',
    link: 'https://www.google.ru/search?q=%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0+%D1%81+%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD%D0%B0&newwindow=1&sca_esv=3c482c60c5a06c42&hl=ru&ei=HPwoZ6asNe2FwPAPt47KiQs&ved=0ahUKEwimqr6HksOJAxXtAhAIHTeHMrEQ4dUDCA8&uact=5&oq=%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0+%D1%81+%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD%D0%B0&gs_lp=Egxnd3Mtd2l6LXNlcnAiZtC60YDQsNGD0LTRhNCw0L3QtNC40L3Qs9C-0LLQsNGPINC_0LvQsNGC0YTQvtGA0LzQsCDRgSDQuNGB0L_QvtC70YzQt9C-0LLQsNC90LjQtdC8INCx0LvQvtC60YfQtdC50L3QsDIIEAAYgAQYsAMyCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIESNAJUIIEWIIEcAF4AJABAJgBAKABAKoBALgBA8gBAPgBAvgBAZgCAaACBpgDAIgGAZAGBZIHATGgBwA&sclient=gws-wiz-serp',
  },
  {
    id: 8,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '12 000',
    link: 'https://yandex.ru/search/?text=%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0+%D1%81+%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD%D0%B0&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 9,
    search: 'Bing',
    language: 'ru',
    countDocuments: '185 000',
    link: 'https://www.bing.com/search?q=%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0+%D1%81+%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD%D0%B0&qs=n&form=QBRE&sp=-1&lq=0&pq=%D0%BA%D1%80%D0%B0%D1%83%D0%B4%D1%84%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0+%D1%81+%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC+%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD%D0%B0&sc=0-53&sk=&cvid=52E305BA287C44059F327A363B6A0E5A&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 10,
    numberPhrase: 4,
    language: 'ru',
    phrase: 'блокчейн ethereum',
    search: 'Google',
    countDocuments: '1 510 000',
    link: 'https://www.google.com/search?q=%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+ethereum',
  },
  {
    id: 11,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '10 000',
    link: 'https://yandex.ru/search/?text=%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+ethereum&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 12,
    search: 'Bing',
    language: 'ru',
    countDocuments: '281 000',
    link: 'https://www.bing.com/search?q=%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+ethereum&qs=n&form=QBRE&sp=-1&lq=0&pq=%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD+ethereum&sc=8-17&sk=&cvid=9FEE4495B3A44140978DB8EC7BBC8F2D&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 13,
    numberPhrase: 5,
    language: 'ru',
    phrase: 'разработка веб приложения на vue',
    search: 'Google',
    countDocuments: '843 000',
    link: 'https://www.google.com/search?q=%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+%D0%BD%D0%B0+vue',
  },
  {
    id: 14,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '15 000',
    link: 'https://yandex.ru/search/?text=%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+%D0%BD%D0%B0+vue&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 15,
    search: 'Bing',
    language: 'ru',
    countDocuments: '629 000',
    link: 'https://www.bing.com/search?q=%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+%D0%BD%D0%B0+vue&qs=n&form=QBRE&sp=-1&lq=0&pq=%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+%D0%BD%D0%B0+vue&sc=10-32&sk=&cvid=E38667CB4E9041D29B85F2981F325FD4&ghsh=0&ghacc=0&ghpl=',
  },
  //

  {
    id: 16,
    phrase:
      'Development of software for automation of business processes in the field of order fulfillment',
    search: 'Google',
    numberPhrase: 1,
    language: 'eng',
    countDocuments: '367 000 000',
    link: 'https://www.google.com/search?q=Development+of+software+for+automation+of+business+processes+in+the+field+of+order+fulfillment',
  },
  {
    id: 17,
    language: 'eng',
    search: 'Яндекс',
    countDocuments: '48 000',
    link: 'https://yandex.ru/search/?text=Development+of+software+for+automation+of+business+processes+in+the+field+of+order+fulfillment&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 18,
    language: 'eng',
    search: 'Bing',
    countDocuments: '4 850',
    link: 'https://www.bing.com/search?q=Development+of+software+for+automation+of+business+processes+in+the+field+of+order+fulfillment&qs=n&form=QBRE&sp=-1&lq=0&pq=development+of+software+for+automation+of+business+processes+in+the+field+of+order+fulfillment&sc=7-94&sk=&cvid=7750FFE0E01745358D1842CE16F69D04&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 19,
    phrase: 'Sinitsa Sergey Gennadievich',
    numberPhrase: 2,
    language: 'eng',
    search: 'Google',
    countDocuments: '3 600',
    link: 'https://www.google.com/search?q=Sinitsa+Sergey+Gennadievich&sca_esv=ada41f51c7a15743&sxsrf=ADLYWILnnCn2VauHXbyMGfjubTspsQbfAA%3A1730739289319&ei=WfwoZ4iRE9-RwPAPkoro8QU&ved=0ahUKEwjIoaekksOJAxXfCBAIHRIFOl4Q4dUDCA8&uact=5&oq=Sinitsa+Sergey+Gennadievich&gs_lp=Egxnd3Mtd2l6LXNlcnAiG1Npbml0c2EgU2VyZ2V5IEdlbm5hZGlldmljaDIKEAAYgAQYsAMYDTILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDILEAAYgAQYsAMYogRI7AJQgQFYgQFwAXgAkAEAmAFroAFrqgEDMC4xuAEDyAEA-AEBmAICoAJ2wgIKECMYsAIYsAMYJ5gDAOIDBRIBMSBAiAYBkAYFkgcDMS4xoAesBg&sclient=gws-wiz-serp',
  },
  {
    id: 20,
    language: 'eng',
    search: 'Яндекс',
    countDocuments: '11 000',
    link: 'https://yandex.ru/search/?text=Sinitsa+Sergey+Gennadievich&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 21,
    language: 'eng',
    search: 'Bing',
    countDocuments: '63 200',
    link: 'https://www.bing.com/search?q=Sinitsa+Sergey+Gennadievich&qs=n&form=QBRE&sp=-1&lq=0&pq=sinitsa+sergey+gennadievich&sc=0-27&sk=&cvid=914FFB3CCC834CB18A99E04028A137F0&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 22,
    phrase: 'crowdfunding platform using blockchain',
    numberPhrase: 3,
    search: 'Google',
    language: 'eng',
    countDocuments: '4 200 000',
    link: 'https://www.google.com/search?q=crowdfunding+platform+using+blockchain&sca_esv=ada41f51c7a15743&sxsrf=ADLYWIIaUFLMHaPMI7pm9YnE0qJ75cWOPA%3A1730739292455&ei=XPwoZ9K4G-PPwPAPtdOo2Qw&ved=0ahUKEwjS1ualksOJAxXjJxAIHbUpKssQ4dUDCA8&uact=5&oq=crowdfunding+platform+using+blockchain&gs_lp=Egxnd3Mtd2l6LXNlcnAiJmNyb3dkZnVuZGluZyBwbGF0Zm9ybSB1c2luZyBibG9ja2NoYWluMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEibA1AAWABwAHgAkAEAmAFyoAFyqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAJ4mAMAkgcDMC4xoAeiBA&sclient=gws-wiz-serp',
  },
  {
    id: 23,
    language: 'eng',
    search: 'Яндекс',
    countDocuments: '47 000',
    link: 'https://yandex.ru/search/?text=crowdfunding+platform+using+blockchain&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 24,
    language: 'eng',
    search: 'Bing',
    countDocuments: '287 000',
    link: 'https://www.bing.com/search?q=crowdfunding+platform+using+blockchain&qs=n&form=QBRE&sp=-1&lq=0&pq=crowdfunding+platform+using+blockchain&sc=10-38&sk=&cvid=CBAF6A185B524AD497BEA210416B210B&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 25,
    phrase: 'ethereum blockchain',
    numberPhrase: 4,
    language: 'eng',
    search: 'Google',
    countDocuments: '94 000 000',
    link: 'https://www.google.com/search?q=ethereum+blockchain&sca_esv=ada41f51c7a15743&sxsrf=ADLYWIKVQJulxlzX5HdbfL3NTdWA6kF36A%3A1730739309568&ei=bfwoZ-qmIsmn1fIPrYHM0QU&ved=0ahUKEwiqkfutksOJAxXJU1UIHa0AM1oQ4dUDCA8&uact=5&oq=ethereum+blockchain&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2V0aGVyZXVtIGJsb2NrY2hhaW4yBRAAGIAEMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIggpQAFiYCHABeAGQAQCYAYsBoAGNAqoBAzAuMrgBA8gBAPgBAvgBAZgCA6ACngLCAgcQIxiwAhgnwgIHEAAYgAQYDZgDAJIHAzEuMqAHvw0&sclient=gws-wiz-serp',
  },
  {
    id: 26,
    language: 'eng',
    search: 'Яндекс',
    countDocuments: '45 000',
    link: 'https://yandex.ru/search/?text=ethereum+blockchain&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 27,
    language: 'eng',
    search: 'Bing',
    countDocuments: '481 000',
    link: 'https://www.bing.com/search?q=ethereum+blockchain&qs=n&form=QBRE&sp=-1&lq=0&pq=ethereum+blockchain&sc=10-19&sk=&cvid=B17FE66380384CDAA290C9AE8793813B&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 28,
    phrase: 'web application development on vue',
    language: 'eng',
    numberPhrase: 5,
    search: 'Google',
    countDocuments: '68 800 000',
    link: 'https://www.google.com/search?q=web+application+development+on+vue&sca_esv=ada41f51c7a15743&sxsrf=ADLYWILabfD1zRTNhSDBRc8yPrbFyLHsHA%3A1730739320147&ei=ePwoZ8bGCITPwPAP6YaA2QI&ved=0ahUKEwjG4oCzksOJAxWEJxAIHWkDICsQ4dUDCA8&uact=5&oq=web+application+development+on+vue&gs_lp=Egxnd3Mtd2l6LXNlcnAiIndlYiBhcHBsaWNhdGlvbiBkZXZlbG9wbWVudCBvbiB2dWUyBxAhGKABGAoyBxAhGKABGAoyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FMgUQIRifBUjXBVAAWABwAHgBkAEAmAGhAaABoQGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAqkBmAMAkgcDMC4xoAfWCw&sclient=gws-wiz-serp',
  },
  {
    id: 29,
    language: 'eng',
    search: 'Яндекс',
    countDocuments: '45 000',
    link: 'https://yandex.ru/search/?text=web+application+development+on+vue&lr=35&clid=2270455&win=662&within=0&lang=en',
  },
  {
    id: 30,
    language: 'eng',
    search: 'Bing',
    countDocuments: '8 620 000',
    link: 'https://www.bing.com/search?q=web+application+development+on+vue&qs=n&form=QBRE&sp=-1&lq=0&pq=web+application+development+on+vue&sc=10-34&sk=&cvid=995CB0A2AF064ADA9667831366E5253D&ghsh=0&ghacc=0&ghpl=',
  },
];

export const LibraryResponse = [
  {
    title:
      'Осваиваем Ethereum. Создание смарт-контрактов и децентрализованных приложений',
    authors: 'Андреас Антонопулос, Гэвин Вуд',
    description:
      'Детальное руководство по разработке смарт-контрактов и децентрализованных приложений на платформе Ethereum. Книга предоставляет всю необходимую информацию для создания приложений и смарт-контрактов, делая её ценным ресурсом для разработчиков и тех, кто хочет глубже понять особенности Ethereum.',
    source: 'Издательство Бомбора, 2024',
  },
  {
    title: 'Разработка смарт-контрактов в Ethereum',
    authors: 'Тимур Машнин',
    description:
      'Практическое руководство по созданию смарт-контрактов в сети Ethereum, включая подробный разбор технических аспектов и примеры кода.',
    source: "Литрес', 26 января 2022",
  },
];

export const LinkResponse = {
  literature: [
    {
      title:
        'Осваиваем Ethereum. Создание смарт-контрактов и децентрализованных приложений',
      authors: 'Андреас Антонопулос, Гэвин Вуд',
      description:
        'Детальное руководство по разработке смарт-контрактов и децентрализованных приложений на платформе Ethereum. Книга предоставляет всю необходимую информацию для создания приложений и смарт-контрактов, делая её ценным ресурсом для разработчиков и тех, кто хочет глубже понять особенности Ethereum.',
    },
    {
      title: 'Разработка смарт-контрактов в Ethereum',
      authors: 'Тимур Машнин',
      description:
        'Практическое руководство по созданию смарт-контрактов в сети Ethereum, включая подробный разбор технических аспектов и примеры кода.',
    },
  ],
  saits: [
    {
      link: 'https://ethereum.org/ru/developers/docs/',
      description: 'Документация по разработке Ethereum',
      source: 'ethereum.org',
    },
    {
      link: 'https://habr.com/ru/articles/335710/',
      description: 'Введение в разработку умных контрактов Ethereum',
      source: 'habr',
    },
    {
      link: 'https://cyberleninka.ru/article/n/fenomen-kraudfandinga-issledovanie-osobennostey/viewer',
      description: 'Феномен краудфандинга: исследование особенностей',
      source: 'cyberleninka',
    },
    {
      link: 'https://cyberleninka.ru/article/n/tehnologiya-blockchain-printsipy-raboty-i-perspektivy-primeneniya?utm_source=chatgpt.com',
      description:
        'Технология blockchain. Принципы работы и перспективы применения',
      source: 'cyberleninka',
    },
  ],
};

export const PersonalLink = {
  title: 'Люблю играть в баскетбол',
  video: '/basketball.mp4',
  preview: '/basketball.png',
};
export const UemkResponse = {
  titleKurs: 'Основы разработки веб приложений на Vue.js',
  descriptionKurs:
    'Курс «Основы разработки веб-приложений на Vue.js» предназначен для студентов, начинающих разработчиков и специалистов, стремящихся освоить современные технологии создания интерактивных веб-интерфейсов с использованием фреймворка Vue.js. В рамках курса участники изучат фундаментальные концепции Vue.js, включая работу с компонентами, реактивностью данных и управлением состоянием приложения. Также будут рассмотрены практические аспекты разработки — настройка среды, интеграция с API, маршрутизация и стилизация интерфейсов. Участники приобретут навыки создания динамичных и масштабируемых веб-приложений. По завершении курса слушатели смогут самостоятельно разрабатывать и внедрять веб-решения, что станет прочной основой для профессионального роста в сфере frontend-разработки.',
  lectures: [
    {
      title: 'Введение в Vue.js: Основы и архитектура фреймворка',
      pathDocument: '/lection1.docx',
    },
    {
      title: 'Создание и управление компонентами Vue',
      pathDocument: '/lection2.docx',
    },
    {
      title: 'Реактивность и управление состоянием в Vue',
      pathDocument: '/lection3.docx',
    },
    {
      title:
        'Маршрутизация с Vue Router: Навигация в одностраничных приложениях',
      pathDocument: '/lection4.docx',
    },
    {
      title: 'Работа с формами и обработка событий во Vue',
      pathDocument: '/lection5.docx',
    },
    {
      title: 'Интеграция с REST API и управление данными',
      pathDocument: '/lection6.docx',
    },
    {
      title: 'Оптимизация и сборка проекта с Vite для продакшена',
      pathDocument: '/lection7.docx',
    },
  ],
  tasks: [
    {
      title: 'Отображение списка продуктов',
      pathDocument: '/task1.docx',
    },
    {
      title: 'Переход на детализацию продукта',
      pathDocument: '/task2.docx',
    },
    {
      title: 'Загрузка списка пользователей с внешнего API',
      pathDocument: '/task3.docx',
    },
  ],
  dopMatireals: [
    {
      title: 'Введение в Vue.js',
      description:
        'Основные определения Vue.js, включая его архитектуру, основы реактивности и создание компонентов. Преимущества использования Vue.js для построения интерфейсов.',
      link: 'https://vuejs.org/guide/introduction.html',
    },
    {
      title: 'Введение в Vue Router',
      description:
        'Основы маршрутизации в Vue.js с использованием Vue Router. Настройка маршрутов, создание навигации и динамическая маршрутизация для одностраничных приложений.',
      link: 'https://router.vuejs.org/guide/',
    },
    {
      title: 'Введение в Vite',
      description:
        'Основы использования Vite для разработки современных веб-приложений. Установка, настройка и использование Vite для быстрого старта проекта с поддержкой горячей перезагрузки.',
      link: 'https://vitejs.dev/guide/',
    },
  ],
  authour: 'Батрак Артем Евгеньевич',
  kriteri: '/kriteri.docx',
};

export default {
  mainResponseRu: mainResponseRu,
  mainResponseEng: mainResponseEng,
  referatResponseRu: referatResponseRu,
  referatResponseEng: referatResponseEng,
  biographyResponse: biographyResponse,
  reportSearchResponse: reportSearchResponse,
  LibraryResponse: LibraryResponse,
  LinkResponse: LinkResponse,
  PersonalLink: PersonalLink,
  UemkResponse: UemkResponse,
};
