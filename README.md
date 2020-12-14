## Astolfo
generate your random Astolfo  

```
npm install astolfo
```
or
```
yarn add astolfo
```

```js
let randomAstolfo = require("astolfo");
randomAstolfo().then(url => console.log(url)).catch(console.error);
```  
requires Node.js version 6.x or above, although the tested version is 10.x to 14.x, 6.x and 8.x should work too