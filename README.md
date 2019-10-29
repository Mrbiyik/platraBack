
![ss](https://user-images.githubusercontent.com/20922493/67814797-1849ea80-fab6-11e9-887f-486dd5ed4730.JPG)

##

![ss2](https://user-images.githubusercontent.com/20922493/67814802-1bdd7180-fab6-11e9-9381-e9b2efb5440f.JPG)

##

![ss3](https://user-images.githubusercontent.com/20922493/67814803-1da73500-fab6-11e9-8ea9-a512f05a2c21.JPG)

##

# platraBackend
Plane Tracking System - Node.js, Express, Socket API Project

There is "test.js" inside the "routes" folder.
  - It can respond to the "/test" GET requests
  - It requests to opensky-network API periodically
  - Every time it requests to the API, broadcasts that data to the clients via socket.io

There is socketAPI.js
  - It merges all socket.io staff in one file
  - It makes socket.io reachable from everywhere
