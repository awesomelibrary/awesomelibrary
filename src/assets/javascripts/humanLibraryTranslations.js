angular.module('humanLibrary.translations', ['pascalprecht.translate'])
        .config(['$translateProvider', function($translateProvider) {

                // Polish translation
                $translateProvider.translations('pl', {
                        title: 'Żywa Biblioteka'
                        , mainMenu: {
                                header: 'Żywa Biblioteka'
                                , addBook: 'Dodaj książkę'
                                , archive: 'Zapis i odczyt danych'
                            }
                        , manageBooks: {
                                namePlaceholder: 'Wpisz tytuł książki...'
                                , notesPlaceholder: 'Notatki...'
                                , actions: {
                                        'return': 'Zwróć'
                                        , rent: 'Wypożycz'
                                        , cancelCurrentRental: 'Anuluj aktualne wypożyczenie'
                                        , continueLastRental: 'Kontynuuj ostatnie wypożyczenie'
                                    }
                            }
                    });
                    
                // English translation
                $translateProvider.translations('en', {
                        title: 'Human Library'
                        , mainMenu: {
                                header: 'Human Library'
                                , addBook: 'Add book'
                            }
                        , manageBooks: {
                                namePlaceholder: 'Enter book title...'
                                , notesPlaceholder: 'Notes...'
                                , actions: {
                                        'return': 'Return'
                                        , rent: 'Rent'
                                        , cancelCurrentRental: 'Cancel current rental'
                                        , continueLastRental: 'Continue last rental'
                                    }
                            }
                    });
                    
                $translateProvider.preferredLanguage('pl');
            }]);
