const fs = require('fs');
const unified = require('unified');
const markdown = require('remark-parse');
const html = require('remark-html');
const slug = require('remark-slug');
const headings = require('remark-autolink-headings');

const result = unified()
    .use(markdown)
    .use(slug)
    // Note that this module must be included after remark-slug.
    .use(headings)
    .use(html)
    .processSync(fs.readFileSync('example.md'))
    .toString();

console.log(result);
