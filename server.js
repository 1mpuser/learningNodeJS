import fs from 'fs';
import _ from 'underscore';
import __dirname from './DirnamePath/__dirname.js';
import http from 'http';
import { constants } from 'fs';
// const text = fs.readFileSync('file.txt', 'utf-8');
// fs.writeFileSync('OneMoreFile.txt', text);
// const obj = {
// 	'file1.txt': 'text1',
// 	'file2.txt': 'text2',
// 	'file3.txt': 'text3',
// };
// for (let elem in obj) {
// 	fs.writeFileSync(elem, obj[elem]);
// }
// async function func() {
// 	let data = await fs.readFile('file.txt', 'utf8');
// 	console.log(data);
// }

// func();
// fs.access('file.txt', constants.F_OK)
// 	.then(async () => {
// 		const data = await fs.readFile('file.txt');
// 		console.log(data);
// 	})
// 	.catch(() => console.log('not exists'));
// const writebleStream = fs.createWriteStream('FileToWrite.txt');
// for (let i = 1; i <= 1000000; i++) {
// 	writebleStream.write(`${i}\n`);
// }
// writebleStream.end();
http
	.createServer((request, responce) => {
		responce.setHeader('Cache-Control', 'no-cache');
		responce.statusCode = 200;
		responce.write('Da mihi esse optimum');
		responce.end();
	})
	.listen(4000);
