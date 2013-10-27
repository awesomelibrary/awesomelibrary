angular.module('humanLibrary', [
            'humanLibrary.controllers'
            ,'humanLibrary.services'
            ,'humanLibrary.directives'
            ,'humanLibrary.filters'
            ,'humanLibrary.translations'
            ,'ngLocale'
        ])
    .value('$bookCard', {width: 300, height: 167});