# Welcome Page

The welcome page will be displayed when the user first visits the website or if there is no local data available.

## Mockup

The first time the user opens the app, a welcome screen will be presented.
If the app finds any data in the local storage, the screen will not be displayed.

### Desktop

![Welcome Page Desktop](mockups/welcome-desktop.svg)

If the user clicks on the bottom right plus button, a modal will open explaining the general steps.

![Welcome Page after Create was clicked Desktop](mockups/welcome-on-create-clicked-desktop.svg)

Upon clicking the action button, a first plan will be created. The user then needs to define the timerange of the shift plan.

![First Plan](./mockups/first-plan.svg)

After defining the timerange, a calendar view will be created and presented to the user.

![First Plan after Date save](./mockups/first-plan-on-save-date-clicked.svg)

The user can then hover over (or on mobile tap on) any day (represented as rectangles) and add a shift.

![First Plan add Shift Step 1](./mockups/first-plan-add-shift-step-1.svg)

A modal will be displayed to add a shift entry. Some editing features like repetition are added for convinience.

![First Plan add Shift Step 2](./mockups/first-plan-add-shift-step-2.svg)

Shifts will be displayed as calender entries in the overview. The next entry can be added just like the first.

![First Plan add Shift Step 3](./mockups/first-plan-add-shift-step-3.svg)

A fully planned Calender could then look like this image below. Multiple shifts on a day are stacked beside each other and split across days if necessary. Shifts may be colored.

![fully planned](./mockups/first-plan-all-shifts.svg)

Now it's time to build your team. To do this, have a look at the bottom half of the sidebar on the left. There is a section for your team. You can define multiple teams and select one of them for your shift plan.

First, click on on the +-Button next to 'Your Team'. A new modal will open, were team members can be added quickly. Random colors will be selected for each team member. You can also click on the colors to generate a new color.

![create team](./mockups/create-team.svg)

![](./mockups/first-team-created.svg)

### Mobile

Mobile Views will not be displayed to save space. Not all pages will have a mobile.

[Welcome Page mobile](mockups/welcome-mobile.svg)
