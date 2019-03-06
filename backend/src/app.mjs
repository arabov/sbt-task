import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

const env = process.env.NODE_ENV || 'development'
	, __dirname = path.dirname(new URL(import.meta.url).pathname)
	, path_to_static = path.resolve(__dirname, '../../frontend/dist')
;

let app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger(env === 'production' ? 'combined' : 'dev'));

app.use(express.static(path_to_static));

app.get('/', (req, res) => {
	res.sendFile(path_to_static + '/index.html');
});

app.use((req, res) => {
	res.status(404).json({ success: false, message: 'Not found' });
});

export default app;
