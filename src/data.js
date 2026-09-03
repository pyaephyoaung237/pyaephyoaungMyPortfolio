import profileImage from './assets/ppa.jpeg';
import gic from './assets/gic.png';
import yadanarbon from './assets/yadanarbon.jpg';
import ip from './assets/itpecIp.jpg';
import fe from './assets/itpecFe.jpg';
import bestOjt from './assets/bestOjt.jpg';
import internshipCompletion from './assets/internCompleted.jpg';
import guitarhub from './assets/guitar.jpg';
import mangatai from './assets/manga.jpg';
import saleway from './assets/saleway.jpg';

export const profile = {
  name: 'Pyae Phyo Aung',
  firstName: 'Pyae',
  rolesList: [
    'Web development',
    'Fullstack development',
    'Software Engineering',
  ],
  tagline: 'Full Stack developer',
  profileImage: profileImage,
  bio: 'I\'m a Full Stack Developer focused on building modern and scalable web applications. I specialize in React, Laravel, Spring Boot, and cloud technologies, combining intuitive user interfaces with robust and well-structured backend APIs. I\'m passionate about continuous learning, problem-solving, and creating reliable solutions for real-world needs.',
  bioJp: 'モダンで拡張性の高いウェブアプリケーションの開発を専門とするフルスタック開発者です。React、Laravel、Spring Boot、クラウド技術を専門とし、直感的なユーザーインターフェースと堅牢で優れたバックエンドAPIを組み合わせています。継続的な学習、問題解決、そして現実世界のニーズに応える信頼性の高いソリューションの創造に情熱を注いでいます。',
  age: '—',
  email: 'pyaephyoaung2377@gmail.com',
  phone: '+959974605852',
  place: 'Mandalay, Myanmar',
  placeJp: 'ミャンマー・マンダレー',
  interests: 'DevOps engineering, Cloud computing',
  interestsJp: 'DevOpsエンジニアリング、クラウドコンピューティング',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pyae-phyo-aung-1a3923346', text: 'IN' },
    { label: 'GitHub', href: 'https://github.com/pyaephyoaung237', text: 'GH' },
    
    { label: 'Email', href: 'mailto:pyaephyoaung2377@gmail.com', text: '@' },
  ],
}

export const navLinks = [
  { label: 'Home', jpLabel: 'ホーム', href: '#home' },
  { label: 'About', jpLabel: '私について', href: '#about' },
  { label: 'Skills', jpLabel: 'スキル', href: '#skills' },
  { label: 'Projects', jpLabel: 'プロジェクト', href: '#work' },
  { label: 'Experience', jpLabel: '経歴', href: '#experience' },
  { label: 'Achievement', jpLabel: '実績', href: '#achievement' },
  { label: 'Education', jpLabel: '学歴', href: '#education' },
  { label: 'Contact', jpLabel: 'お問い合わせ', href: '#contact' },
]

export const skills = [
  { name: 'HTML', group: 'frontend' },
  { name: 'CSS', group: 'frontend' },
  { name: 'JavaScript', group: 'frontend' },
  { name: 'React', group: 'frontend' },
  { name: 'Bootstrap', group: 'frontend' },
  { name: 'Tailwind CSS', group: 'frontend' },
  { name: 'Java', group: 'backend' },
  { name: 'PHP', group: 'backend' },
  { name: 'Laravel', group: 'backend' },
  { name: 'SpringBoot', group: 'backend' },
  { name: 'MySQL', group: 'database' },
  { name: 'PostgreSQL', group: 'database' },
  { name: 'MongoDB', group: 'database' },
  { name: 'Redis', group: 'database' },
  { name: 'Docker', group: 'devops' },
  { name: 'AWS', group: 'devops' },
  { name: 'GitHub', group: 'devops' },
  { name: 'Kubernetes', group: 'devops' },
  { name: 'shell script', group: 'devops' },
  { name: 'Linux', group: 'devops' },
  { name: 'Windows', group: 'devops' },
  { name: 'MacOS', group: 'devops' },
]

export const education = [
  {
    degree: 'IT & Software Development',
    degreeJp: 'IT・ソフトウェア開発',
    major: 'ITPEC, Software Development Life Cycle, Web Development, Logical Thinking & Critical Thinking',
    majorJp: 'ITPEC、ソフトウェア開発ライフサイクル、ウェブ開発、論理的思考・批判的思考',
    school: 'GIC Academy',
    schoolJp: 'GICアカデミー',
    image: gic,
    milestones: [
      'Studied ITPEC',
      'Learned Software Development Life Cycle (SDLC)',
      'Studied Web Development',
      'Developed logical and critical thinking skills',
    ],
    milestonesJp: [
      'ITPECの学習',
      'ソフトウェア開発ライフサイクル (SDLC) の習得',
      'ウェブ開発の学習',
      '論理的および批判的思考スキルの開発',
    ],
    period: '2024 - 2026',
    status: 'Completed',
    statusJp: '修了',
  },
  {
    degree: 'Bachelor of Science',
    degreeJp: '理学学士',
    major: 'Botany Major',
    majorJp: '植物学専攻',
    school: 'Yadanarbon University',
    schoolJp: 'ヤダナボン大学',
    image: yadanarbon,
    milestones: [
      'Studied Botany',
      'Completed undergraduate studies',
    ],
    milestonesJp: [
      '植物学の学習',
      '学部課程の修了',
    ],
    period: '2020 - 2026',
    status: 'Completed',
    statusJp: '卒業',
  },
]

export const work = [
  {
    title: 'MangaTai',
    tag: 'MangaReader',
    tagJp: 'マンガリーダー',
    category: 'Content Platform',
    categoryJp: 'コンテンツプラットフォーム',
    image: mangatai,
    overview: 'A comprehensive manga reading and uploading platform featuring free and premium content, secure authentication, virtual coin transactions, chapter management, user interactions, and an admin dashboard for managing manga, users, and platform activities.',
    overviewJp: '無料および有料コンテンツ、安全な認証、バーチャルコイン決済、チャプター管理、ユーザーインタラクション、マンガ・ユーザー・プラットフォーム活動を管理する管理ダッシュボードを備えた包括的なマンガ閲覧・アップロードプラットフォーム。',
    keyFeatures: [
      'Free manga reading without requiring user authentication',
      'Premium chapters accessible through virtual coin purchases',
      'Interactive manga reader with smooth page navigation',
      'Secure authentication with Google login and forgot-password functionality',
      'Coin purchase and virtual currency balance system',
      '24-hour daily gift and reward system for users',
      'Admin and user gift management functionality',
      'Users can comment on manga and add manga to their favorites',
      'Admin dashboard for manga, chapter, user, coin, and gift management',
      'Form validation and date validation for accurate and reliable user input'
    ],
    keyFeaturesJp: [
      'ユーザー認証不要の無料マンガ閲覧',
      'バーチャルコイン購入による有料チャプターへのアクセス',
      'スムーズなページナビゲーションを備えたインタラクティブなマンガリーダー',
      'Googleログインおよびパスワード忘れ機能による安全な認証',
      'コイン購入および仮想通貨残高システム',
      'ユーザー向けの24時間デイリーギフト・報酬システム',
      '管理者およびユーザーのギフト管理機能',
      'マンガへのコメント投稿およびお気に入り追加機能',
      'マンガ、チャプター、ユーザー、コイン、ギフト管理のための管理ダッシュボード',
      '正確で信頼性の高いユーザー入力を実現するフォームおよび日付のバリデーション'
    ],
    languages: ['Laravel', 'Docker', 'MySQL', 'Tailwind CSS', 'Google OAuth']
  },
  {
    title: 'Saleway Tracking System',
    tag: 'Inhouse System for sale distribution',
    tagJp: '販売流通向け社内システム',
    category: 'Enterprise System',
    categoryJp: 'エンタープライズシステム',
    image: saleway,
    overview: 'A comprehensive distribution and sales tracking system with dedicated user and admin panels, designed to manage field sales operations, monitor shop visits, track inventory and purchases, and record real-time GPS-based check-in and check-out activities.',
    overviewJp: 'フィールドセールス業務の管理、店舗訪問の監視、在庫・購入の追跡、リアルタイムのGPSベースのチェックイン・チェックアウト活動の記録を行うために設計された、専用のユーザーおよび管理者パネルを備えた包括的な流通・販売追跡システム。',
    keyFeatures: [
      'Dedicated user and admin panels with role-based access control',
      'Track which shops purchased specific products and the quantities purchased',
      'Sales history with product, quantity, shop, date, and transaction time',
      'Real-time GPS tracking for field sales agents and registered shops',
      'Check-in and check-out tracking with date and exact time',
      'Distance calculation between field agents and shops',
      'Shop visit and sales activity monitoring',
      'Stock and inventory management with sales updates',
      'Secure authentication with forgot-password functionality',
      'Form validation and date validation for accurate and reliable input',
      'Admin dashboard for sales, distribution, inventory, and activity reports',
      'Automated activity and status logs',
      'Test case writing and functional testing',
      'Optimized database queries for efficient inventory and sales data lookup'
    ],
    keyFeaturesJp: [
      '役割ベースのアクセス制御を備えた専用のユーザーおよび管理者パネル',
      'どの店舗がどの製品を何個購入したかの追跡',
      '製品、数量、店舗、日付、取引時間を含む販売履歴',
      '外回り営業担当者と登録店舗のリアルタイムGPS追跡',
      '日付と正確な時刻によるチェックイン・チェックアウト追跡',
      '営業担当者と店舗間の距離計算',
      '店舗訪問および販売活動のモニタリング',
      '売上更新を伴う在庫管理',
      'パスワード忘れ機能付きの安全な認証',
      '正確で信頼性の高い入力を実現するフォームおよび日付のバリデーション',
      '売上、流通、在庫、活動レポートのための管理ダッシュボード',
      '自動化された活動およびステータスログ',
      'テストケースの作成と機能テスト',
      '効率的な在庫・売上データ検索のための最適化されたデータベースクエリ'
    ],
    languages: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Docker', 'Redis', 'Cobol']
  },
  {
    title: 'GuitarHub',
    tag: 'Ecommerce',
    tagJp: 'Eコマース',
    category: 'Web Application',
    categoryJp: 'ウェブアプリケーション',
    image: guitarhub,
    overview: 'A full-featured e-commerce web application dedicated to buying and selling guitars, amplifiers, and music gear with secure cart management and checkout features.',
    overviewJp: 'ギター、アンプ、音楽機材の売買に特化した多機能なEコマースウェブアプリケーションで、安全なカート管理およびチェックアウト機能を備えています。',
    keyFeatures: [
      'Product catalog with advanced sorting and filter options',
      'Secure user authentication and role management',
      'Shopping cart and seamless checkout pipeline',
      'Admin inventory management dashboard'
    ],
    keyFeaturesJp: [
      '高度な並べ替え・フィルターオプションを備えた商品カタログ',
      '安全なユーザー認証とロール管理',
      'ショッピングカートとシームレスなチェックアウトパイプライン',
      '管理者向け在庫管理ダッシュボード'
    ],
    languages: ['SpringBoot', 'Blade', 'Bootstrap', 'MySQL']
  },
]

export const experience = [
  {
    company: 'GIC Company',
    companyJp: 'GICカンパニー',
    role: 'Software Development Intern',
    roleJp: 'ソフトウェア開発インターン',
    place: 'GIC Company Mandalay',
    placeJp: 'GICカンパニー マンダレー',
    period: 'May 2026 - Jul 2026',
    periodJp: '2026年5月 - 2026年7月',
  },
  {
    company: 'GIC Academy',
    companyJp: 'GICアカデミー',
    role: 'School Project',
    roleJp: '学校プロジェクト',
    place: 'GIC Academy Mandalay',
    placeJp: 'GICアカデミー マンダレー',
    period: 'Dec 2025 - Mar 2026',
    periodJp: '2025年12月 - 2026年3月',
  },
]

export const achievements = [
  {
    title: 'ITPEC IP Certificate',
    titleJp: 'ITPEC IP（ITパスポート）資格',
    org: 'ITPEC',
    date: '2024',
    image: ip,
  },
  {
    title: 'ITPEC FE Certificate',
    titleJp: 'ITPEC FE（基本情報技術者）資格',
    org: 'ITPEC',
    date: '2026',
    image: fe,
  },
  {
    title: 'Best OJT Project Award',
    titleJp: '最優秀OJTプロジェクト賞',
    org: 'GIC Academy',
    orgJp: 'GICアカデミー',
    date: '2026',
    image: bestOjt,
  },
  {
    title: 'Internship Completion Certificate',
    titleJp: 'インターンシップ修了証明書',
    org: 'GIC Company',
    orgJp: 'GICカンパニー',
    date: '2026',
    image: internshipCompletion,
  },
]