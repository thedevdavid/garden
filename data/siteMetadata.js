const siteMetadata = {
  title: "David Levai's Digital Garden",
  author: 'David Levai',
  headerTitle: 'David Levai',
  description:
    'Thoughts and resources about building software businesses and apps. Essays about freelancing, software business, productivity, working out, and how to go for be a better person every day.',
  language: 'en-us',
  theme: 'light',
  siteUrl: 'https://davidlevai.com',
  siteRepo: 'https://github.com/dlevai94/garden',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.jpg',
  email: 'david@davidlevai.com',
  github: 'https://github.com/DLevai94',
  twitter: 'https://twitter.com/iamdavidlevai',
  tiktok: 'https://tiktok.com/@iamdavidlevai',
  youtube: 'https://dvdlv.me/yt',
  linkedin: 'https://linkedin.com/in/iamdavidlevai',
  locale: 'en-US',
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus
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
