# Lecture Guide: Data Modeling

## TOPIC 1: Entity Data Modeling

- **Why** (5 min)
  - We need a way to fully describe real world entities
    - Beyond simply stating the "shape" of an object (Schema)
    - Beyond simply validating that shape (Validator libraries)
    - Modeling also describes behavior
      - Saving and Retrieving
      - Business Rules
  - It's highly scalable, repeatable and maintainable to have all of that "logic" in one place
- **What** (10 min)
  - "Models" are a part of MVC architecture
  - They describe shape (what properties does an object have)
  - They describe rules (what is required, data types, etc)
  - They adhere to basic behaviors (CRUD)
  - They can have business logic
  - Models generally represent entities (like a type of food)
  - Collections are generally an interface to a group of Models (i.e. a database/table)
- **How** (15 min)
  - Data modeling in Javascript
    - "The process of taking a real world or conceptual idea and encoding it into Javascript's built in data types."
    - Boolean values should be used when the data can have only two states.
    - Numbers should be used when the data could support arithmetic operations.
    - Strings should be used when the data is representing a natural language.
    - Arrays should be used to bundle multiple pieces of like data.
    - Objects should be used to bundle multiple pieces of different data.
    - What can a basic entity "do" (verb)
      - Start by asking "What does an entity (like a person) look like in code?"
        - Age: Number, Required
        - Name: String, Required
        - Pets: Array, Optional
        - ...
    - What is the output of modeling? **A Schema**
  - Modeling core behaviors
    - CRUD - Basic Data Operations
      - **CREATE** - Add a record to a data store
      - **READ** - Retrieve a record from a data store
      - **UPDATE** - Update a record within a data store
      - **DELETE**  - Remove a record from a data store
  - Use plenty of diagrams and loose coding examples as you describe the above topics
  - Diagram "food" as a data model
    - Introduce the notion of properties, rules, data types, allowed values
    - Behaviors and characteristics

## TOPIC 2: NoSQL Databases and Mongo

- **Why** (5 min)
  - JSON is the standard - every languages can read and write
  - It's descriptive of the objects
    - It can deeply describe a complex object unlike a Relational DB
    - In other words, it can perfectly model an entity
- **What** (10 min)
  - Stores data in a "Document", not a "Record"
    - Resembles JSON
  - Highly Scalable
    - Horizontal and Vertical
  - There are tradeoffs
    - Big (but complete) data objects
    - Repeat data if you use sub-documents (i.e. users and order history in the same object)
  - **MongoDB** codifies these concepts, and makes the unstructured "JSON Object" concept scale, really well
    - Schemas for document definition
    - Show the students the mongo setup, command line tooling
    - Discuss briefly how it stores data
      - Collections of Documents vs Tables and Rows
      - The students will work with Mongo data stores for the rest of the course
        - The intricacies emerge as you go, so be "ok" with the "use and demo to teach" model over a long theoretical discussion of noSQL databases
    - `mongod` server
      - start and stop it
      - set it as a service
      - dig in deep with the students that this is a separate server that can also run remotely
      - without it, no app can connect!
- **How** (30 min)
  - Do an interactive chart/drawing with your students on modeling out an e-commerce app (orders tables) to highlight differences
    - Note the deeply nested orders
    - This same data (product info) might live in multiple documents.
  - Lead the students in a differences and pros/cons discussion
  - Mongo is one of many NoSQL systems
  - Open the `mongo` CLI and demonstrate some basic commands
    - This is just like the `psql` tool we used in Code 301 for SQL data
    - `show dbs` - list of databases
    - `use <db>` - use a database
    - `show collections` - list all collections (tables)
    - `db.<collection>.save({object}) - create a collection and insert a record
    - `db.<collection>.find().pretty()` - get data from a collection
    - Show students the mongo cheatsheet in the class repo under `reference`
  - Introduce Compass and any other tools that you like to use or are familiar with

## TOPIC 3: ORMs and Mongoose (Code!)

- **Why** (5 min)
  - Databases have differing APIs, making them hard to move between
    - SQL and NoSQL are vastly different
  - Developers prefer a common API or set of commands to work with
    - `.save()`, `.get()`, etc.
- **What** (10 min)
  - ORM = "Object Relational Mapping"
  - Provide for a simple and common API for accessing data
  - Mongoose allows you to
    - Create a schema that defines our collection's shape
    - Easily implements CRUD operations
    - Create middleware/lifecycle functions to let us add business logic during CRUD operations
      - Before or after saving a record
      - Before or after finding a record
      - As you initialize a new record
      - etc.
- **How** (30 min)
  - Run an interactive demo (TDD), creating a simple Mongoose Schema and Model
  - Focus on the basic CRUD methods and how the data gets into the database
  - Note: We'll not be doing mongo/db testing today as we'll be using only direct mongoose methods
    - In the next class, when we introduce an interface/collection, we'll start testing
  - Once the class is clear on these basics, revisit your fetch CLI application and make it real
    - In the `fetch()` method, add the `superagent` call and log the request.body
    - After that, do a .save() of the options object to a mongoose model called `history`

## NoSQL Data Model

![nosql](../assets/nosql.png)

## Relational DB Model

![sql](../assets/rdb.png)
