# Delivery Fee Calculator

This project was created with [Create React App](https://github.com/facebook/create-react-app).

<hr/>

## Prerequisits

This is already installed in your computer

- node version 16.x

In the project directory, you should run <code>npm i</code> to install all the dependencies :

```
$ npm i
```

You might encounter with some warning of **high severity vulnerabilities**.\
My app still work perfectly even though there are warnings.

Create React App was created by Dan Abramov.
You can read his article about this matter for the more information.

[Link to the article](https://overreacted.io/npm-audit-broken-by-design/)

<hr/>

## Following Scripts also work for my project.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

To see the test report, please add surfix `-- --coverage --watchAll`.

```
npm test -- -- coverage --watchAll
```

It show the result in terminal.
And it will auto generate the coverage folder and you can see the test report if you open `coverage/lcov-report/index.html` file.

Here is the screenshot of the test report of this project.
<img width="1440" alt="Screenshot 2023-02-05 at 15 14 44" src="https://user-images.githubusercontent.com/63042736/216824685-295ce956-b925-4211-b668-e3d51c0a1ada.png">


For the list of the Test you can see [TestList.md](./TestList.md).


**if you get error with puppeteer please reinstall npm package version @18.1.0**

```
$ npm i puppeteer@18.1.0
```

Also this app should run on http://localhost:3000 to do the end to end test.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
