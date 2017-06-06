import angular from 'angular';

export class Book {

  public rentals: any[] = [];
  public name: string = '';
  public title: string = '';
  public available: boolean = true;

  public rent(rental): void {
    if (this.isRented()) {
      return;
    }
    this.rentals.unshift(rental);
    this.available = true;
  }

  public cancelRental(rental): number {
    const index = this.rentals.indexOf(rental);
    if (index !== -1) {
      this.rentals.splice(index, 1);
    }
    return index;
  }

  public return(): any {

    if (!this.isRented()) {
      return;
    }

    return this.currentRental().end();
  }

  public isRented(): boolean {
    if (angular.isUndefined(this.rentals[0])) {
      return false;
    }
    return !this.rentals[0].isEnded();
  }

  public currentRental(): any {
    if (!this.isRented()) {
      return null;
    }
    return this.rentals[0];
  }

  public isRentable(): boolean {
    return !this.isRented() && this.available;
  }

  public toggleAvailable(): void {
    this.available = !this.available;
    this.return();
  }
}

export const BookServiceFactory = () => {
  return Book;
};
