# Daily-Work-Planner

##  Descritpion 
The Daily Work Planner app is a simple calendar application that enables users to save events for each hour of the day. This browser-based app leverages dynamic updates to HTML and CSS, powered by jQuery. It provides an intuitive and user-friendly interface for managing and organizing daily events.

Key Features:
1. Interactive Hourly Layout: The app presents an hourly layout, displaying the hours of the day vertically as rows. Each row contains a time slot, event input field, and a save button. Users can easily navigate through the hours to input and save events.
2. Event Input and Save: Users can enter event details in the corresponding input field for each hour. After entering the event, they can click the save button to store the event for that specific hour. The app ensures that events are saved persistently, so users can revisit the page and view their previously saved events.
3. Current Time Highlight: The app dynamically highlights the current hour to provide a visual cue for users, making it easy to identify the current time slot. This feature helps users stay organized and aware of the ongoing hour while planning their day.
4. Dynamic Date and Time Handling: The Daily Work Planner uses a date and time handling solution, such as the Day.js library, to work with dates, times, and their formatting. This ensures accurate and consistent representation of the current date and time, as well as other date-related functionality within the app.
5. Responsive Design: The app is built with a responsive design approach, allowing it to adapt to various screen sizes and devices. Whether accessed on a desktop, tablet, or mobile device, the EventCalendar app offers an optimized user experience without sacrificing functionality.
6. User-Friendly Interface: The app provides an intuitive and easy-to-use interface. Users can effortlessly input and save events, navigate through different hours, and view their schedule at a glance. The clean and visually appealing design enhances the overall user experience.

Technologies Used:
1. HTML: Provides the structure and layout of the calendar app.
2. CSS: Defines the styles and visual presentation of the app.
3. JavaScript (jQuery): Enables dynamic updates to the HTML and CSS, handling user interactions, event storage, and time management.
4. Date and Time Library (e.g., Day.js): Assists in working with dates, times, and related functionality within the app.

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Credits](#credits)

##  Overview

### The Challenge
Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
### User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
### Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

##  Usage
1. At the start of your day, open the document stored on your local device. This document will serve as your planner for the day.
2. Scroll down to view the timeblocks dedicated to the current day.
3. To edit the events within a specific timeblock, simply click on the corresponding timeblock.
4. After making the necessary changes, click the save button located on the right side of the screen to save the event.
5. To ensure that your modifications are reflected, refresh the page.
6. Please note that any events not saved within the timeblocks before refreshing the page will not be tracked locally.

Link to URL: https://koshea1124.github.io/Daily-Work-Planner/

##  Screenshot
![image](https://github.com/koshea1124/Daily-Work-Planner/assets/119077249/abb44ff6-4dfd-43ac-9503-9ab33930ebc2)

##  Credits
[Day.JS Docs](https://day.js.org/docs/en/display/format)
[JQUERY Docs](https://api.jquery.com/)
[Code Academy](https://www.codecademy.com/catalog)

