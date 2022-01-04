
# CodersCamp 2021 - TeamJao
## Project 1 - Star Wars Quiz 

### Contributors 
**Mentor:** João Kiakumbo

**Mentees:**
* Justyna Chmielińska (Development Manager)
* Bartłomiej Pająk (Product Owner)
* Patryk Pierzchała
* Weronika Pietrzak
* Wojtek Pugowski (Tech Lead)
* Maciej Wester

### General info
This is a simple **web application** in the form of a **quiz** to test knowledge about the **Star Wars** universe. The assumption was that the application would be part of a promotional campaign for a well-known brand of breakfast cereals cooperating with Disney. The project was carried out as part of the largest open web programming course in Poland - [CodersCamp 2021](https://www.coderscamp.edu.pl/). The main goal was to show the current skills of the participants in practice.

### Technologies
Project was created with:
* HTML
* CSS
* Java Script 
* [Star Wars API](https://swapi.dev/)

### How it works?
1. At the beginning, the user can read the rules and choose one of the three game modes - People, Vehicles or Spaceships. 
2. Next, a user answers questions about who or what is displayed in the image on the left. There are four options to choose from, of which always only one is correct.
3. One game lasts one minute. The passage of time is shown by the lightsaber at the bottom of the screen.
4. After the game, the player's score is saved locally in a ranking for the browser via LocalStorage and the 3 best results are shown as the Hall of Fame.

### Setup
To run this project locally, install it using npm:
```
$ npm install
$ npm run start:dev
```

### Room for Improvement
In the next step, tests should be implemented in the application. At the moment, the client agreed to forgo them due to limited time.

### Acknowledgements
This project was based on [this idea](https://github.com/CodersCamp2020/CodersCamp2020.Project.JavaScript.StarWarsQuiz/blob/main/README.md).
