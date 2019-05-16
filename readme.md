# overview
* start your strapi app instance
    ```console
    npm start
    ```
* goto http://localhost:1337 
* login and change/add your models
* save changes
* export changes to sdk folder "./strapi-sdk-typescript"
    ```console
    npm run update-all
    ```
* use sdk in your client project 
    ```typescript
    import {ServerConfig} from './strapi-backend-typescript/@strapi-sdk-typescript/sdk'
    const { strapiInstance, models } = new ServerConfig("http://localhost:1337");
    // e.g. query all users
    await db.models.user.all()
    ```
  