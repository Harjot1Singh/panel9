# Panel9

## What is panel9?
[Cloud9](http://c9.io) is an open-sourced web IDE, however, those who wish to run it on their own servers have no easy way of managing multiple workspaces. 

Panel9 provides a frontend dashboard to launch and manage various [cloud9 v3](https://github.com/c9/core/) workspaces, inspired by [cloud9hub](https://github.com/AVGP/cloud9hub).

Built with node.js and react.

## Features
None - see todo.

## Install

Requires [node.js](http://nodejs.org) v4.2.3 LTS. 

A previous installation of cloud9 is not required.

## Configuration

Set `enabled` to `true` for the authentication type, if you wish to use it.

`logLevel` can be 0, 1, 2, 3 - which respectively logs events that debug and above, info, warnings, and errors.

## Launch

## Todo
- Create and run multiple workspaces
- Delete workspaces
- Dockerise/isolate workspaces
- Optionally define and kill workspaces after inactivity
- Authentication (Passport)
    - Github
    - Facebook
    - Local
- Multiple users
- Approval of users per workspace


[Licensed under GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)