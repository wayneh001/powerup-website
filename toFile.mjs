import fs from 'fs';

console.time('耗時');
const distPath = './dist/index.html';
let htmlText = fs.readFileSync(distPath, 'utf8');
let resultText = '';
let htmlArr = htmlText.match(/.*\n/g) || [];
htmlArr.forEach(str => {
    str = str.replace(/\s?nomodule\s?/g, ' ');
    str = str.replace(/\s?crossorigin\s?/g, ' ');
    str = str.replace(/data-src/g, 'src');
    if (!/type="module"/i.test(str)) resultText += str;
});
fs.writeFileSync(distPath, resultText, 'utf8');
console.timeEnd('耗時');