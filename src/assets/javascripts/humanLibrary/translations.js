angular.module('humanLibrary.translations', ['pascalprecht.translate']).config(['$translateProvider', function ($translateProvider) {

    // Polish translation
    $translateProvider.translations('pl', {
        title: 'Żywa Biblioteka',
        mainMenu: {
            header: 'Żywa Biblioteka',
            admitBook: 'Przyjmij książkę'
        },
        manageBooks: {
            namePlaceholder: 'Wpisz tytuł książki...',
            notesPlaceholder: 'Notatki...',
            actions: {
                'return': 'Zwróć',
                rent: 'Wypożycz',
                cancelRental: 'Anuluj wypożyczenie'
            }
        }
    });

    // English translation
    $translateProvider.translations('en', {
        title: 'Human Library',
        mainMenu: {
            header: 'Human Library',
            admitBook: 'Admit book'
        },
        manageBooks: {
            namePlaceholder: 'Enter book title...',
            notesPlaceholder: 'Notes...',
            actions: {
                'return': 'Return',
                rent: 'Rent',
                cancelRental: 'Cancel rental'
            }
        }
    });

    $translateProvider.preferredLanguage('pl');}]);