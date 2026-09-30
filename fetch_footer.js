/* eslint-disable */
const https = require('https');

https.get('https://expressptl.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https?:\/\/[^\s"'<>]+\.(?:png|jpg|jpeg|svg|webp)/gi;
    const matches = [...new Set(data.match(regex) || [])];
    console.log('--- ALL MATCHES CONTAINING LOGO OR FOOTER OR EXPRESS ---');
    matches.filter(u => /logo|express|footer|header|brand/i.test(u)).forEach(u => console.log(u));
    
    // Also look around the footer html
    const footerIdx = data.toLowerCase().indexOf('footer');
    if (footerIdx !== -1) {
      console.log('--- FOOTER SNIPPET ---');
      console.log(data.substring(footerIdx, footerIdx + 3000));
    }
  });
}).on('error', err => {
  console.error('Error fetching:', err);
});
