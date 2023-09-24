# markdown-previewer

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8467d756aedd4d6e98e1d46c3379982a)](https://app.codacy.com/gh/tupelobound/markdown-previewer/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

## freeCodeCamp Front End Development Libraries project - Build a Markdown Previewer

A simple Markdown previewer built with HTML, JavaScript, and React.

This project was completed as part of freeCodeCamp's Front End Development Libraries certificate, focusing on front end libraries including React.

## Table of Contents
- [Markdown Previewer](#markdown-previewer)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Description

The Markdown Previewer is a web application that allows users to enter Markdown text and instantly see the rendered output. It's a handy tool for writers, bloggers, and developers who want to see how their Markdown content will appear before publishing it.

Originally built on Codepen with a starter template, migrating it to Github was a great opportunity to learn a bit more about updates to React, and processing JSX using Babel. 

First version used a class component to wrap the main app. This is version 2.0, using functional components and hooks.

## Features

- Real-time Markdown preview.
- Simple and intuitive user interface.
- Supports common Markdown syntax.

## Installation

To run the Markdown Previewer locally, follow these steps:

1. Clone the repository:
```bash
$ git clone https://github.com/tupelobound/markdown-previewer.git
$ cd markdown-previewer
```

2. Install the necessary dependencies:
```bash
$ npm install
```

3. Start the development server:
```bash
$ npm start
```

4. Open your web browser and visit http://localhost:3000 to use the Markdown Previewer.

## Usage

Enter or paste your Markdown content into the editor area on the left side of the application.

The rendered HTML will appear on the right side in real-time.

Click on the expand arrows to maximise either the editor or preview pane.

## License

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to the creators of React for making it easy to build user interfaces.

The Markdown parsing is powered by the [marked](https://cdnjs.com/libraries/marked) library.

