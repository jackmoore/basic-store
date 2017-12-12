# DEPRECATED

Use [unistore](https://github.com/developit/unistore) instead, it's extremely similar but better documented and vetted.  I will continue using basic-store for my own purposes because I like each the previousState being supplied to subscribers.

# Basic Store

A really basic reactive state implementation.


## Install

```
npm install basic-store
```

## Example
``` js

import basicStore from './basic-store'

const store = basicStore()

store.subscribe((state, prevState)=> {
	console.log(state.message)
})

store.setState({
	message: 'Hello World'
})

```

## License

MIT
