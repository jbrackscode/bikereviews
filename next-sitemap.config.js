/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bikersreview.com.au',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
