# Pilgrim (Country search app)

The Pilgrim is a simple web application that allows users to search for countries by name or country code. It provides information about the matched countries, including their flags, official and common names, population, currency, and more.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Search for countries by name or country code:
numeric, two- and three-letter codes are supported
along with official and common names.
- View detailed information about matched countries.
- Easy-to-use and responsive user interface.

## Installation

To run the Country Search App locally, follow these steps:

1. Ensure you have npm 9.8.1 or later 
and node >= 18.18.2 installed on your machine
You can find instructions for installation here:
https://developer.ibm.com/learningpaths/get-started-nodejs/install-nodejs

2. Set current directory to the frontend folder. 

   ```bash
   cd frontend

3. (Optional) Make sure the dependencies are installed
   (they are included in the distribution)
     ```bash
   npm install
3. Run dev script, which will run both frontend and backend:

  ```bash
   npm run dev
   ```

4. (Optional) prepare your production build and configure system for optimized deployment
  ```bash
   npm run build
   ```

## Usage
Enter a country name or country code in the search input field.
Click the "Search" button or press Enter to search for the country.
View the information about the matched country, including its flag, official and common names, population, and more.
If no matching country is found, an error message will be displayed.
