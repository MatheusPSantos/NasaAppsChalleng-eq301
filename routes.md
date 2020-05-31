# Routes for API

## Routes
---
### User

**POST - localhost:3333/users**
  - create user
  - request:
    ```
      {
        "username": String
      }
    ```

  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**GET - localhost:3333/users/:id**
  - params: id - string
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**GET - localhost:3333/users**
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**DELETE - localhost:3333/users**
  - delete user
  - request:
  ```
    { 
      "username": String,
      "user_id": String
    }
  ```
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

---
### Answers routes

**GET - localhost:3333/answers**
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**GET - localhost:3333/answers/:username**
  - params: username - String
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**POST - localhost:3333/answers**
  - create answer
  - request:
  ```
    {
      "answers":{
        "question_1": "value1",
        "question_2": "value2",
        "question_3": "value3",
        "question_4": "value4",
        "question_5": "value5",
        "question_6": "value6",
        "question_7": "value7",
        "question_8": "value8",
        "question_9": "value9"
      },
      "username": String,
      "user_id":  String"
  }
  ```
  - params:
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**DELETE - localhost:3333/answers**
  - delete user answers
  - request:
     ```
      {
        "username": String,
        "user_id": String
      }
     ```
  - params:
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

---
### Chat

**GET - localhost:3333/chat/:id**
  - show chats
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**POST - localhost:3333/chat**
  - create chat whit users ids
  - request:
    ```
    {
      "users": [String, String]
    }
    ```
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`

**POST - localhost:3333/chat/:id**
  - create a message inside the chat
  - request:
  ```
  {
	  "user_id": String,
	  "message": String
  }
  ```
  - params: id - chat id
  - response:
    - succes: json with object and status code 200
    - error: in case of error, response is `{ error }`
