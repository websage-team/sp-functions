# sp-functions
Functions for super-project


# Usage

## is

More: http://is.js.org/
```
const is = require('sp-function/is')

is.not.array([]) // => false
```

## moment

More: http://momentjs.com/docs/
```
const moment = require('sp-function/moment')

moment().format('YYYY-MM-DD HH:mm:ss')
```

## random

Random string\int\float\bool\item
```
const random = require('sp-function/random')

random.string(10) // => adf6f7a8s6 (a-z,0-9)
random.string(10, true) // => aDf6F7a8s6 (a-z,A-Z,0-9)

random.int(5) // => 4 (0-5)
random.int(5, 10) // => 4 (5-10)

random.float(5) // => 4.401887938147411
random.float(10, 100) // => 72.34217455144972

random.bool() // => true

random.item(['a', 'b', 'c']) // => b
```

## crypto

MD5\SHA1\Base64
```
const crypto = require('sp-function/crypto')

crypto.md5('aa') // => 4124bc0a9335c27f086f24ba207a4912

crypto.sha1('aa') // => e0c9035898dd52fc65c41454cec9c4d2611bfb37

crypto.base64.encode('aa') // => YWE
crypto.base64.decode('YWE') // => aa
```

## isomorphic-tool

TODO: Remove and instead of [sp-isomorphic-utils](https://github.com/websage-team/sp-isomorphic-utils)