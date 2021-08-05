# Facilitators Guide: Express REST API

## Overview

Express servers can quickly get big and out of control if you build them in one monolithic server file. There are many strategies for breaking the route handling logic into modules that "make sense" ... we'll be introducing the students to one such pattern today -- separate routers that contain all of the routing logic and handlers using `Express.router()`. We'll additionally be turning our focus from "play" routes into a real set of API routes that perform CRUD operations using the REST standard.

### How does this topic fit?

**Where we've been**:
In the previous lab, we built our first Express server, introducing express response object inspection, middleware, and pulling in external modules.

**What are we focusing on today**:
Continuing on the same track, we'll be enhancing those servers today. Today's primary focus is on externalizing the routes into modules, and really digging into the idea of separation of concerns and application building best practices. To make our servers more "useful", we will lean into REST and CRUD operations as we modularize the routes

**Where we're headed**:
The next class will take the idea of routing and data models to a more scalable level, and introduce a persistence (database) layer to our server.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

The core takeaways from the day are introducing the students to

- Express Routing
  - `request.query`, `request.params`
  - review express.Router()
    - Prefixed and Self-Contained Routes
- Firmer Grasp on Separation of Concerns, Modularization Strategies
- CRUD and REST
  - REST Methods mapping to Express Routes
- ES6 Classes

This is a big build day for the instructor. The concepts are actually not too heavy (routing and REST) but they make more sense emerging from code demos than pure lecture.  Plan your lecture accordingly, to be building and teaching as you go.

- Practice the demos
  - Routing (routing)
  - integrating route modules into an API (api-server)

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

Time Box to ~ :30 minutes

Reminder, students will likely be stuck from the previous day's lab. Use your code review time to review concepts and pinpoint where they were stuck, but do not simply pull up their code and hammer out the answer for them. It works well to build from scratch a simple server again (live) and focus on one common area where students got stuck.

> Building a simple server as part of code review has the benefit of giving you a great starting point for your demo, which will be a refactoring exercise. Use this to help shave time there as well as to make a meaningful transition

Notes:

- The previous lab was a big build -- API Server, Request/Response Objects, Middleware, Node Modules, and Testing
  - One large point of struggle is likely to have been the integration of previously build data models.
  - Since they'll have to do that again in the upcoming lab, it's a good idea to code review that part of the previous lab
  - Another focus point might be how to pull the middleware functions into require-able modules
    - Reminder: The exports/require pattern is still pretty new to the students.
- Another point you can choose to focus on is the process of app building.
  - These labs all have many moving parts, and just trying code from start to finish is a failing strategy
    - Begin your code review session by diagramming how YOU would have looked at the project, requirements, and whiteboard a plan
      - What code do you write first? Why?
      - What's the earliest proof of life?
      - When/how do you use tests to help you?

### TOPIC 1a: HTTP, CRUD, and REST

- **Why** (5 min)
  - Distributed systems architectural pattern
  - "Stacks" such as the JAM stack (and others - MERN, MEAN, GRAND) are built on it
  - More efficient (scale) and maintainable (teams) to separate data, services, ui
  - MVC isn't quite enough separation
  - Microservice Architecture
  - Let's clients be clients, and smaller servers to focus on their part of the data
- **What** (10 min)
  - CRUD - Review the terms, purposes, and what it means in the data layer
    - CREATE, READ, UPDATE, DELETE -- it's what you can do to/with data
    - Have we done this in the previous module? (yes)
  - HTTP - It's the process through which clients and servers can communicate in a consistent way
    - Stateless protocol
    - Every interaction is unique
    - Everything required to fulfill a request needs to be sent
  - REST
    - Representational State Transfer
      - (Moving Data in a standard format between services)
    - A standardized way to do CRUD using HTTP
    - Set of conventions (proper verbs, input and output specs)
    - Endpoints and Actions, Data and Behavior, Verbs and Nouns
- **How** (30 min)
  - Lots of pictures to be drawn in this segment
    - HTTP Process
    - CRUD to HTTP Methods Mapping
    - How does REST standardize those types of requests?
- **Experimentation and Discovery Ideas**

### TOPIC 1b: REST APIs

- **Why** (5 min)
  - Developers want a common language, protocol, standard to follow
  - It makes "doing the work" easier to communicate across teams and companies
  - Before SOAP it was the wild west -- no standards. Every data store was unique and a large process to integrate
- **What** (10 min)
  - REST does a good job of having *some* standards, but also allowing services to operate esoterically
    - It's a standardized architectural pattern, but doesn't force you into a tight box
    - As an implementor, you can elect to honor some or all methods
    - As an implementor, you control the data contract (input requirements, output shape)
    - Requests, just like HTTP have parts
      - Methods: describe what you want to do to/with data: GET, PUT, POST, PUT, PATCH, DELETE
      - Body: is sent to a REST API to alter data, and also returned to the client on most requests
- **How** (30 min)
  - Interactive demo building out some REST method based routes on the server
    - Demonstrate API testing tools
  - Demonstrate a web client that can use the data from our server (microservice client!)
- **Experimentation and Discovery Ideas**
  - Have students drive the data model that you create. The demo is for categories and products, but you can do anything. Let them have fun with the problem domain during demo.

### TOPIC 2: Express Routing Middleware

- **Why** (5 min)
  - Servers that handle many routes or data models can get enormous in size and complexity
  - Make our code easier to manage, develop, divide amongst teams, etc
- **What** (10 min)
  - Express Router is special middleware that lets us break our routes into separate files and import them
  - Code is much more manageable, readable
    - All category routes (and maybe logic) in one file
      - A route module brings in only the data model(s) it needs
      - A route module might bring in superagent to fetch remote stuff
      - A route module might connect to a different database
- **How** (30 min)
  - Interactive demo (demo/routing)
  - Simple server with 2 route modules
    - Route modules can declare their own prefixes in the route definitions
      - `router.get('/myroute/foo')`
    - Routes can also be prefixed in the app as it "uses" the router modules
      - `app.use('/myroute', myRoutesModule)`
- **Experimentation and Discovery Ideas**

### TOPIC 3: App Building

- **Why** (5 min)
  - Engineers don't just attack a problem by jumping into the code
  - Putting together a plan and priorities can speed the process and avoid bugs
- **What** (10 min)
  - Learn to look at the big picture, formulate a plan, prioritize, execute.
  - Basic UML and flow charting are great tools to get started with
  - Break down your problem domain
    - What modules do we have? What modules do we need?
    - Are we building something new or refactoring what we already have?
    - What dependencies do we have?
- **How** (30 min)
  - Build an API server with Mongo Models
  - Before you build it out, outline what you're wanting to build and work a plan with the class
  - Build it out in a TDD/Thoughtful manner
- **Experimentation and Discovery Ideas**
  - Add your favorite 3rd party modules (i.e. morgan, debug, etc)
  - If you have time, deploy your own 404 and 500 middleware to NPM for reuse!
    - "Aren't we tired of doing this manually every time?"

## Lab Notes

There's a lot of parts to connect with this lab, so starting them off with a good planning and white-boarding session really sets them up for success.

- This is the first express server where students will use mongo models and a live mongo database
  - Students will need to
  - Get mongo connected properly in the index.js (not server.js)
  - Get supergoose activated for testing
  - Focus on pulling the right parts of their server from the previous lab out into modules
  - Install the data models from lab 05 (mongo data modeling) using `require()` and wire them into the routes properly

Ideally, students will be working from and extending their server from the previous lab. However, you may elect to have your students attempt work from within a (somewhat) working codebase as an alternate means of executing this lab by giving them starter code from one of your demos.  Even if you don't, lead them in a planning session to help get them going in the right direction.

## What might students struggle with today?

- Getting mongo connected to their web server
- Having tests figured out
  - Wiring (supergoose)
  - Trying to figure out what and how to test

## Past bugs, issues or surprises...

## General Comments and Notes
