/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://inoutgyms.com/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'Googlebot', allow: '/' },
        ],
    },
};