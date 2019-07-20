/*
developer       lj, tjy, cdh, zq, yr, lbb   开发者
 game            yz, lw2/lw, bbcs, ywz, gg, yzsy, lwsy, mm,  游戏名称
 projectType     h5, zt, huodong, login    项目类型
 projectName     项目名称
 */
const developer = 'lj', game = 'yz', projectType = 'huodong', projectName = 'firepower'
const imgDomain='//img.ssl.q1.com/',cssDomain='//css.ssl.q1.com/',jsDomain='//css.ssl.q1.com/',devDomain = 'dev.q1.com'
const imgResource ='img',cssResource ='css',jsResource ='js'
module.exports = {
    isCdn: false,
    isMobile:false,
    backend :false,   // 建立在svn某游戏目录下，如需传给后端人员，请开启为true，省去手动替换html页面中的资源链接
    isTiny:false,      //  开启图片压缩
    port: '8000',
    root:'./',
    dev: './dev',
    dist: './dist/',
    tinyKey: '7NRAuTVZeoFEoelQbxzyNlMYYimlknun',     //  一个tinyKey值每月能压缩500张图片，同一天多次build打包压缩，不累计次数。如果需要自己的key值，请前往 https://tinypng.com/developers申请；查看次数 https://tinypng.com/dashboard/api
    htmlOptions:{
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    },
    autoprefixerOptions:{
        supportedBrowsers: [
            "> 1%",
            "last 2 versions",
            "firefox >= 28",
            "not ie <= 8",
            'edge >= 12',
            'safari >= 7'
        ],
        cascade: true,
        remove: true
    },
    uglifyOptions:{
        ie8:true
    },
    css: {
        cssSrc: './css/*.css',
        cssDist:  './dist/css',
        cssDistAll:  './dist/css/*.css',
        htmlCss:  '**/*.css'
    },
    js: {
        vendorJsSrc: './vendor/*.js',
        appJsSrc: './js/app.js',
        moduleJsSrc: './module/*.js',
        jsDist:  './dist/js',
        jsDistAll:  './dist/js/*.js',
        jsDistExclude:'!./dist/js/vendor-**.js',
        jsDistVendor:'./dist/js/vendor-**.js',
        htmlJs:'**/*.js'
    },
    img:{
        imgRoot:'img/',
        imgSrc:'./img',
        tinyImg:'./img/*.{png,jpg}',
        gifImg:'./img/*.gif',
        cssImg:'../img/*.{gif,png,jpg}',
        icon:'./icon/*.png',
        imgDist: './dist/img',
        htmlImg:'**/*.{gif,png,jpg}',
        imgAll:'./img/*.{png,jpg,gif}'
    },
    sprite:{
        imgName:'sprite.png',
        cssName:'../css/sprite.css',
        imgPath:'../img/sprite.png',
        padding:10
    },
    html:{
        devHtml:'./*.html',
        distHtml:'./dist/*.html',
    },
    json:{
        imgJson:'./dist/img/*.json',
        allJson:'./dist/**/*.json'
    },
    server:{
        proxy: 'localhost',
        index: 'index.html'
    },
    local: {
        img: `http://${game}.${developer}.${devDomain}/${projectType}/${projectName}/img/`,
        css: `http://${game}.${developer}.${devDomain}/${projectType}/${projectName}/dev/`,
        js: `http://${game}.${developer}.${devDomain}/${projectType}/${projectName}/dev/`
    },
    cdn: {
        img: `${imgDomain}${game}/${projectType}/${projectName}/${imgResource}/`,
        css: `${cssDomain}${game}/${projectType}/${projectName}/${cssResource}/`,
        js:  `${jsDomain}${game}/${projectType}/${projectName}/${jsResource}/`
    },
}
