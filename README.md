# CodersCamp 2021 - JoaoTeam

## Project 1 - Star Wars Quiz

> [Live version](https://coderscamp2021.github.io/JoaoTeam-Project-1/)

### Contributors

Mentor: [João Kiakumbo](https://github.com/JK-Sebastiao)

Mentees:

- [Justyna Chmielińska](https://github.com/J-emi) (Development Manager)
- [Bartłomiej Pająk](https://github.com/spidero7) (Product Owner)
- [Patryk Pierzchała](https://github.com/itspatys)
- [Weronika Pietrzak](https://github.com/werpietrzak)
- [Wojtek Pugowski](https://github.com/WojtekPugowski) (Tech Lead)
- [Maciej Wester](https://github.com/WestMac)

### General info

This is a simple **web application** in the form of a **quiz** to test knowledge about the **Star Wars** universe. The assumption was that the application would be part of a promotional campaign for a well-known brand of breakfast cereals cooperating with Disney. The project was carried out as part of the largest open web programming course in Poland - [CodersCamp 2021](https://www.coderscamp.edu.pl/). The main goal was to show the current skills of the participants in practice.

<p align="center">
  <img width="800" src="https://i.imgur.com/hYsuUGT.png">
</p>

### Technologies

Project was created with:

- HTML
- CSS
- Java Script
- [Star Wars API](https://swapi.dev/)

Layout responsiveness was obtained using a CSS Gird. The client provided [a prototype of the user interface](https://www.figma.com/file/4HOOjnEYjb7W7xEh2Vb4lx/CodersCamp2020.Project.JavaScript.StarWarsQuiz?node-id=256%3A107) on which application developers modeled.

### How it works?

1. At the beginning, the user can choose one of the three game modes (People, Vehicles or Spaceships) and read rules.
2. Next, a user answers questions about who or what is displayed in the image on the left. There are four options to choose from, of which always only one is correct.
3. One game lasts one minute. The passage of time is shown by the lightsaber at the bottom of the screen.
4. After the game, the player's score is saved locally in a ranking for the browser via LocalStorage and the best results are shown as the Hall of Fame.

<p align="center">
  <img width="800" src="https://i.imgur.com/n5LQ4A9.png">
</p>

### Setup

To run this project locally, run bellow commands:

```
$ git clone https://github.com/CodersCamp2021/JoaoTeam-Project-1.git
$ npm install
$ npm run start:dev
```

#### Build

To build this project run bellow commands:

```
$ git clone https://github.com/CodersCamp2021/JoaoTeam-Project-1.git
$ npm install
$ npm run build
```

_You may use also github-pages to view deployment._

### Room for Improvement

Tests should be implemented in the application. At the moment, the client agreed to forgot them due to limited time.

### Project Status

No longer being worked on. The team had to start working at a new project. :rocket:

### Inspiration

This project was based on [this idea](https://github.com/CodersCamp2020/CodersCamp2020.Project.JavaScript.StarWarsQuiz/blob/main/README.md).
