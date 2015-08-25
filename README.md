find-server
===

usage:

```bash
$ find-server localhost 8080
8088
$ find-server localhost 8080 8085
Could not find server
$ echo $?
1
$ find-server localhost 5000
Could not find server
$ echo $?
1
```


```js
var findServer = require('find-server');

findServer('localhost', 8000, 9000, function(err, port) {
  console.log(port);
});
```