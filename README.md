
## RumMeQuick Backend

This is the backend of `RunMeQuick` project. You will find the frontend [here](https://github.com/mdrobin45/RunMeQuick-Client)
## Run Locally

Clone the project

```bash
git clone https://github.com/mdrobin45/RunMeQuick-Server.git
```

Go to the project directory

```bash
cd RunMeQuick-Server
```

Install dependencies

```bash
npm install
```



#### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`MONGO_URI`

`JWT_SECRET`

`CORS_ORIGIN`

`PORT`

For easier to setup environment variables, you can just rename `.env.development` file to `.env` from root of the project directory.

**Please Note:** You may need to edit `CORS_ORIGIN` from `.env.development` file base on your port of running frontend.

### Install Programming languages
To compile different language code in local system you need to setup those compiler into your system first. You can follow the instruction of installation.

#### Installing python to run python code
 - Please download python from [here](https://www.python.org/downloads/)
 - Run python setup file you downloaded and install it into your system.
 - When installing Python in your system make sure to check the box that says "Add Python 3.x to PATH" during the installation process.

#### Installing Node.js to run javascript code
- Please download NodeJs from [here](https://nodejs.org/en/download/current)
- Run NodeJs setup file you downloaded and install it into your system.

#### Installing Go to run go language code
- Please download Go from [here](https://go.dev/doc/install)
- Run Go setup file you downloaded and install it into your system.
- Please add `bin` directory `(e.g., C:\Go\bin)` to your system environment variable. You should find this `bin` directory in `Go` installation path.

#### Installing Ruby to run ruby language code
- Please download Ruby from [here](https://www.ruby-lang.org/en/downloads/)
- Run ruby setup file you downloaded and install it into your system.
 - When installing ruby in your system make sure to check the box that says "Add Ruby executables to your PATH" during the installation process.

#### Start Server
  Open project folder in terminal and run following command
```bash
  nodemon start
```
## Used Technology

**Server:** NodeJs, Express Js, Mongoose

**Database:** MongoDB

