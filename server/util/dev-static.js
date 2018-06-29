const axios = require('axios');
const webpack = require('webpack');
// api和nodejs上的fs基本相同
const MemoryFs = require('memory-fs');
const ReactDomServer = require('react-dom/server');
const proxy = require('http-proxy-middleware');
const serverConfig = require('../../build/webpack.config.server');
const path = require('path');

const getTemplate = () => {
	return new Promise((resolve, reject) => {
		axios
			.get('http://localhost:8888/public/index.html')
			.then((res) => {
				resolve(res.data);
			})
			.catch(reject);
	});
};

const Module = module.constructor;

//依赖了MemoryFs可以把文件存到内存里，加快打包速度
const mfs = new MemoryFs();
// webpack模块调用
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;
let serverBundle;

serverCompiler.watch({}, (err, stats) => {
	if (err) throw err;
	stats = stats.toJson();
	stats.errors.forEach((err) => console.log(err));
	stats.warnings.forEach((warn) => console.log(warn));

	// 编译出来的内容是一个字符串
	const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);

	const bundle = mfs.readFileSync(bundlePath, 'utf-8');
	const m = new Module();

	// 这里必须要指定文件名如serber-entry.js
	m._compile(bundle, 'server-entry.js');
	serverBundle = m.exports.default;
});

module.exports = function(app) {
	// 启用代理
	app.use(
		'/public',
		proxy({
			target: 'http://localhost:8888'
		})
	);
	app.get('*', function(req, res) {
		getTemplate().then((template) => {
			const content = ReactDomServer.renderToString(serverBundle);
			res.send(template.replace('<app></app>', content));
		});
	});
};
