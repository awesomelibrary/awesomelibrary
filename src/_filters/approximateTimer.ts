import * as moment from 'moment';

export function approximateTimerFactory() {

  function approximateTimer(rental) {
    if (rental === null) {
      return rental;
    }
    const approximateMinutesLeft = (
      Math.ceil(moment.duration(rental.rentedAt + rental.period - moment().valueOf()).asMinutes() / 5) * 5
    );
    return approximateMinutesLeft < 5 ? '2' : approximateMinutesLeft.toString();
  }

  return approximateTimer;

}
