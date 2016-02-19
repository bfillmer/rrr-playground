# RRR Playground

## What's All This Then?

Playground for leveraging the following technologies to create a front-end web application:

* React: View layer, naturally. Stateless and functional for additional challenge and awesomeness.
* RxJS: Data and event streams. Connecting the store this way gets around needing something like react-redux. Connecting events allows killing redux middleware.
* Redux: Super-simple data store for the application.
* Immutable: Immutable data in JS is sexy.

## But Middleware and React-redux exist?

Yeah, I don't like leveraging `context` in React, whole 'unsupported and unofficial' part bugged me. As for Redux middleware, I believe that is a case of trying to do too much with a single library. Redux is extremely good at the one thing it's supposed to do: store immutable data and document any actions taken against the store for easy reasoning about the application state. Adding middleware too tightly couples (IMO) events or side effects to the store.

## Setup

This is a very minimal boilerplate, no CSS Pre-processor, no tests, no linting. Clone the repo, then:

```shell
npm install
```

Get coffee.

```shell
npm run dev
```

Go to http://localhost:8080 and you should see the application.

## TODO

* `fetchers/` is a terrible name. Should change this.
* Sub-divide components and play with a second set of events/redux reducers.
* Add testing with tape, linting, css pre-processing. The usual pieces from other boilerplates.
* Is it worth optimizing the duplication between certain events and the Redux actions? Events can exist without a Redux action, but not the other way around. Perhaps standardizing the action as a sub-property of the event and building the Redux action from that automatically to reduce duplicate effort.
* Leverage reselect for acting against the state stream, thus allowing each component (container level most likely) to determine what's data requirements are.
