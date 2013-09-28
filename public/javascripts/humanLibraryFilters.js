angular.module('humanLibrary.filters', []).
        filter('status', function() {
            return function(input, filters) {
                var output = [];
                for (var i = 0; i < input.length; i++) {
                    if ((filters.showAvailable && input[i].status == 'available') || (filters.showRented && input[i].status == 'rented') || (filters.showOnBreak && input[i].status == 'break') || (filters.showAbsent && input[i].status == 'absent')) {
                        output.push(input[i]);
                    }
                }
                return output;
            };
        }).
        filter('every', function() {
            return function(input, number) {
                // if it is not array, return null
                if (!angular.isArray) { return input; }
                
                var i = 0, output = [];
                while (i < input.length) {
                    output.push(input.slice(i, i+number));
                    i += number;
                }
                
                return output;
            };
        });
