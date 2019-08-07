
## 安装 Karma

### 第一步：安装 Node.js

安装相应版本的 [Node.js](https://nodejs.org/en/)，并却保 Node Package Manager(NPM) 可以正常运行（默认情况下，NPM 随 Node.js 一起安装）。

通过执行 `node -v` 命令，检查 Node.js 是否安装成功，以及运行 `npm -v` 命令，察看 NPM 是否运行正常。


### 第二步：安装 Karma

1. 全局安装

> $npm install -g karma

安装 Karma 命令会到全局的 node_modules 目录下，我们可以在任何位置直接运行 karma 命令。

> $npm install -g karma-cli

此命令用来安装 karma-cli，它会在当前目录下寻找 karma 的可执行文件。这样我们就可以在一个系统内运行多个版本的 Karma。

2. 本地安装

> $npm install karma --save-dev

安装 Karma 命令到当前 node_modules 目录下，此时，如果需要执行 karma 命令，就需要这样 $ ./node_modules/.bin/karma



#### 安装 plugins

访问 Karma 官网关于 plugins 部分，这里有众多的 Karma 插件可以选择安装。下面是一些常用的插件

- karma-chrome-launcher
- karma-coverage
- karma–jasmine
- karma–firefox-launcher
- karma-ie-launcher


#### Karma 的配置

基本配置

>  $ karma init karma.conf.js

执行命令后，会被问到一系列的问题，根据问题提示按需选择就好了，这里不多说，有疑问可百度！


karma.conf.js 配置清单参考：

```
module.exports = function(config) { 
    config.set({ 
        // base path, that will be used to resolve files and exclude 
        basePath: '../..', 
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser 
        files: ['test/client/mocks.js', 'static/karma.src.js', 'test/client/*.spec.js'], 
        // list of files to exclude 
        exclude: [], 
        // use dots reporter, as travis terminal does not support escaping sequences 
        // possible values: 'dots', 'progress' 
        reporters: ['progress', 'junit'], 
        // will be resolved to basePath (in the same way as files/exclude patterns) 
        junitReporter: {outputFile: 'test-results.xml'}, 
        // web server port 
        port: 9876, 
        // enable / disable colors in the output (reporters and logs) 
        colors: true, 
        // level of logging 
        // possible values: config.LOG_DISABLE || config.LOG_ERROR
        //|| config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG 
        logLevel: config.LOG_INFO, 
        // enable / disable watching file and executing tests whenever any file changes 
        autoWatch: true, 
        // Start these browsers, currently available: 
        // - Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS,
        //IE (only Windows) 
        browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'], 
        // If browser does not capture in given timeout [ms], kill it 
        captureTimeout: 20000, 
        // Auto run tests on start (when browsers are captured) and exit 
        singleRun: false, 
        // report which specs are slower than 500ms 
        reportSlowerThan: 500, 
        // compile coffee scripts 
        preprocessors: {'**/*.coffee': 'coffee'}, 
        plugins: [
        'karma-jasmine',
        'karma-chrome-launcher', 
        'karma-firefox-launcher',
        'karma-junit-reporter'
        ] 
    });
};
```

#### Karma 支持的浏览器

- Chrome and Chrome Canary
- Firefox
- Safari
- PhantomJS
- JSDOM
- Opera
- Internet Explorer
- SauceLabs
- BrowserStack
- many more

使用时需要安装相应的插件，如：

>  npm install karma-firefox-launcher --save-dev

>  npm install karma-chrome-launcher --save-dev

>  npm install karma-ie-launcher --save-dev

接下在，在配置文件中加入新支持的浏览器名称:

```
module.exports = function(config) { 
    config.set({ 
        browsers : ['Chrome', 'Firefox'] 
    });
};
```
默认情况下，在配置文件中 browsers 项是没有被配置的（也就是说它的值是空）



#### 启动 Karma

命令：

> karma start karma.conf.js

此时，Karma 会自动打开浏览器，并运行相应的测试用例，而执行结果会输出到控制台。


Karma 中的 Reporters在默认的情况下，Karma 会将测试的执行结果显示在控制台上。而有些时候，我们可能更希望使用其他的输出格式，将结果展示出来。或者让 Karma 帮我们做更多的事情，比如显示代码的覆盖率等等，此时，我们就需要 Karma 的报表功能。

Karma 使用 Reporters 来显示执行结果。我们以 karma-html-reporter 为例

首先，我们需要下载 karma-html-reporter

> npm install karma-htmlfile-reporter --save-dev

或者，你也可以全局安装

> npm install -g karma-htmlfile-reporter

接下来，修改配置文件(karma.conf.js)：

```
module.exports = function(config) { 
    config.set({
        ..... ..... 
        reporters: ['progress', 'html'], 
        htmlReporter: { 
            outputFile: 'test-units.html', 
            // Optional 
            pageTitle: 'Unit Tests', 
            subPageTitle: 'A sample project description', 
            groupSuites: true, 
            useCompactStyle: true, 
            useLegacyStyle: true 
        } 
    });
};
```

执行命令:

> karma start --reporters html 

或

> karma start karma.conf.js

在浏览器正常运行测试用例后，会在执行目录下生成 test-units.html 文件。使用浏览器打开 test-units.html 文件


### FAQ

1.  Can not load “html”, it is not registered! Perhaps you are missing some plugin?

> npm install -g karma-html-reporter 或 npm install --save-dev karma-html-reporter

 then confirm you have 'karma-html-reporter' in plugins in the conf, i.e:
 
```
plugins: [
  'karma-teamcity-reporter',
  'karma-jasmine',
  'karma-coverage',
  'karma-chrome-launcher',
  'karma-phantomjs-launcher',
  'karma-html-reporter'
]
```



