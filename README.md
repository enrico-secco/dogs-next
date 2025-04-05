# Dogs Next

Dogs Next is a social network for pet photos, built with modern web technologies. Users can create an account, share photos of their dogs, interact with other users, and gain insights through detailed statistics.

**Note:** The data will be erased every 10 minutes on the API, retaining only the basic data for the system.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Packages Used](#packages-used)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Usage](#usage)

## Features

- **User profile creation**: Auth workflow, create user, recover password
- **Posting photos of your dogs**: Share photos of your pets with their details
- **Exploring and commenting on other users' posts**: Interact with the community
- **Checking your posts on a dedicated page**: View all your posts in one place
- **Viewing post statistics**: Get insights using Victory charts library
- **Infinite scroll on feed**: Seamlessly load more posts as you scroll

## Technologies Used

- [Next.js](https://nextjs.org/) (APP Router)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)

## Packages Used

- [Jose](https://github.com/panva/jose): Used to validate the JWT Token
- [Victory](https://formidable.com/open-source/victory/): Used to create graphs on the account statistics page

## Getting Started

To get a local copy up and running, follow these steps.

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/enrico-secco/dogs-next.git
    ```
2. Navigate to the project directory
    ```sh
    cd dogs-next
    ```
3. Install the dependencies
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Running the Project

To start the development server, run:
```sh
npm run dev
```
or
```sh
yarn dev
```

The application will be available at `http://localhost:3000`.

## Usage

To use the platform, you can log in with the following credentials:

- **Username:** dog
- **Password:** dog