const theList = [
    'Laurence',
    'Svekis',
    true,
    35,
    null,
    undefined, 
    {
    test: 'one',
    score: 55
}, 
['one', 'two']
];

console.log(theList);

// Remove First Element and Last Element.
theList.shift();
theList.pop();

// Add string value 'First' at the start of array
theList.unshift("First");

theList.splice(3,3,"Hello World");

theList[2] = "Middle";
theList.splice(-1,1,"Last")

console.log(theList);
