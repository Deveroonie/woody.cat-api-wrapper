# Woody.cat API
An API wrapper for [my cat](https://woody.cat)'s API.

To fetch a random image
```
const {fetch, RequestTypes} = require("woody.cat")

async function fetch() {
    const data = await fetch(RequestTypes.RANDOM)
    console.log(data)
}

fetch()
```
Will return something like this:
```
{ image: 'https://img.woody.cat/1713195776475.jpg', id: 4 }
```

To fetch an image by it's ID:
```
const {fetch, RequestTypes} = require("woody.cat")

async function fetch() {
    const data = await fetch(RequestTypes.ID, 1)
    console.log(data)
}

fetch()
```

Will return:
```
{ image: 'https://img.woody.cat/1713195674353.jpg', id: 1 }
```

