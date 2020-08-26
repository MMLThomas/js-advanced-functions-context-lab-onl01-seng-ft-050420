/* Your Code Here */
  function createEmployeeRecord(array){
      return {
    firstName: array[0],
    familyName: array[1],
    title:  array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(array){
  return array.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(ds){
  let dateTime = ds.split(' ')
  this.timeInEvents.push(
    {
      type: 'TimeIn',
      hour: parseInt(dateTime[1]),
      date: dateTime[0]
    })
    return this
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}