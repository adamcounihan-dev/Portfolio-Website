import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const sitemap = new SitemapStream({ hostname: 'https://adamlcounihan.netlify.app' });

const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/projects', changefreq: 'weekly', priority: 0.8 },
];

async function generateSitemap() {
    const writeStream = createWriteStream('./dist/sitemap.xml');
    sitemap.pipe(writeStream);

    pages.forEach((page) => {
        sitemap.write(page);
    });

    sitemap.end();

    // Ensure that the sitemap generation is completed before finishing the script
    await streamToPromise(sitemap);
    console.log('Sitemap has been generated!');
}

generateSitemap().catch((err) => console.error(err));
