import angular from 'angular';
import { RentalsController } from './_controllers/RentalsController';

export const rentalsModule = angular
  .module('humanLibrary.humanBooks.humanBook.rentals', [])
  .controller('RentalsController', RentalsController)
  .name;
