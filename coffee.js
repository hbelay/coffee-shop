// to create an array of hours.
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
//to create object pike place
var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  beansPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calCupsPerHour: function(){
    for (var i = 0; i < hours.length; i ++) {
      var numCups = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i]).toFixed(1));
      this.cupsPerHour.push(numCups);
      this.dailyCupsTotal += numCups;
    }
  },
  calBeansNeededForCupsPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beansNeeded = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beansNeeded);
    }
  },
  calPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var numBeans = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
      console.log(numBeans);
      this.poundPackagesPerHour.push(numBeans);
      this.dailyPoundPackagesTotal += numBeans;
    }
  },
  calcBeansPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beans = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
      this.beansPerHour.push(beans);
      this.dailyBeansNeeded += beans;
    }
  },
  render: function() {
    pikePlace.calcCustomersPerHour(pikePlace.minCustomersHour, pikePlace.maxCustomersHour);
    pikePlace.calCupsPerHour();
    pikePlace.calBeansNeededForCupsPerHour();
    pikePlace.calPoundPackagesPerHour();
    pikePlace.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs[' + this.customersPerHour[i] + ' customers, '
      + ' ' + this.cupsPerHour[i] + ' cups(' + this.beansNeededForCupsPerHour[i] + '), ' + this.poundPackagesPerHour[i] + ' to go]';
      ulElement.appendChild(liElement);
    }

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total customers at Pike Place Market: ' + Math.ceil(this.dailyCustomersTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total cups sold at Pike Place Market: ' + Math.round(this.dailyCupsTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pound packages sold at Pike Place Market: ' + Math.round(this.dailyPoundPackagesTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pounds of beans needed at Pike Place Market: ' + this.dailyBeansNeeded.toFixed(1);
    ulElement.appendChild(liTotalElement);
  }
};
pikePlace.render();

// to create object copital Hill
var capitolHill = {
  locationName: 'CAPITOL HILL',
  minCustomersHour: 12,
  maxCustomersHour: 28,
  avgCupsPerCustomer: 3.2,
  avgPoundsPerCustomer: 0.03,
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  beansPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calCupsPerHour: function(){
    for (var i = 0; i < hours.length; i ++) {
      var numCups = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i]).toFixed(1));
      this.cupsPerHour.push(numCups);
      this.dailyCupsTotal += numCups;
    }
  },
  calBeansNeededForCupsPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beansNeeded = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beansNeeded);
    }
  },
  calPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var numBeans = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
      console.log(numBeans);
      this.poundPackagesPerHour.push(numBeans);
      this.dailyPoundPackagesTotal += numBeans;
    }
  },
  calcBeansPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beans = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
      this.beansPerHour.push(beans);
      this.dailyBeansNeeded += beans;
    }
  },
  render: function() {
    capitolHill.calcCustomersPerHour(capitolHill.minCustomersHour, capitolHill.maxCustomersHour);
    capitolHill.calCupsPerHour();
    capitolHill.calBeansNeededForCupsPerHour();
    capitolHill.calPoundPackagesPerHour();
    capitolHill.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('capitol');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs[' + this.customersPerHour[i] + ' customers, '
      + ' ' + this.cupsPerHour[i] + ' cups(' + this.beansNeededForCupsPerHour[i] + '), ' + this.poundPackagesPerHour[i] + ' to go]';
      ulElement.appendChild(liElement);
    }

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total customers at Capitol Hill: ' + Math.ceil(this.dailyCustomersTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total cups sold at Capitol Hill: ' + Math.round(this.dailyCupsTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pound packages sold at Capitol Hill: ' + Math.round(this.dailyPoundPackagesTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pounds of beans needed at Capitol Hill: ' + this.dailyBeansNeeded.toFixed(1);
    ulElement.appendChild(liTotalElement);
  }
};
capitolHill.render();

// to create object copital Hill
var seattlePublicLibrary = {
  locationName: 'SEATTLE PUBLIC LIBRARY',
  minCustomersHour: 9,
  maxCustomersHour: 45,
  avgCupsPerCustomer: 2.6,
  avgPoundsPerCustomer: 0.02,
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  beansPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calCupsPerHour: function(){
    for (var i = 0; i < hours.length; i ++) {
      var numCups = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i]).toFixed(1));
      this.cupsPerHour.push(numCups);
      this.dailyCupsTotal += numCups;
    }
  },
  calBeansNeededForCupsPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beansNeeded = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beansNeeded);
    }
  },
  calPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var numBeans = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
      console.log(numBeans);
      this.poundPackagesPerHour.push(numBeans);
      this.dailyPoundPackagesTotal += numBeans;
    }
  },
  calcBeansPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beans = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
      this.beansPerHour.push(beans);
      this.dailyBeansNeeded += beans;
    }
  },
  render: function() {
    seattlePublicLibrary.calcCustomersPerHour(seattlePublicLibrary.minCustomersHour, seattlePublicLibrary.maxCustomersHour);
    seattlePublicLibrary.calCupsPerHour();
    seattlePublicLibrary.calBeansNeededForCupsPerHour();
    seattlePublicLibrary.calPoundPackagesPerHour();
    seattlePublicLibrary.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('spl');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs[' + this.customersPerHour[i] + ' customers, '
      + ' ' + this.cupsPerHour[i] + ' cups(' + this.beansNeededForCupsPerHour[i] + '), ' + this.poundPackagesPerHour[i] + ' to go]';
      ulElement.appendChild(liElement);
    }

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total customers at Seattle Public Library: ' + Math.ceil(this.dailyCustomersTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total cups sold at Seattle Public Library: ' + Math.round(this.dailyCupsTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pound packages sold at Seattle Public Library: ' + Math.round(this.dailyPoundPackagesTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pounds of beans needed at Seattle Public Library: ' + this.dailyBeansNeeded.toFixed(1);
    ulElement.appendChild(liTotalElement);
  }
};
seattlePublicLibrary.render();
// to create object South lake union
var southLakeUnion = {
  locationName: 'SOUTH LAKE UNION',
  minCustomersHour: 5,
  maxCustomersHour: 18,
  avgCupsPerCustomer: 1.3,
  avgPoundsPerCustomer: 0.04,
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  beansPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calCupsPerHour: function(){
    for (var i = 0; i < hours.length; i ++) {
      var numCups = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i]).toFixed(1));
      this.cupsPerHour.push(numCups);
      this.dailyCupsTotal += numCups;
    }
  },
  calBeansNeededForCupsPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beansNeeded = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beansNeeded);
    }
  },
  calPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var numBeans = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
      console.log(numBeans);
      this.poundPackagesPerHour.push(numBeans);
      this.dailyPoundPackagesTotal += numBeans;
    }
  },
  calcBeansPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beans = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
      this.beansPerHour.push(beans);
      this.dailyBeansNeeded += beans;
    }
  },
  render: function() {
    southLakeUnion.calcCustomersPerHour(southLakeUnion.minCustomersHour, southLakeUnion.maxCustomersHour);
    southLakeUnion.calCupsPerHour();
    southLakeUnion.calBeansNeededForCupsPerHour();
    southLakeUnion.calPoundPackagesPerHour();
    southLakeUnion.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('slu');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs[' + this.customersPerHour[i] + ' customers, '
      + ' ' + this.cupsPerHour[i] + ' cups(' + this.beansNeededForCupsPerHour[i] + '), ' + this.poundPackagesPerHour[i] + ' to go]';
      ulElement.appendChild(liElement);
    }

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total customers at Pike Place Market: ' + Math.ceil(this.dailyCustomersTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total cups sold at Pike Place Market: ' + Math.round(this.dailyCupsTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pound packages sold at Pike Place Market: ' + Math.round(this.dailyPoundPackagesTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pounds of beans needed at Pike Place Market: ' + this.dailyBeansNeeded.toFixed(1);
    ulElement.appendChild(liTotalElement);
  }
};
southLakeUnion.render();

//creat object seatac Airport
var seaTacAirPort = {
  locationName: 'SEA-TAC AIRPORT',
  minCustomersHour: 28,
  maxCustomersHour: 44,
  avgCupsPerCustomer: 1.1,
  avgPoundsPerCustomer: 0.41,
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  beansPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += customers;
    }
  },
  calCupsPerHour: function(){
    for (var i = 0; i < hours.length; i ++) {
      var numCups = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i]).toFixed(1));
      this.cupsPerHour.push(numCups);
      this.dailyCupsTotal += numCups;
    }
  },
  calBeansNeededForCupsPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beansNeeded = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beansNeeded);
    }
  },
  calPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var numBeans = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
      console.log(numBeans);
      this.poundPackagesPerHour.push(numBeans);
      this.dailyPoundPackagesTotal += numBeans;
    }
  },
  calcBeansPerHour: function(){
    for(var i = 0; i < hours.length; i ++){
      var beans = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
      this.beansPerHour.push(beans);
      this.dailyBeansNeeded += beans;
    }
  },
  render: function() {
    seaTacAirPort.calcCustomersPerHour(seaTacAirPort.minCustomersHour, seaTacAirPort.maxCustomersHour);
    seaTacAirPort.calCupsPerHour();
    seaTacAirPort.calBeansNeededForCupsPerHour();
    seaTacAirPort.calPoundPackagesPerHour();
    seaTacAirPort.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('seatac');
    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs[' + this.customersPerHour[i] + ' customers, '
      + ' ' + this.cupsPerHour[i] + ' cups(' + this.beansNeededForCupsPerHour[i] + '), ' + this.poundPackagesPerHour[i] + ' to go]';
      ulElement.appendChild(liElement);
    }

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total customers at Pike Place Market: ' + Math.ceil(this.dailyCustomersTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total cups sold at Pike Place Market: ' + Math.round(this.dailyCupsTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pound packages sold at Pike Place Market: ' + Math.round(this.dailyPoundPackagesTotal.toFixed(1));
    ulElement.appendChild(liTotalElement);

    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'Total pounds of beans needed at Pike Place Market: ' + this.dailyBeansNeeded.toFixed(1);
    ulElement.appendChild(liTotalElement);
  }
};
seaTacAirPort.render();
