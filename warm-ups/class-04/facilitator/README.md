# Facilitators Guide: Data Modeling

## Overview

In this class, we'll be exploring data modeling. Students will have had some introduction to the concept as far back as 201, but now we'll start to look at this topic from a more engineering standpoint. Specifically, we'll be creating data models that not only shape and describe data (using schemas), but also perform the core CRUD (Create/Read/Update/Delete) operations, and allow room for applying business logic.

### How does this topic fit?

**Where we've been**:
To this point, the students have built a fully functional REST API with Express, but with a simple in-memory database.

**What are we focusing on today**:
Today, we turn their attention to more deep data modeling, specifically using Mongo (via Mongoose) as the delivery vehicle. They'll use mongoose schemas to support (validate write operations for) a true data model with full CRUD capabilities so that their API can use actual data

**Where we're headed**:
This class concludes the REST API Module

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice the demos
  - Basic Mongo schema creation and operation
  - Writing tests using the `@code-fellows/supergoose` library
    - This mocks our database so that our tests can run actual Mongoose methods, but not require a running database!

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

The previous class was a big API build, requiring them to modularize a server, build rudimentary data models and build 2 routes.

- From a volume perspective, students may have had a tough time completing the full lab
  - Find out where they got stuck and help them unblock
- Students will likely have had issues getting tests to run and deploy
  - Review the process for developing code using TDD
  - Review the check-in process and seeing how passing/failing tests can halt a PR
  - The takeaway here is less about "how to write it" and more about "why we wrote it and how to use it"

### TOPIC 1: Entity Data Modeling

- **Why** (5 min)
  - We need a way to fully describe real world entities
    - Declaring Properties and Behaviors
    - Validation
    - Business Rules
- **What** (10 min)
  - "Data Models" are a part of MVC architecture (The "M")
  - They describe shape (what properties does an object have)
  - They describe rules (what is required, data types, etc)
  - They adhere to basic behaviors (CRUD)
  - They can apply business rules
  - Models generally represent entities (like a type of food)
  - Collections are generally an interface to a group of Models (i.e. a database/table)
- **How** (15 min)
  - Use plenty of diagrams and as you describe the above topics
    - Diagram "food" as a data model

### TOPIC 2: NoSQL Databases and Mongo

- **Why** (5 min)
  - JSON is the standard - every languages can read and write
  - It can deeply describe a complex object unlike a Relational DB
- **What** (10 min)
  - NoSQL Databases Store data in a "Document", not a "Record"
    - Resembles JSON
    - Fast (Key+Value) storage
  - There are tradeoffs
    - Big (but complete) data objects
    - No Relationships
- **How** (15 min)
  - Lead the students in a differences and pros/cons discussion between SQL and NoSQL
    - Highlighting things like relations, documents, complex models, scale (horizontal vs vertical), etc
  - Mongo is one of many NoSQL systems
  - Open and use the `mongo` CLI and demonstrate some basic commands, navigating a db, collections, records, etc

### TOPIC 3: ORMs and Mongoose (Code!)

- **Why** (5 min)
  - Databases have differing APIs, making them hard to move between
    - SQL and NoSQL are vastly different
  - Developers prefer a common API or set of commands to work with
    - `.save()`, `.get()`, etc.
- **What** (10 min)
  - ORM = "Object Relational Mapping"
  - Provide for a simple and common API for accessing data
  - Mongoose is an ORM for Mongo that allows you to
    - Create a schema that defines our collection's shape
    - Easily implements CRUD operations
    - Create middleware/lifecycle functions to let us add business logic during CRUD operations
- **How** (30 min)
  - During your demo, be sure to use the Mongoose CLI as well as the Mongo Compass GUI to show the data in the database in real time
    - It's important that students get in touch with their tools
  - Food Demo (20 min): create a simple Mongoose Schema and Model, based on your food drawing from earlier
    - Focus on the basic CRUD methods and how the data gets into the database

### TOPIC 4: Data Collections / Repositories

- **Why** (5 min)
  - Rather than deal directly with schemas, we can create an abstraction layer, called a collection
  - This simply wraps the mongoose specific methods with more familiar/common methods
    - Like - `save()`, `delete()`, etc.
- **What** (10 min)
  - Create an interface class for a collection of instances of a mongo schema
    - A class that is "A Model" which has all of the common things
      - Methods for each CRUD operation
    - This is important for scale and extensibility
      - Our code will always now use the interface and call generic methods like `create()`
        - The underlying databases (Mongo, Pg, etc) will turn that into `.save()` or whatever their equivalent is!
        - This means
- **How** (20 min)
  - `collection` demo
  - Re-Build the modeling demo from the previous class, using a collection to wrap the schema
  - Write some tests that assert saving data (more on that later)
- **Discussion Points**
  - How can this idea support models that are for other databases? (pg, memory, etc)
  - What if we had 100 models? Is there a way to make the collections DRY?

## Lab Notes

After you review the lab requirements, lead the students in a "UML" exercise. How should they architect the files? What functions might they need? Help them draw the pictures on your whiteboard.

> Every lab requires a UML diagram. You should lead the creation of this drawing with the class and then allow them to use it as that part of the lab requirement. We want to slowly show them how to break these lab requirements down into a workable plan

Students will be replacing their in-memory data models with a Mongoose collections in their API.

## What might students struggle with today?

- Deployment will require a hosted Mongo data store in the cloud. We've provided complete instructions for the students in their README, but a short demo/workshop at the start of lab might be helpful

## Past bugs, issues or surprises...

## General Comments and Notes
