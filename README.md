<!-- Add banner here -->

# Project Title

### **Weather Journal App Project by [udacity](https://learn.udacity.com/nanodegrees/nd0011-fwd-t2/parts/cd0429/lessons/ls1847/concepts/3a60cae7-1938-4e37-92de-ec63f975e9b6)**


# Demo-Preview

<!-- Add a demo for your project -->
This project requirement is to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) 

# Table of contents

<!-- After you have introduced your project, it is a good idea to add a **Table of contents** or **TOC** as **cool** people say it. This would make it easier for people to navigate through your README and find exactly what they are looking for.

Here is a sample TOC(*wow! such cool!*) that is actually the TOC for this README. -->

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [License](#license)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)


To use this project, first clone the repo on your device using the command below:

```git init```

```git clone https://github.com/IslamMahmoudH/Weather-Journal-app-project.git```

# Usage
[(Back to top)](#table-of-contents)

<!-- This is optional and it is used to give the user info on how to use the project after installation. This could be added in the Installation section also. -->
To use this Project just follow the intallation instruction first.
1. run the server.js file through command line `node server.js`, Please don't forget to to be inside your folder path where you clone the project to.
2. Open your web browser (like: Google Chrome) then type `localhost:3000` or `127.0.0.1:3000`, the web application should run for you.
3. Enter the Zip code for the city you like to know the weather at, and enter how your feel right now.
4. Press `Generate` button to get the weather for you.
    
    
# Development
[(Back to top)](#table-of-contents)

The Project main file splited into ``` server.js ``` file, and the main folder ```website``` which hold the website application data.

The ```website``` folder contain the ```app.js``` file, the ```index.html``` file, and the `CSS.css` file.

Mainly, You are going to work with only two files which are the `server.js` and the `app.js` files only, the first one is resonsible for the server side code, and the other one is responsible for the client side code.

1. In the `server.js` file there is 3 main funciton:
    - the first one is `listening` function and it's used to run the server at specific port (The port i used is `3000`).
    - the second one is `arrow function` used inside the `app.get()` method, and it's used to get data from the client side code at ```url: '/all'```.
    - The third one is `arrow funtion` used inside the `app.post()` method, and it's used to to post data to to created project object `projectData` we created before.
    Note that the `arrow function` used in `app.get()` and `app.post()` used two Parameters. `(req, res)` where `req` stands for `required` and `res` stands for   `response`. and both `arrow function` send the data back to the `projectData` objected created at line `2` in the code.

    I created an empty array called `data` to hold the whole data that user entered, while runing the server.

    the rest of the code is the same as simple server side code which require `express` package, `body-parser` package as middleware, and the `cors` package. 


2. in the `app.js` file:
    - Creating three variable to hold the `url` we want to fetch the data from:
        - The first variable is the one who hold the `siteURL`, i get this url from [Here](https://openweathermap.org/current#zip)
        - The second one to Hold my `apiKey` i get after signup at [openweathermap.org](https://openweathermap.org/).
        - The thirs one is to hold the `tempUnit` i get it's code from [Here](https://openweathermap.org/current#data).
    - Adding an `eventListener` to the `Generate` button, so that when `click` on, it should do some fuctions:
        - The first one is the `generateData` function which `fetch` data from the `fullUrl`, to get the `fullURL` we had to build it after the user enter his zip code so we had to wait for that, and the we concatenate the whole `url` variables together into one single `fullURL` variable. so that function will be `async` function that needs to `await` for `fetch` the required data to build the `fullUrl`.
        - `.then()` the second function is used to post data after `fetch` data from the 'url` we defined in the `server.js` file using the `app.post()`.
        - `.then()` the third function is used to display to the user on the website, using the `projectData` object where we saved the data we collected. 
        

    
# Contribute
[(Back to top)](#table-of-contents)

feel free to contribute or use this code as it's provided for free from udacity web developement professional track course.

i only implement some function to make it based on a server code, and some function to help fetching data through Openweathermap.org website.

### Sponsor
[(Back to top)](#table-of-contents)

This only a project code, so if you like my code feel free to contact me trough my [Email](eslam77712@gmail.com)

all credit for the source code goes to [udacity.com](https://www.udacity.com/) for providing the starting code and the guidance to build this applicaiton.

### Adding new features or fixing bugs
[(Back to top)](#table-of-contents)

feel free to report any issue, bugs or improvement through:

you should use a [issue template](https://github.com/navendu-pottekkat/nsfw-filter/blob/master/ISSUE_TEMPLATE.md) and a [pull request template](https://github.com/navendu-pottekkat/nsfw-filter/blob/master/PULL_REQ_TEMPLATE.md)(click for examples) 


### Sources
[(Back to top)](#table-of-contents)

1. [udacity.com](https://www.udacity.com/)
2. [openweathermap.org](https://openweathermap.org/)
3. [writing a good README.md](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
4. [This man's code help me to start think about my project](https://github.com/tem-nik/Weather-Journal-App)
5. [udacity web development professional track](https://emc.udacity.com/c/egyptfwd/catalog/gOOOLCSBncRvbr8y/i/nd/nd0011-fwd-t2)


# License
[(Back to top)](#table-of-contents)

[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)

# Footer
[(Back to top)](#table-of-contents)



Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) 
 
