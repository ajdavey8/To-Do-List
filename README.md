# Recordable To-Do List

https://truelayer-to-do-list.web.app/

## Summary

The task was to develop a React SPA To-Do List that could record the users actions. It needed to have all the basic functionality of a To-Do List app, create a to-do, update a to-do, delete a to-do and view a list of all to-dos. In addition it needed to record all these actions when the user wanted to record them and allow for stopping recording and clearing the actions recorded. Finally, it had to play the recordings with the specific requirement to reset the environment to empty with no to-dos and to play the actions in order to the point at which the recording was stopped.

## Run the app

Install the main dependencies

```sh
$ yarn
```

To run the app in development mode on localhost:8080 run the following in the root directory

```sh
$ yarn start
```

## Tests

To run the unit tests

```sh
$ yarn test
```

To check the types

```sh
$ yarn check-types
```

## Approach/Decisions

The app meets all the requirements as I understand them. There is one thing with using the app, that for the recording to work properly you must first start recording before adding a to-do. This has to happen to meet the requirements for the recording to start from empty and end with the same state as when stopped recording. Otherwise it fails to meet one of those two requirements.

I kept all the state within React as it is quite a simple app so didn't think it required the use of Redux or React Context API. I've used local storage for persisting the recordings across refreshes, it's probably sufficient for such a small app. Although, ideally I would have a backend with a database for storage with more time.

I've used TypeScript as I think it makes the code more readable and can help with debugging. I chose not to compile the app with TS as I don't find compile time type errors necessarily all that helpful, they can be a bit annoying (they're already highlighted by my code editor). I prefer the approach of having a 'check-types' script to deal with any errors in my own time. It also has the added benefit of making recompiling for development slightly faster as it is only compiled by Babel.

For styling I've used styled-components as it keeps a good separation of concern and readability. I went with a mobile first approach in terms of design, it is responsive although not going to win any awards for UI/UX. I could've gone further with the implementation of shared styles for buttons etc. and even made them a separate component. In a larger project I most definitely would.

The app is reasonably well unit tested. It is lacking integration and e2e tests which is something I'd like to add in the future using Cypress for e2e testing.

## Future Improvements and Features

 - Prioritise to-dos
 - Change the order
 - Have a completion status
 - UI/UX could be improved