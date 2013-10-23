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
        filter('timer', function() {
            return function(input) {
                // if it is not number, return null
                if (!angular.isNumber) { return null; }
                // round to 1 second
                input = Math.round(input / 1000)
                var output;
                if (input < 0) {
                    output = '-';
                    input = -input;
                } else {
                    output = '';
                }
                var m = Math.floor(input / 60);
                output += (m < 10 ? '0' + m : m) + ':';
                var s = input % 60;
                output += s < 10 ? '0' + s : s;
                
                return output;
            };
        });
