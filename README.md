# Welcom to NodeMouses

NodeMouses is a fancy web-application based one nodejs and socket.io that display name and mouse of of other users of your web page in real-time

## Install instructions

install all this on your server

dependencies:
  * git-core
  * openssl 
  * libssl-dev
  * g++ 
  * curl 
  * apache2-utils

On Ubuntu:
    sudo apt-get install g++ curl libssl-dev apache2-utils
    sudo apt-get install git-core

### install NodeJS

[NodeJS](nodejs.org)

    git clone git://github.com/joyent/node.git
    cd node
    ./configure
    make
    sudo make install
    
### install NPM (node package manager)

[npm](http://npmjs.org)

    curl http://npmjs.org/install.sh | sh
    
### insatll socket.io

[socket.io](http://socket.io)    

    npm install socket.io
    
### install NodeMouses

[NodeMouses](github.com/illiatdesdindes/nodemouses)

in your server's root directory
    
    git clone git://github.com/illiatdesdindes/nodemouses.git
    
## How to use

on your server:

    cd nodemouses
    node server.js

then:
  1.  get a friend :)
  2.  fire up your respective web browsers
  3.  go to http://yourDomain/nodemouses/mouse.html

