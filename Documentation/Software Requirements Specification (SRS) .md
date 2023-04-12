# SoundHive

## Introduction

### Purpose

The purpose of this Software Requirements Specification (SRS) document is to outline the requirements for the development of SoundHive, an audio chat platform that allows users to join virtual spaces where they can communicate with others in real-time through voice chat.

### Scope

The scope of this project includes the development of a web application using the following technologies:

- React.js for front-end development
- Node.js for back-end development
- Firebase for authentication, database and storage management
- WebRTC and socket.io for real-time audio communication
- 1.3 Definitions, Acronyms, and Abbreviations
- SRS: Software Requirements Specification
- React.js: A JavaScript library for building user interfaces
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine
- Firebase: A mobile and web application development platform
- WebRTC: A free, open-source project that provides web browsers and mobile applications with real-time communication (RTC) via simple application programming interfaces (APIs)
- Socket.io: A JavaScript library for real-time web applications

## Overall Description

### Product Perspective

SoundHive is a standalone web application that allows users to join virtual spaces where they can communicate with others in real-time through voice chat. The application will be accessible via any modern web browser and will require users to create an account using their email address and name.

### Product Features

The following are the main features of SoundHive:

- Registration: Users can create an account on the platform by providing their email address and name.
- Dashboard: Upon logging in, users are taken to their dashboard where they can see the Broadcasting Now (Active Spaces) section, which shows all the currently active spaces on the platform. Users can see the name of the space, the description, and the number of active participants. They can join any active space by clicking the join button next to the space name.
- Space Creation: Users can create their own spaces by providing a name and description for the space. They can also set a date and time for the space to become active.
- Offline Spaces: This section shows all the spaces that are not currently active but have been created by users. Users can join any offline space by clicking the join button next to the space name.
- Inviting Others: Users can invite others to join their space by sharing a link or sending an email invitation.
- User Profile: Users can view their own profile and update their information, including their name and email address.
- Search: Users can search for spaces based on keywords or topics.
- Mute and Leave: Once users join a space, they have two options - to mute their microphone or to leave the space.

### User Classes and Characteristics

The target audience for SoundHive is anyone who wishes to communicate with others in real-time through voice chat. The application is designed to be user-friendly and accessible to people of all ages and technical backgrounds.

### Operating Environment

SoundHive will be accessible via any modern web browser on desktop and mobile devices. The application will be hosted on a cloud-based platform.

### Design and Implementation Constraints

The design and implementation of SoundHive will be constrained by the following:

- The application must be developed using React.js and Node.js.
- The application must use Firebase for authentication, database and storage management.
- The application must use WebRTC and socket.io for real-time audio communication.

## Functional Requirements

### Registration

The system shall allow users to create an account by providing their email address andname. The system shall verify the email address and ensure that it is unique. The system shall store the user's account information in the database.

### Dashboard

Upon logging in, the system shall display the user's dashboard, which shall include the Broadcasting Now (Active Spaces) section, showing all the currently active spaces on the platform. The system shall display the name of the space, the description, and the number of active participants. The system shall provide a join button next to each space name, allowing the user to join the space.

### Space Creation

The system shall allow users to create their own spaces by providing a name and description for the space. The system shall allow users to set a date and time for the space to become active. The system shall store the space information in the database.

### Offline Spaces

The system shall display all the spaces that are not currently active but have been created by users. The system shall provide a join button next to each space name, allowing the user to join the space.

### Inviting Others

The system shall allow users to invite others to join their space by sharing a link or sending an email invitation. The system shall generate a unique link for each space and allow the user to copy and share the link.

### User Profile

The system shall allow users to view their own profile and update their information, including their name and email address. The system shall store the user's profile information in the database.

### Search

The system shall allow users to search for spaces based on keywords or topics. The system shall display the search results, showing the name and description of each space. The system shall provide a join button next to each space name, allowing the user to join the space.

### Mute and Leave

Once users join a space, the system shall allow them to mute their microphone or leave the space. The system shall display a button for muting the microphone and a button for leaving the space. The system shall ensure that the user's microphone is muted or their connection is closed when they leave the space.

## Non-Functional Requirements

### Performance

The system shall be able to handle a large number of users and spaces without experiencing any performance issues. The system shall provide real-time communication with low latency and high-quality audio.

## Security

The system shall ensure that user data is stored securely in the database and is not accessible to unauthorized users. The system shall use encryption to protect user data during transmission.

## Usability

The system shall be user-friendly and easy to navigate. The system shall provide clear instructions and feedback to the user. The system shall be accessible to people of all ages and technical backgrounds.

## System Architecture

The system architecture shall consist of a React.js front-end, a Node.js back-end, and a Firebase database and storage management system. The system shall use WebRTC and socket.io for real-time audio communication.

## Conclusion

This Software Requirements Specification document has outlined the requirements for the development of SoundHive, an audio chat platform that allows users to join virtual spaces where they can communicate with others in real-time through voice chat. The system shall provide a user-friendly and accessible platform for people of all ages and technical backgrounds. The system shall be developed using React.js and Node.js and shall use Firebase for authentication, database and storage management. The system shall use WebRTC and socket.io for real-time audio communication. The system shall ensure that user data is stored securely and that real-time communication is provided with low latency and high-quality audio.
