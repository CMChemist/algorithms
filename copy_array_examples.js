// const users = [
//     {role: 'driver', name: 'Dave', location: 'address1' },
//     {role: 'driver', name: 'Jane', location: 'address2' },
//     {role: 'driver', name: 'John', location: 'address3' },
//     {role: 'donor', name: 'Whole Foods Market', location: 'address4'},
//     {role: 'food bank', name: "Immanuel Community Services", location: 'address5'},
//     {role: 'food bank', name: 'Pike Market Food Bank', location: 'address6'},
//     {role: 'food bank', name: 'Salvation Army Food Bank', location: 'address7'}
// ]

// const distances = [
//     {role: 'food bank', name: "Immanuel Community Services", location: 'address5'},
//     {role: 'food bank', name: 'Pike Market Food Bank', location: 'address6'},
//     {role: 'food bank', name: 'Salvation Army Food Bank', location: 'address7'}
// ]
// const donorDrivers = { 
//     donor: {role: 'donor', name: 'Whole Foods Market', location: 'address4'}, 
//     drivers:[
//         {role: 'driver', name: 'Dave', location: 'address1', milesFrom: 5 },
//         {role: 'driver', name: 'Sarah', location: 'address2', milesFrom: 10 },
//         {role: 'driver', name: 'John', location: 'address3', milesFrom: 5 }
//     ]
// }
// const donor = {role: 'donor', name: 'Whole Foods Market', location: 'address4'}



// let potentialMatches = {}

// const addPotentialTrips = (distances) => {
//     const newDrivers = donorDrivers.drivers.map ( driver => { 
//         driver['distances'] = distances;
//         return driver
//     })
    // console.log('newDrivers = ', newDrivers)
    // potentialMatches = {...donorDrivers, drivers: newDrivers}
// }

// addPotentialTrips(milesPerTrip)

// const milesPerTrip = [ 1, 7, 4 ]

// const drivers = [
//     {name: 'Dave'},
//     {name: 'Sarah'},
//     {name: 'John'}
// ]

// drivers.forEach( driver => { 
//     driver['milesPerTrip'] = milesPerTrip;
// })
// console.log('drivers before change = ', drivers)
// console.log("Dave's milesPerTrip = ", drivers[0].milesPerTrip)
// console.log("Sarah's milesPerTrip = ", drivers[1].milesPerTrip)
// console.log("John's milesPerTrip = ", drivers[2].milesPerTrip)
// console.log('*************************************')
// drivers[0].milesPerTrip.push(5)
// drivers[0].milesPerTrip[0] = 0
// console.log('drivers after change = ', drivers)
// console.log("Dave's milesPerTrip = ", drivers[0].milesPerTrip)
// console.log("Sarah's milesPerTrip = ", drivers[1].milesPerTrip)
// console.log("John's milesPerTrip = ", drivers[2].milesPerTrip)



const numbers = [ 1, 7, 4 ]
const array = [
    {a: 'value1'},
    {a: 'value2'},
    {a: 'value3'}
]
array.forEach( obj => obj['b'] = numbers)
console.log('array before change = ', array)
// array before change =  [
//     { a: 'value1', b: [ 1, 7, 4 ] },
//     { a: 'value2', b: [ 1, 7, 4 ] },
//     { a: 'value3', b: [ 1, 7, 4 ] }
// ]
array[0].b.push(5)
console.log('array after change = ', array)
// array after change =  [
//     { a: 'value1', b: [ 1, 7, 4, 5 ] },
//     { a: 'value2', b: [ 1, 7, 4 ] },
//     { a: 'value3', b: [ 1, 7, 4 ] }
// ]