# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Notes](#notes)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Github](https://github.com/WerSzpe/Advice-Generator-App-FrontendMentor)
- Live Site URL: [Github Pages](https://your-live-site-url.com)

## My process

### Built with

- CSS modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- Using CSS modules in react and keyframes

### Continued development

- Definitely get back to this project and see if there were changes in Advice Slip API
- Change the button hover animation because it's not what it should be right now

### Notes

There was an issue (probably still is) where API wouldn't send another slip after clicking the button (even after 2 seconds as specified in API documentation) even though it worked fine with Chuck Norris jokes API.

Additionally after adding no-cache header it would throw _TypeError: Network Error_ with some CORS errors.

I found somewhere (lost the resource) a piece of information that this error might be caused by the React development server.

## Author

- Frontend Mentor - [@WerSzpe](https://www.frontendmentor.io/profile/WerSzpe)
