# synchronous-sleep   
Synchronous sleep for Node.js

## IMPORTANT:   
Do not use any older versions. All these versions are bugged and don't work.   

## Usage   
```js   
const { sleep, sleepms, disableWarns } = require("synchronous-sleep");
console.log("Mark 1");
sleep(5);
console.log("Mark 2");
```   
```js   
let i = 0;
while (true) {
  console.log(i);
  sleepms(250);
  i++;
}   
```

# Use in the browser   
Unfortunately, due to Chrome's restriction on the `SharedArrayBuffer`, this cannot be used in the browser.   
# Functions   
```js
sleep(seconds)
```
Sleeps for the amount of seconds passed.   


```js
sleepms(ms)
```

Sleeps the number of milliseconds passed.   

# Credits   
Made by me   
