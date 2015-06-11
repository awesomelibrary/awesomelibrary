'use strict';

require('./');
require('angular-mocks');

require('./_services/BookSpec');
require('./_services/libraryLocalStorageSpec');
require('./_services/LibrarySpec');
require('./_services/libraryExportSpec');
require('./_services/librarySerializerSpec');

require('./global/undo/_serivces/undoSpec');

require('./global/arranger/_services/ArrangerSpec');
