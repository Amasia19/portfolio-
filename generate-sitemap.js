const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'http://localhost:8080/' }); 

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);


const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  
];

routes.forEach(route => sitemap.write(route));

sitemap.end();

streamToPromise(writeStream).then(() => {
  console.log('✅ Sitemap généré avec succès !');
});
