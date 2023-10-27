# fxWizard

## Description

This semester, I will work on a project to develop a script tailored for Adobe After Effects. This script, named 'fxWizard', assumes the role of a tool for handling an array of tasks related to the manipulation of effects within Adobe After Effects. Whether it's the addition, removal, or modification of effects, fxWizard stands ready to simplify these processes.

## Technologies and architecture being used

### Technologies used

Front-end:

- Extendscript (built on top of Javascript)

Back-end:

- Node.js
- MySql

## Enhancing workflow with fxWizard

### User story

As a motion graphics designer, I want to efficiently manage and manipulate effects within my compositions so that I can save time and reduce errors in my workflow.

### Acceptance criteria

- 'fxWizard' should integrate seamlessly with Adobe After Effects, accessible through the user interface or keyboard shortcuts.
- It should provide a user-friendly interface that guides me through each task, ensuring I can easily specify effects and their parameters.
- The script should display clear error messages in case of any issues during execution.
- It should support undo/redo functionality for all actions performed within the script.
- 'fxWizard' should be compatible with different versions of Adobe After Effects to ensure its longevity and usefulness.

### Defenition of Done

- 'fxWizard' should be thoroughly tested to ensure stability and performance.
- Comprehensive documentation and tutorials should be available to help users understand and utilize the script effectively.
- User feedback and potential improvements should be collected to continuously enhance 'fxWizard' and meet evolving user needs.

### User Story 2

As a motion designer using 'fxWizard', I want to be able to seamlessly add custom data to my web application account so that I can enhance my motion design projects using this personalized content within the script.

### Acceptance Criteria

- The web application should provide a user-friendly registration process, allowing me to create an account easily.
- After registering and logging in, I should have access to a dedicated "Custom Data" section on my profile dashboard.
- The web application should allow me to edit or update my existing custom data entries whenever needed.
- 'fxWizard' should have a built-in feature to connect to the web application, allowing me to access my custom data directly from within the script.
- When importing custom data into 'fxWizard', it should display a user-friendly interface that enables me to choose and apply the custom data to my After Effects compositions effortlessly.

### Definition of Done

- The web application's registration and custom data management features should be thoroughly tested for functionality and security.
- The integration between the web application and 'fxWizard' should be extensively tested to ensure it works seamlessly across different setups and configurations.

## Database

- The client-side AE script (Adobe After Effects) collects the username and password from the user through a user interface.
- This client-side AE script makes an HTTP request to the server-side script (Node.js).
- The server-side script receives the request, validates the username and password, and interacts with the database to retrieve or manipulate data.
- The server-side script sends a response back to the client-side script, which can then display the data or take other actions based on the response.
