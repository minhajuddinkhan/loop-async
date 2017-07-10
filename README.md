# loop-async
javascript loop with async behaviour

# Use case

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

# Installation

```   npm install loop-async --save  ```

# Usage

```javascript
require('loop-async')();
```

Just require it and call its constructor in your code. Yep, its that simple.
