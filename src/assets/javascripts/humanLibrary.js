angular
    .module('humanLibrary', [
        'humanLibrary.controllers',
        'humanLibrary.services',
        'humanLibrary.directives',
        'humanLibrary.filters',
        'humanLibrary.translations',
        'ngLocale',
        'humanLibrary.libraryExport'
    ])
    .value('$bookCard', {
        width: 300,
        height: 167
    })
    .config(['$compileProvider',
        function($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
        }
    ]);