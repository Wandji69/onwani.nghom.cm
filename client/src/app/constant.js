var app = angular.module('ace.Constant', [])
    .constant('GENERAL_CONFIG', {
        'api_url': '/',
        'theme': 'trainr',
        'preferredLanguage': 'en',
    })
    .constant('ImgLazyLoad', {
        'AnimateVisible': "true",
        'AnimateSpeed': '0.3s'
    });
