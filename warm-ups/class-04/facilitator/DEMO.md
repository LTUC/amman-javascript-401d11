# Demos: Data Modeling

We're hitting on 2 major points today

- Mongo as a database
- Mongoose Schemas as a way to model and interact
  - Build out a "Food" data model with a schema (and potentially your validator library)
  - Later, we'll swap these out for Mongoose schemas

## Models

> `demo/mongo`

- Create a very simple mongoose schema file for food
- The code is nice and simple, and should reinforce your lecture on modeling
  - Schemas present data shape and validation
  - The ORM (Mongoose) provides CRUD functionality
- As you build and use the schema, show the data in your mongo client
  - CLI, Compass, etc.
  - Good for the students to see a couple of tools that can show them their database.
  - Also good to see that code can put things into (or remove them) from the database
  - Compare and contrast this with PG and SQL

This demo should be built in 2 phases.

### Creating and directly using a Mongoose Model

In this phase, simply build out the Mongoose model and show how as you call the mongoose model methods directly from the app, you can insert, update, and delete items in the Mongo database.  This is the first, and most basic step in working with Mongo.

- Node App: `using-mongoose.js`
- Data Model: `models/food-model.js`

### Collection Class

In phase 2, we'll still be using our Mongoose model. However, we'll be creating an ES6 class to use as an more standardized way to interact with the model. Remember that our API is already coded to use simpler, more common methods: `create()`, `get()`, `update()`, and `delete()`. This "collection" class provides those methods for the API and then in turn calls the correct Mongoose methods.

#### Why?

- The Model itself can still do all of the complex Mongoose things (hooks, joins, etc)
- The API keeps calling the methods it already knows how to call.
- This allows us to, in the future, add Postgres models, or other database models and if we always write a "collection" class in front of them, the API can stay simple
