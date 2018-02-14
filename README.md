# promsleep - Sleep as a promise

This is a small handy piece of code that implements sleep as a promise. 

# Example 
```
Promise.resolve()
.then(out => promsleep(1000/*ms*/, out)
.then(out => {
  /* out will be passed through promsleep */
}) 
```
