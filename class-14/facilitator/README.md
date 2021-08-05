# Facilitators Guide: Events - Personal Project

## Overview

In this last class of the Event Driven Applications module, we'll be having the students explore events on their, by building a project of their own design, as a small group.

### How does this topic fit?

**Where we've been**:
To this point, we have explored event driven architecture through common Node.js events and more formal network event processing with Socket.io, as well as guaranteed (and ordered) delivery of notifications with a queue. Students should be familiar with the concept of multiple services communicating via events and payload through a common "hub"

**What are we focusing on today**:
In this class, students will form small groups and "get into the sandbox" with their new set of tools and create their own small scale event driven application.

**Where we're headed**:
This class concludes the Event Driven Applications block.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice with the AWS Demos, so that you can showcase how events are used at massive scale at a large cloud service provider.
  - You'll need to make sure your credentials are setup properly

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- The previous lab was to wire up Socket.io with standard events along with support for namespaces and rooms to divide the messages into groups and sub-groups, and a queue
  - Most likely, the rooms would present the largest struggle for them
  - The queue itself should be reviewed
  - Focus on how you ensure that vendors don't hear events intended for other vendors (Rooms)

### TOPIC 1: AWS Eventing Services

- **Why** (5 min)
  - The largest cloud services are all based on events
- **What/How** (30 min)
  - Take a quick tour around AWS
  - Create a lambda function (just a simple one) that is "triggered" by uploading a file to an S3 Bucket
    - How did they do this?
  - Create a quick API route that runs a lambda function
    - How did they do this?
  - Do a quick tour of AWS 2 event services: SNS and SQS to show how they wire things up
    - Run the demo, by coding out Pub/Sub using SNS/SQS to show how you can do that same sort of thing in code
- **Experimentation and Discovery Ideas**
  - Commercial Queue Software and Services are big business!
    - AWS SQS and SNS, Azure Event Hub, RabbitMQ

## Lab Notes

- This assignment is to be in pairs/small groups. If you've had your class work in pairs on the previous assignments, keep them paired up, as they'll have built up some familiarity and trust

## What might students struggle with today?

- Coming up with an idea for their mini project

## Past bugs, issues or surprises...

## General Comments and Notes
