# Strain Brain

Many people use medical marijuana on a regular basis, however every marijuana strain and individual are not built the same. Strain Brain was built with medical marijuana patients in mind, in an effort to simplify the process of finding the right strain for the right individual.

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. Download and install [Node.js](https://nodejs.org/en/), if not already installed on your local machine.
2. Install React with the following terminal command:
```
npm install --save react
```

3. Install ```ReactDOM``` with the following terminal command:
```
npm install --save react-dom
```

4. Install ```React Bootstrap``` with the following terminal command:
```
npm install react-bootstrap bootstrap
```

5. Install ```json-server``` with the following terminal command:
```
npm install -g json-server
```

6. Get an API key for [The Strain API](http://strains.evanbusse.com//). Do NOT share this API key with anyone else.

7. Clone my [repository](https://github.com/TheTechTravis/strain-brain) to your local machine.
8. Navigate to the project folder. In the ```src``` directory, you will see a file named ```.Settings.js``` (note the dot at the beginning).
9. Copy that file with ```cp .Settings.js Settings.js```. The ```Settings.js``` file is already in the ```.gitignore file```, so it won't ever be tracked by git. This will prevent you from accidentally sharing your API key with other people.
10. Copy the API key that you registered into it's appropriate place in the ```Settings.js``` file.

### Usage

A step by step series of examples that tell you how to get a development env running

1. In your terminal, navigate to the project directory. 

Example:

```
cd /Users/travis/workspace/strain-brain
```

2. From the root of this directory, run the following terminal command in order to start up ```React```.

```
npm start
```

3. Open a new terminal tab and navigate to the ```api``` directory.

Example:
```
cd /Users/travis/workspace/strain-brain/src/components/api
```

4. Run the following terminal command in order to start up your ```json-server```.

Example:
```
json-server -p 8088 -w database.json
```

5. Open your web browser of choice and navigate to ```http://localhost:3000/```

6. You will be presented with a login/registration page if this is your first time using the application. Register an account (NOTE: USE DUMMY DATA! Do NOT use your real email or password).

7. From this point on, the web application itself has "Toggle Help" options, but for the sake of clarity I'll include the correct flow of usage. As a new user, you will first want to navigate to the ```Conditions``` tab. From there, you will be able to select different medical conditions to set up your profile. These medical conditions are used to generate a list of recommended strains which can help the patient with the conditions that they have. After setting your conditions, navigate back ```Home``` to view your customized results. The home screen will now have strain recommendations for you to try. If you enjoy a particular cannabis strain, you can add it to your ```Puff``` list. If you dislike a particular cannabis strain, you can add it to your ```Pass``` list. Photos of this workflow will be provided below.

8. Enjoy!


## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [React Bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework Rebuilt for React.
* [The Strain API](http://strains.evanbusse.com//) - The most popular front-end framework Rebuilt for React.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/TheTechTravis/strain-brain/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Version Control

I use [Git](https://git-scm.com/) for version control.

## Authors

* **Travis Stevenson** - *Original Creator* - [TheTechTravis](https://github.com/thetechtravis)

As of thus far, this project has been planned, developed, and tested exclusively by myself, though I cannot guarantee that I won't receive contributions in the future, so I will provide a list of all [contributors](https://github.com/TheTechTravis/strain-brain/graphs/contributors) to be completely transparent.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/TheTechTravis/strain-brain/blob/main/LICENSE.md) file for details

## Acknowledgments

* Thank you to the creator of [The Strain API](http://strains.evanbusse.com//), which I used to get information for each cannabis strain. My application could not exist without the data provided by that external API.
