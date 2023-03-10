# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Tasks:
1: Add custom ID column as string to Agents table.


2: Update API (create agent and update agent) to add unique custom ID for agents for specific facility from facilities admin.
    - Given I am a facility admin 
    When I am registering or updating the agent in the system 
    I should be able to create or update the agent with custom ID
    then the custom ID should get reflected in the agents table.

Depends on  task: 1

3: Update getShiftsByFacility to return agents custom ID in the agent metadata in the response.


Depends on  task: 1,2

4: Update the generateReport to include agent custom ID in the response PDF.

Depends on  task: 1,2,3

Estimates: Small Size(1 Day)

