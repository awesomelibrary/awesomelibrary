import angular from 'angular';
import angularUiRouter from '@uirouter/angularjs';
import { rentalsModule } from './rentals/index';
import { undoModule } from '../../global/undo/index';
import { BookController } from './_controllers/Book';
import { routerConfig } from './_configs/router';

export const humanBookModule = angular
  .module('humanLibrary.humanBooks.humanBook', [
    angularUiRouter,
    rentalsModule,
    undoModule
  ])
  .controller('BookController', BookController)
  .config(routerConfig)
  .name;
