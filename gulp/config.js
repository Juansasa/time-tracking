'use strict';

module.exports = function() {
    var appPath = 'webapp',
        tmp = '.tmp',
        dist = 'dist',
        assets = appPath + '/assets',
        bowerDir = './bower_components',
        serveDir = tmp,
        config = {
            webapp: appPath,
            tmp: tmp,
            serve: serveDir,
            dist: dist,

            scss: {
                main: appPath + '/index.scss',
                configurations: assets + '/sass/configs/**/_*.scss',
                helpers: [
                    assets + '/sass/functions/**/_*.scss',
                    assets + '/sass/mixins/**/_*.scss'
                ],
                components: [
                    appPath + '/**/_main.scss', //Make sure the main.scss file is loaded first
                    appPath + '/**/*.scss',
                    '!' + assets + '/**/*',
                    '!' + appPath + '/index.scss'
                ],
                dest: tmp
            },

            css: {
                files: [
                    appPath + '/**/*.css',
                    tmp + '/**/*.css'
                ]
            },

            jsx: {
                files: [
                    tmp + '/**/*.js'
                ],
                main:
                // The entry file to the application
                appPath + '/components/app.js',
                dest: tmp
            },

            images: {
                files: [assets + '/images/**'],
                dest: dist + '/assets/images'
            },

            fonts: {
                files: [assets + '/fonts/**', bowerDir + '/**'],
                dest: dist + '/fonts/'
            },

            misc: {
                files: [appPath + '/*.{ico,txt}', appPath + '/.htaccess']
            },

            proxies: [{
                from: '/api/user',
                to: 'http://test.com/user' // Just an example backend proxy
            }],

            wiredepOptions: {
                bowerJson: require('./../bower.json'),
                directory: bowerDir,
                devDependencies: true,
                //exclude: [ /bootstrap-sass/, /bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
            }
        };

    return config;
};