# Rippin_Penny_for_Your_Thoughts_Social_Media_Site
The is a student project toy database management system modeling a social media site back end.
![Title Screen](./ReadMe/banner.png)

## Video Demonstration   
[![Demonstration Video Thumbnail](./ReadMe/demo_thumbnail.png width="150")](https://youtu.be/esc-DX0gB8U)


## Installation  
1. Open the resident folder in an integrated terminal.
2. Install depenencies with `npm install`.
3. Populate the database with mock data using `npm run seed`.
4. Start the database with `npm run start`.
## Routes

Method       | Subdirectory Route                             | Results                    |
------------:| ---------------------------------------------- | -------------------   
GET          | `/api/users`                                   | Returns all users.
GET          | `/api/users/:userId`                           | Returns a single user with userId.
POST         | `/api/users`                                   | Creates the user encoded in the request body.
PUT          | `/api/users/:userId`                           | Modifies the user with the userId with information encoded in the request body.
DELETE       | `/api/users/:userId`                           | Deletes a single user with the userId.
POST         | `/api/users/:userId/friends`                   | Creates the friend encoded in the request body.
DELETE       | `/api/users/:thoughtId/reaction/:friendId`     | Deletes a single friend with friendId.
GET          | `/api/thought`                                 | Returns all thoughts.
GET          | `/api/thought/:thoughtId`                      | Returns a single thought with thoughtId.
POST         | `/api/thought   `                              | Creates the thought encoded in the request body.
PUT          | `/api/thought/:thoughtId`                      | Modifies the thought with the thoughtId with information encoded in the request body.
DELETE       | `/api/thought/:thoughtId`                      | Deletes a single thought with thoughtId.
POST         | `/api/thought/:thoughtId/reaction`             | Creates the reaction encoded in the request body.
DELETE       | `/api/thought/:thoughtId/reaction/:reactionId` | Deletes a single reaction with reactionId.



