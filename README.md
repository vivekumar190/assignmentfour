# My method Of Implementation

# Design Part

so i have created a reusable component for card in components folder
i have written custom css for card
after that in Root ie App.js
their is main div with class 'App'
inside that i have used bootsrap Row And column for grid layout
and responsiveness.
once we fetch the data from api we can loop through userslist in this view

# Fetching Data From API Using Redux toolkit

here i have used reduxtoolkit which gives us facility to create action and reducers inside slices
and create central store which holds our data making it easy to manage state inside the componenet

for dispatching the action i am using useDispatch hook from react-redux
and for selecting the state i am using useSelector hook from react-redux

after the data is received and values are updated in the store

we can loop throught th euserlist using inside the App.js file

in this way we can ensure resuability and scalibilty of code

thank you
