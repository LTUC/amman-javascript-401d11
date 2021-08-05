# DEMOS - Component Based UI

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## Demo Notes

Your goal in the 2 demos today is to both reinforce their prior react knowledge and also start showing the students new ways to do the same things.

While you will not be refactoring today, the output would be as though you did --- 2 apps that do the exact same thing in 2 different ways. It's a good idea to call this out.

## Live Coding Demo(s)

We'll be creating the same application class components and functional components

### `class-components`

> Code this out as a recap of their previous react knowledge. Note that there's no "state" in this application. It's just props being passed to child components.

- Focus with the students on recalling their previous react experience. This demo is best done as a code-along with the class.
- Make note of the fact that you're changing the title bar ... that'll be a thing we focus on in the second demo

### `functional-components`

> This is the same app as the class-component demo, with 2 exceptions

- Use functional components instead of a class
- Code out a simple "hook" to do the title bar change
  - This shows how a function component can "hook" or "tap" into the react rendering cycle and use external code to do repetitive things
