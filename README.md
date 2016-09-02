# basket-app
A pretty sweet shopping list application stack built on web technologies.



## DESIGN EXERCISE FOR SR. DEVELOPERS

The aim of this exercise is to help us determine how well you might fit the developer's role at Idean. We are looking for examples of your ability to:

- Identify and solve design & implementation problems
- Describe your work and tell us why it’s good
- Understand the people for whom you are designing or coding
- Understand design requirements & specification for better implementation
- Excel at application architecture and front-end coding


Obviously, this is a take-home test, so feel free to use whatever tools and inspiration you feel you need, but make sure the response is your own.

Please provide enough briefing or illustration to get your point across through your documentation, without a face-to-face presentation of your work. Finished art is not necessary.

Above all: Have fun! If this exercise isn’t fun, this job probably isn’t for you. Spend as much or as little time as you wish.

## Exercise: Design a superior grocery shopping list application – Basket

Basket is a new application meant for online grocery shopping list management. It allows for example family members viewing and editing the list from their own computers or mobile phones. So, Basket service can be used as a mobile application and as a pc application, or it can be a responsive web service that optimizes content to each screen size.

### Instructions

Design 2–3 views of the UI for Basket

Design how these views work on pc and on mobile. Create design on concept level as wireframe model.

Mobile application should be designed as touch UI and desktop application will be used with mouse or touchpad and keyboard. For mobile you can assume that there is a virtual keyboard but you don’t need to design it.

Although you need to illustrate only a part of Basket, please think through the user flows across the service. Add brief documentation to clarify features, functionality and behaviour that is not obvious or cannot be seen directly from the design. You can assume that we know all the basics of UIs, interactions, basic components etc.

#### Include the given feature set below

There are no other restrictions (style, platform etc.) for design other than listed in these instructions. We hope you are creative with your unique solution.

### Features

- There can be several users for the same shopping list and they all view and manage the same shopping list
- Possibility to select who you share the list with (for example family members)
- One shopping list at a time, no archive required
- Viewing and editing a shopping list
- Creating a new empty shopping list
- Marking items that are already bought
- Adding comments relating to items on the list
- Sending the list via email
- Assigning items to users you are sharing the list with
- All features are available in mobile and pc. If some of the features are not included in the views but they will be somewhere else in the application please explain that in documentation briefly.

You may improve the feature set and use your professional experience and creativity

gladly to make the application more useful. You may also leave something out, but in that

case please include reasoning in the documentation.

UI development phase

As soon as You have Your Basket app figured out, please build a node based application (feel free to use frameworks like express, angular, backbone, etc). Here are few bullets to keep in mind:

node is key - we’d like to see how you organize your application routes (building an API layer is a plus)

data architecture - utilize mongoDB - you can use https://mongolab.com/ for free hosting

employ HTML5 standards

utilize SASS - we’re looking for how your SASS is organized

JavaScript frameworks are fine (Angular, Ember, React, etc) or use vanilla JavaScript. We’ll be looking at how you manage event driven programming and asynchronous data calls for both backend and frontend JavaScript.

other tools - gulp, webpack, etc.

browserstack: Chrome, Firefox, Safari, IE 10+ (or degrade gracefully), Edge

responsive UI (desktop <> mobile)

the more commenting the better

progress/manage your application development with github - we like to see how you added features

Testing - this is a big bonus. Show us your strategy for integrating testing into your process
