const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ayush Rawal Portfolio | Developer, JaipurJS Community Organizer, Hacker, Entrepreneur and IIIT Kota Student', // Navigation and Site Title
  siteTitleAlt: 'Ayush Rawal Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Ayush Rawal', // short_name for manifest
  siteHeadline: "My Personal portfolio where you can see what I've been working on and read my blog", // Headline for schema.org JSONLD
  siteUrl: 'https://ayushrawal.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'I build awesome web and mobile apps. JavaScript Developer, JaipurJS organizer, and AngelHack Ambassador',
  author: 'Ayush Rawal', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@AyushAco', // Twitter Username
  ogSiteName: 'Ayush Rawal', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-140019710-3',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
