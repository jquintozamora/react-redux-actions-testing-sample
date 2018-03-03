# Redux actions testing sample

This sample is to provide a guide on how to test complex redux actions using different middlewares.

- [redux-thunk](https://github.com/gaearon/redux-thunk)
- [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
- [redux-async-queue](https://github.com/zackargyle/redux-async-queue)

APIS

Cryptocurrency
[Coin Market Cap](https://api.coinmarketcap.com)
[Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api)


TODOS:
- Include middlewares
    - SAGAS
    - CUSTOM
    - THUNK

- Include mock data query system emulating server query

```
import { apiMiddleware } from 'redux-api-middleware'
import createSagaMiddleware, { END } from 'redux-saga'
import ReduxAsyncQueue from 'redux-async-queue'
import thunkMiddleware from 'redux-thunk'
```

[Asyn actions and middlewares](https://medium.com/@jtbennett/asynchronous-actions-in-redux-8412cf92a26f)

@zackargyle has written a [quick overview](https://medium.com/netscape/advanced-redux-action-types-d5a71ed44e16) of
redux-thunk
redux-promise
redux-async-queue
redux-debounce


Also available are:
redux-api-middleware
redux-async
redux-await
redux-async-connect
react-fetcher
react-resolver
redux-saga


Thunk middleware isn't the only way to orchestrate asynchronous actions in Redux:
- You can use redux-promise or redux-promise-middleware to dispatch Promises instead of functions.
- You can use redux-observable to dispatch Observables.
- You can use the redux-saga middleware to build more complex asynchronous actions.
- You can use the redux-pack middleware to dispatch promise-based asynchronous actions.
- You can even write a custom middleware to describe calls to your API, like the [real world example](https://redux.js.org/introduction/examples#real-world) does.

