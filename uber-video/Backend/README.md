# User Registration Endpoint

## POST /user/register

### Description
This endpoint is used to register a new user.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name should be at least 3 characters",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password should be at least 6 characters",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Missing Fields
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required",
        "param": "field-name",
        "location": "body"
      }
    ]
  }
  ```

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to log in an existing user.

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password should be at least 6 characters",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to get the profile of the logged-in user.

### Headers
- `Authorization` (string, required): The JWT token of the logged-in user.

### Example Request
```
GET /users/profile
Authorization: Bearer jwt-token
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint is used to log out the logged-in user.

### Headers
- `Authorization` (string, required): The JWT token of the logged-in user.

### Example Request
```
GET /users/logout
Authorization: Bearer jwt-token
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

# Captain Registration Endpoint

## POST /captain/register

### Description
This endpoint is used to register a new captain.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, required): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain account. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt-token",
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name should be at least 3 characters",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password should be at least 6 characters",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color should be at least 3 characters",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate should be at least 3 characters",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity should be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

#### Captain Already Exists
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "message": "Captain already exist"
  }
  ```

# Captain Login Endpoint

## POST /captain/login

### Description
This endpoint is used to log in an existing captain.

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain account. Must be at least 6 characters long.

### Example Request
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt-token",
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password should be at least 6 characters",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

# Captain Profile Endpoint

## GET /captain/profile

### Description
This endpoint is used to get the profile of the logged-in captain.

### Headers
- `Authorization` (string, required): The JWT token of the logged-in captain.

### Example Request
```
GET /captain/profile
Authorization: Bearer jwt-token
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

# Captain Logout Endpoint

## GET /captain/logout

### Description
This endpoint is used to log out the logged-in captain.

### Headers
- `Authorization` (string, required): The JWT token of the logged-in captain.

### Example Request
```
GET /captain/logout
Authorization: Bearer jwt-token
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```