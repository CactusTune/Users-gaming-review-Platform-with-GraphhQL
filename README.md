# DEXERTO-GAME-REVIEWS GRAPHQL API APPLICATION

This is a scalable and maintainable GraphQL API using Node.js, Apollo, and a NoSQL database. The API is a gaming review platform where users can review games.

## Cloning the repo

**NOTE:** Make sure you have Git installed on your system.

```bash
  # HTTPS
  $ git clone https://github.com/CactusTune/Users-gaming-review-Platform-with-GraphhQL.git 

  # SSH
  $ git clone git@github.com:CactusTune/Users-gaming-review-Platform-with-GraphhQL.git

  $ cd gameReview-api
```

## Running locally - Docker

### Prerequisites

#### Docker Installation for Mac

1. Download the latest version of Docker Desktop from Docker's site which can be found 
   [here](https://docs.docker.com/desktop/install/mac-install/)
2. Open the downloaded file and drag the Docker
3. Open the Docker app from the Applications folder.
4. Type in your Mac's password when prompted.
5. After this, Docker will configure itself automatically.

#### Docker Installation and Set up for Windows

1. Windows Subsystem for Linux is installed (instruction can be found
   [here](https://docs.microsoft.com/en-us/windows/wsl/install))

2. Have Docker Desktop installed ([Docker](https://www.docker.com/products/docker-desktop))
 

### Running the docker stack

For initial setup, run the following command in the root of the project(you can bind any port of your choice)

```bash
    $ docker build -t <image-name> .
    $ docker run -d -p 5040:4040 --env-file .env <image-name>
```


## Running locally - Manually with npm 

1. Clone this repository or download the source code.
2. Install the dependencies by running the following command: 
  ```bash
    $ npm install
  ```
3. Set up the required environment variables. Create a .env file in the root directory and add the following variables:
   
   JWT_SECRET

   MONGODB_URI

4. Start the development server with the following command: 
 ```bash
    $ npm run dev
 ```

5. Start the main/production server with the following command
```bash
    $ npm run start
 ```

 ## Run resolvers unit Tests with Jest
 ```bash
    $ npm run test
 ```
