# Burning Airlines Client

## Description

First development group project from General Assembly Bootcamp.
Goals:

- To get a working front-end and back-end for a fake airline company.
- To have 4 primary views including creating new flights, listing new airplanes, booking new flights and selecting seats.
- Get a working database using MVC on Ruby on Rails
- Get working front-end using React.js

## Things I realised

### this.props vs this.state

- this.props are parameters that are used from either child or parent Component via component attribute. These were .state that were passed onto a seperate Component
  eg.
  `<ParentComponent passes={this.state.ofSelf}>`<ChildComponent uses={this.props.ofParent}>`
- this.state are parameters saved in the state of the component via constructors and this.state and updated with .setState

## Technologies

- React.js
- Fontawesome
