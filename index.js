class GithmeDesk {
    constructor(totalDesks) {
      this.totalDesks = totalDesks;
      this.availableDesks = totalDesks;
      this.reservedDesks = [];
    }
  
    reserveDesk(user, numberOfDesks) {
      if (numberOfDesks <= this.availableDesks) {
        this.reservedDesks.push({ user, numberOfDesks });
        this.availableDesks -= numberOfDesks;
        console.log(`${user} reserved ${numberOfDesks} desk(s).`);
      } else {
        console.log(`Not enough desks available. Unable to reserve.`);
      }
    }
  
    releaseDesk(user, numberOfDesks) {
      const reservationIndex = this.reservedDesks.findIndex(reservation => reservation.user === user);
  
      if (reservationIndex !== -1) {
        const reservedDesks = this.reservedDesks[reservationIndex].numberOfDesks;
        this.reservedDesks.splice(reservationIndex, 1);
        this.availableDesks += reservedDesks;
        console.log(`${user} released ${reservedDesks} desk(s).`);
      } else {
        console.log(`${user} doesn't have a desk reservation.`);
      }
    }
  
    displayDeskStatus() {
      console.log(`Total Desks: ${this.totalDesks}`);
      console.log(`Available Desks: ${this.availableDesks}`);
      console.log(`Reserved Desks: ${this.reservedDesks.length}`);
    }
  }
  
  // Example usage:
  const githmeDeskSystem = new GithmeDesk(20);
  
  githmeDeskSystem.reserveDesk('John', 5);
  githmeDeskSystem.reserveDesk('Alice', 3);
  githmeDeskSystem.displayDeskStatus();
  
  githmeDeskSystem.releaseDesk('John', 2);
  githmeDeskSystem.displayDeskStatus();
  
  githmeDeskSystem.reserveDesk('Bob', 8);
  githmeDeskSystem.displayDeskStatus();
  