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