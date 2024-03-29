# Recipe Generator Project Setup Guide - Spring'24

Hello! Welcome to the Recipe Generator Project for Spring'24. This guide will walk you through cloning the repository, working on your own branch and setting up your development environment. Please make sure to read through the whole guide once before you start working through the steps.

## Project Managers

- Neel Ghoshal 
- Varun Sharma

## Cloning the Repository

To get started, clone the repository to your local machine:
    
    
    git clone https://github.com/Project-Code-Recipe-Generator/Recipe-Generator.git

## Working on Your Own Branch

To maintain the integrity of the main codebase, all contributors are required to work on their own branches. Follow these steps to set up and work on your branch:

1. **Create and Switch to Your Branch**

    After navigating to the project directory, create a new branch and switch to it using:

    ```
    git checkout -b <your-branch-name>
    ```

    Replace `<your-branch-name>` with your own name for now, such as `Varun` or `Neel`. We might create separate branches for tasks in the future. 

2. **Make Changes and Commit**

    Make your changes in the codebase. Then, add and commit those changes:

    ```
    git add .
    git commit -m "Your commit message"
    ```

3. **Push Your Branch to the Remote Repository**

    Push your branch and changes to GitHub:

    ```
    git push -u origin <your-branch-name>
    ```

4. **Keep Your Branch Updated**

    Regularly update your branch with changes from the main branch to minimize merge conflicts. Everytime you begin working, you can run the following git commands to make sure your branch is kept updated:

    ```
    git checkout main
    git pull
    git checkout <your-branch-name>
    git merge main
    ```

5. **Pushing Your Branch's Code onto 'main' Branch**

   We will update this section later when tasks are assigned. For now, please do not make any changes to the main branch and make sure you're always working in your own branch.

## Setting Up the Development Environment

This setup assumes:
- The user has `git`, `python3`, and `pip` installed on their machine.
- If you do not, install github desktop and python3 from the windows store (Python shouuld be installed already on a Mac)

1. **Navigate to the Project Directory**

    Open a terminal and run:

    ```
    cd Recipe-Generator
    ```

2. **Create the Virtual Environment**

    Create a new virtual environment named `env` by running:

    ```
    python3 -m venv env
    ```

3. **Activate the Virtual Environment**

    Activate the created virtual environment (MacBook):

    ```
    source env/bin/activate
    ```

    
    Activate the created virtual environment (Windows):
    
    Run Windows Powershell as administrator

    ```
    Set-ExecutionPolicy RemoteSigned
    
    ```

    Now run,

   ```
   .\env\Scripts\Activate.ps1
   
   ```

5. **Install Required Dependencies**

    Install all the required dependencies listed in `requirements.txt`:

   Open Integrated Terminal in test-env, and run the following:

    ```
    pip install flask
    pip install -r requirements.txt
    ```

## Getting Started

With the development environment set up, you are now ready to start working on the Recipe Generator Project.

## Deactivating the Virtual Environment

When you're done working for the day, you can deactivate the virtual environment by running: 

    deactivate



