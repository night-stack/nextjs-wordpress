# Witech Website

Use Node.js for runtime environment.
Framework NextJs
Tailwind

# Requirement

1. node js v16.14.0.

install NVM for flexsible install or manage node js :

- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
- source ~/.bashrc

install node js.

- nvm ls-remote (check version node js what you want install)
- nvm install "version" ( install node js depend of version) -> nvm install 16.14.0

2. yarn

install yarn :

npm i -g yarn

# Clone the template Website Witech

Create a new project folder:

- git clone -b development https://gitlab.com/witech-template/witech-website.git

- cd witech-website

# Run

get in folder witech-website and add yarn to that folder :

- cd witech-website
- yarn
- yarn dev

if you want run at local you must add new file .env.local in witech-website folder

the content of .env.local same with .env.production
