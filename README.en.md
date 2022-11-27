**Read in other languages: [English](README.en.md), [Українська](README.md).**

# Preparing a project

1. You have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Creat with [Create React App](https://github.com/facebook/create-react-app).
   To get acquainted and configure additional features
   [refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running the `npm start` command.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

# Admission criteria

- The `goit-react-hw-06-feedback` repository has been created.
- When submitting homework, there are two links: to the source files and the
  working pages of each assignment on `GitHub Pages`.
- Redux-state stores the minimum required set of data.
- There are no errors or warnings in the console when running the job code.
- For each component has a separate folder with the React-component file and
  styles file.
- For the components are described `propTypes`.
- Use of the library `Redux Toolkit`.

## Contact Book.

Refactor the "Contact Book" application code by adding state control using the
[Redux Toolkit](https://redux-toolkit.js.org/) library. Let the Redux state look
like this.

```jsx
{ contacts: [], filter: "" }
```

- Create a repository with `configureStore()`
- Use `createSlice()`
- Create actions to save and delete a contact, and update the filter
- Link React-components to Redux-logic with bibliothec hooks
  [react-redux](https://react-redux.js.org/)
- Use the Redux Persist library to save an array of contacts to local storage
