class eventsPosted {
    constructor(obj1) {      
      this.title = obj1.title;
      this.id = obj1.id;
      this.description = obj1.description;
      this.ticketCount = obj1.ticketCount;
      this.dateAndTime = obj1.dateAndTime;
      this.dateAndTimeObj = obj1.dateAndTimeObj;
      this.type = obj1.type;  
      this.location = obj1.location;
      this.status = obj1.status;
    }
  }
  module.exports = eventsPosted;
