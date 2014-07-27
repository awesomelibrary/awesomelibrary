angular.module('humanLibrary.translations', ['pascalprecht.translate']).config(['$translateProvider', function ($translateProvider) {

    // Polish translation
    $translateProvider.translations('pl', {
        title: 'Żywa Biblioteka',
        mainMenu: {
            header: 'Żywa Biblioteka',
            admitBook: '+ Przyjmij książkę'
        },
        manageBooks: {
            namePlaceholder: 'Imię...',
            titlePlaceholder: 'Tytuł...',
            actions: {
                'return': 'Zwróć',
                rent: 'Wypożycz',
                cancelRental: 'Anuluj'
            }
        }
    });

    // English translation
    $translateProvider.translations('en', {
        title: 'Human Library',
        mainMenu: {
            header: 'Human Library',
            admitBook: '+ Admit book'
        },
        manageBooks: {
            namePlaceholder: 'Name...',
            titlePlaceholder: 'Title...',
            actions: {
                'return': 'Return',
                rent: 'Rent',
                cancelRental: 'Cancel'
            }
        }
    });

    $translateProvider.preferredLanguage('pl');
}]);