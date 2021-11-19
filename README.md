# Simples API Backend Assessment

## Install

```sh
npm install
```

## Run Dev

```sh
npm run dev
```

## Run Test

```sh
npm run test
```

## Run Start

```sh
npm start
```

## Data Structure  
  
 ### Posts
  * id
  * author
  * authorId
  * likes
  * popularity
  * reads
  * tags: string[ ] 
---

## ENDPOINTS 

 ### Ping
  * Method: GET
  * Path: `/api/ping`
  * Response:
```
     { 
      success: true 
     }
```
 ### Get Posts
  * Method: GET
  * Path: `/api/posts?tags={tag or tags separated by comma}&sortBy={"id", "reads", "likes" or "popularity"}&direction={"asc" or "desc"}`
  #### At least one tag is mandatory (Error if none is passed)
  #### "sortBy" and "direction" are optional (Error if invalid value is passed)
  * Response: (Empty array if nothing is found with given tags)
  ```
  {
    "posts": [{
      "id": 1,
      "author": "Rylee Paul",
      "authorId": 9,
      "likes": 960,
      "popularity": 0.13,
      "reads": 50361,
      "tags": [ "tech", "health" ]
     },
     ...
    ]
   }
```
Response status code: 200

 ### Error responses:
  * If "tags" parameter is not present:

```
{ "error": "Tags parameter is required" }
```

  * If  a `sortBy` or `direction` are invalid values:

```
{ 
  "error": "sortBy parameter is invalid" 
}
```

```
{ 
  "error": "direction parameter is invalid" 
}
```
