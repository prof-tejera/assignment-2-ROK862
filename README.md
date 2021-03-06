# Project Directory:
- https://prof-tejera.github.io/assignment-2-ROK862/

# Implementation Notes:

## 4 Timers
- Fixed bugs and simplified timers by breaking code into smaller functional components. Also, since state values are managed with context, smaller components don't rely on parent timer components for passing values back and forth.
## Consistent UI

- Changed ui input for rounds to Options. Thus, limits are specific to the arrray of inputs--numbers only, zero to 29.
- Timer input validation is hendled by AppProvider, and doesnt allow invalid inputs.

- Removed background image--in preference to simple ui with white background.
- Validation prevents APP from starting without round input > 0.
- Fixed naming convension and documentation issues.
- Tabata select explicitly lables the timer imput value.

repeated titles say Loading spinner
not sure whats the difference between an Action button and an Anchor button - these can be condensed into one component
missing several components from documentation"
in the docs, a lot of types are set as string, handlers should be functions, collections should be arrays, etc
none of the components have proptypes in the code"
Modular/reusable styles (DRY)

## DRY Implementation of components.
- All components are implemented with DRY in mind.
- All third-party libraries have been depricated, if not removed--completely.
- All url based resourses are referenced from github.


## Sources:
- Sound effects: https://app.soundstripe.com/
- License: All plans include unlimited licensing, Full access to Adobe Premiere Pro, Twitch & Frame.io extensions, and top-notch Customer Support.

# Objective
In this assignment, we will start using the foundation we lay in A1 and make our timers fully functional. Each timer will function as described in A1 and the user flow should be the following:

- User opens the application
- Select a type of timer (Stopwatch, Countdown, XY, TABATA)
- Configure timer based on type (time, rounds, work/rest, etc)
- Run timer. While running, user should be able to:
  - Pause/Resume
  - When paused, user can reset back to initial state
  - Ability to "fast forward" (ends the timer)

- When timer is complete, you can decide how to congratulate the user and allow them to start over or select a different timer

## Deliverable

- Convert all classes components that you have added to functional components. You are welcome to convert all components (including ones added by us), but this is not required.
- Get all timers functional
- Application state should be managed with context. That is, timers should NOT track time, rounds, etc, locally or pass it down to its children
- Make sure that you can switch between timers without breaking the app (e.g. I should not have to refresh in order to run another timer after a run has been completed)
- Update documentation as your components change. 
- Your application must be deployed and the link pasted somewhere in this README

### Deployment Instructions (GH actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Grading Rubric 
- All components you have added are functional components
- All timers are functioning properly 
- Timers can be run one after another and it should not break the application
- Application state is managed with context
- DRY (do not repeat yourself). we should not see the same code copy pasted all over the codebase. 
- Console is free of warnings/errors

## Bonus
For people looking for an additional challenge, we have provided some bonus features that you can implement. These are not required! You can still get a 100% on the assignment without them.
- Before the timer starts, have a 10-second countdown to give user time to prepare (3pt)
- User settings
  - custom number of seconds before the timer starts (1pt)
  - configurable audio notifications (3-2-1-GO, halfway, 1 minute left, last round, beep every minute, etc) (1pt)
- Persisting state so refreshing the page does not clear application state. (2pt) 

## Installing and Running the project

As you have noticed this repository is empty. To begin this assignment you must copy over all of our files from A1 into this repo. I recommend not copying over `node_modules` and instead re-install here. You can then commit and deploy as usual from this repo.


>>>>>>> aa0ee8ba937592ca4126ba81b2f3a636151f2fca
