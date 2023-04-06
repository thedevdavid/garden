const siteMetadata = {
  title: "David Levai's Digital Garden",
  author: 'David Levai',
  headerTitle: '@thedevdavid',
  description:
    'Thoughts and resources about building software businesses and apps. Essays about freelancing, software business, productivity, working out, and how to go for be a better person every day.',
  language: 'en-us',
  siteUrl: 'https://davidlevai.com',
  siteRepo: 'https://github.com/thedevdavid/garden',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.jpg',
  email: 'david@davidlevai.com',
  github: 'https://github.com/thedevdavid',
  twitter: 'https://twitter.com/thedevdavid',
  tiktok: 'https://tiktok.com/@thedevdavid',
  youtube: 'https://youtube.com/@thedevdavid',
  linkedin: 'https://linkedin.com/in/thedevdavid',
  locale: 'en-US',
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark_dimmed',
    },
  },
}

module.exports = siteMetadata
