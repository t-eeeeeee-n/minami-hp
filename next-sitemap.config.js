/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://inoutgyms.com/',
    generateRobotsTxt: true,
    exclude: ['/admin/*'],
    additionalPaths: async () => [
        { loc: '/', changefreq: 'daily', priority: 1.0 },
        { loc: '/blog', changefreq: 'daily', priority: 0.8 },
    ],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'Googlebot', allow: '/' },
        ],
    },
};