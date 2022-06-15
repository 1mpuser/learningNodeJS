import fs from 'fs';
import _ from 'underscore';
import __dirname from './__dirname.js';
import http from 'http';
import { constants } from 'fs';
import express, { response } from 'express';
import { request } from 'https';
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
// http
// 	.createServer((request, response) => {
// 		console.log(request.url);
// 		console.log(request.method);
// 		console.log(request.headers);

// 		response.writeHead(200, { 'Content-Type': 'text/html' });
// 		response.write('text');
// 		response.end();
// 	})
// 	.listen(4000);
const app = express();
// app.get('/', (req, res) => {
// 	res.send('Da mihi esse optimum');
// });
app.get('/kek', (req, resp) => {
	resp.send('Krek ne kek');
	console.log(req.originalUrl);
});
// app.get('/todos', (req, res) => {
// 	res.send(req.query);
// 	console.log(req.query);
// });
app.get('/protocol', (req, res) => res.send(req.protocol));
app.get('/secure', (req, res) => res.send(req.secure));
app.get('/headers', (req, res) => res.send(req.headers));
app.get('/languages', (req, res) => res.send(req.acceptsLanguages));
app.get('/ipshka', (req, res) => res.send(req.ip));
app.get('/page/adasd/', (req, res) => res.redirect(301, '/'));
// app.get('/', (req, res) => {
// 	res.type('json');
// 	const obj = {
// 		name: 'Alex',
// 		password: 3228,
// 		email: 'khuilo@mail.com',
// 		date: new Date(),
// 	};
// 	const josn = JSON.stringify(obj);
// 	res.json(obj);
// });
app.get('/profiles', (request, response) => {
	response.sendFile(__dirname + '/randomJson.json');
});
app.listen(4000, () => console.log('Running...'));
