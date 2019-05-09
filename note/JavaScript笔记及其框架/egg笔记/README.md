# 快速初始化
### 生成项目（要求最低的node版本8.x）
```
npm i egg-init -g
egg-init egg-example --type=simple
cd egg-example
npm i
```
### 启动项目
```
npm run dev
```

## 配置
### 环境配置会覆盖默认配置

#### config |- config.default.js 默认配置 |- config.prod.js 线上环境测试 |- config.unittest.js 测试环境配置

* config.local.js 本地开发环境配置
## 模板渲染
#### 安装`egg-view-nunjucks`来渲染模板
```
npm i egg-view-nunjucks --save
```
## 开启插件：
```
// config/plugin.js
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};
// config/config.default.js
module.exports = appInfo => {
	........

	// 添加view配置
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

  	return config;
};
```
## MySQL
### 安装`egg-mysql`
```
npm i --save egg-mysql
```
## 开启插件
```
exports.mysql = {
	enable:true,
	package:'egg-mysql',
}
```
`config/config.local.js `中配置本地开发环境mysql
```
module.exports = appInfo => {
    const config = exports = {};

	……

    config.mysql = exports.mysql = {
        client: {
            host: '192.168.11.22',
            port: '3306',
            user: 'tongjh',
            password: 'tong123',
            database: 'tongjh_egg',
        },
        app: true,
        agent: false,
    }

  return config;
};
```
## Router
### 路由默认定义在`app/router.js`，避免路由规则散落在多个地方，从而出现未知冲突，太多路由映射也可以进行拆分，可直接使用`egg-router-plus`
```
module.exports = app => {
    const { router, controller } = app;

    router.get('/',controller.home.index);
    
    router.get('/user/list', controller.user.list);
    router.post('/user/add', controller.user.add);
    router.get('/user/item/:id', controller.user.item);
    router.put('/user/update', controller.user.update);
    router.delete('/user/delete/:id', controller.user.delete);

    router.get('/curl/get', controller.curl.get);
    router.get('/curl/post', controller.curl.post);
    router.get('/curl/put', controller.curl.put);
    router.get('/curl/delete',controller.curl.delete);
};
```