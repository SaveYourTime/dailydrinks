# dailydrinks

![Imgur](https://i.imgur.com/OqdsfwU.png)
![Imgur](https://i.imgur.com/SUEdbL6.png)
![Imgur](https://i.imgur.com/PiSMVwK.png)

## Demo

Here is a working live demo : https://saveyourtime.github.io/dailydrinks/

## Technologies

- HTML5
- CSS3
- JavaScript
- React
- React Router
- styled-components
- Responsive Web Design

## Features

#### Route Pages with React Router
Using `React Router` to manage home page and order page.
#### Data Store with Web Storage API
Using `localStorage` to store data on client without using database.
#### Style Components
Using `styled-components` to build UI components.
#### Generate Random Image from Unsplash
Fetching image from unsplash to make app looks better.

## Pages Description

#### Home Page
1. Home page is a list to list all the orders
2. You can `add` a new order to the list by tapping the add button at bottom-right corner and filling out a form
3. You can `delete` any order in the list by tapping the button with the trash icon
4. You can also `view` more details or `edit` the order by tapping the button with the pencil icon
#### Order Page
1. Order page shows more detail with the order
2. Each `order` contains the following fields:
    - A single-line text of it's `name`
    - The number `price` of the order
    - A multi-line **optional** text to specify additional `notes`
3. You can `add`, `edit` or `delete` each item in the order list