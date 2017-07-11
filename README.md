

# loop-async


#### Javascript loop with async behaviour

# Installation

``` 
npm i loop-async -S
```

# Use case

##### where ```Promise.all``` fails.

Somewhere between ```Promise.all``` and sequenced ```then``` chaining.

A handy equivalent for looping through async methods/calls partially dependent on each other.
As shown in the example. the second request should only be made when the first request is resolved.

```javascript

return request(firstUrl)
  .then(() => {
      return request(secondUrl);
  })
  .then(() => {
      return request(thirdUrl);
  });
  .then(() => {
      return request(fourthUrl);
  });
  .then(() => {
      return request(fifthUrl);
  });
```
will be equivalent to

```javascript

[ 1, 2, 3, 4, 5].foreachPromise((i) => {
    return request(i);
});
```


# Usage

```javascript
require('loop-async')();
```

Just require it and call its constructor in your code. Yep, its that simple.

# Test

``` npm test ```
