
## Simple Node.js Server

This project is a simple Node.js server using Nest.js, which provides an API for user management, file uploading, and serving static files. The server also supports JWT authentication and role-based access control.

### Installation and Setup

1. Make sure you have Node.js installed. If not, download and install it from the [official website](https://nodejs.org/).
2. Clone the repository to your computer:

   `git clone https://github.com/Lap-DevOps/Node.js_REST_API_BackEnd.git`

3. Navigate to the project directory:

   `cd your-repo`

4. Install dependencies:

   `npm install`

5. Create a `.env` file and add the necessary environment variables:

   ```
   PORT=3000
   JWT_SECRET=your_jwt_secret
   ```

6. Start the server:

   `npm start`

### API Usage

- **POST /api/users/register** - Register a new user. Request parameters: `username`, `email`, `password`.
- **POST /api/users/login** - User login. Request parameters: `email`, `password`. Returns a JWT token.
- **POST /api/upload** - Upload a file to the server. Requires JWT token authentication.

### Access Control

The following roles are implemented for access control:

- **admin** - Full access to all resources.
- **user** - Limited access to specific resources.

To access specific resources, include an `Authorization` header with the JWT token issued upon login.

### Static Files

Static files are available at `/public`.

### Contribution

If you have any suggestions for improving the project or you found a bug, please create a new issue or pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for additional information.
```