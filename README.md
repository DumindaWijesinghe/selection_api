# Image selection API

## Setup
```
git clone https://github.com/DumindaWijesinghe/selection_api.git
cd selection_api
npm install
npm start
```
This will start a Nodejs application on port `2010`

## Start the app with docker-compose

Simply run 
```
docker-compose up
```

Nodejs app will start on port `2010`

MongoDB will start on port `9933` to avoid clashes with local MongoDB setups.

## Config

`.env` file at the application root contains the configurations.

```
MONGO_URL=mongodb://localhost:9933/selection
```

## Endpoints


### Save image selection
#### `Request`
```
POST /v1/selection/ HTTP/1.1
Host: localhost:2010
Content-Type: application/json
Accept: */*
Host: localhost:2010

{
	"selectionId": "334",
	"authorId": "3452",
	"selection": [11111,33333,44444,55555]
}
```
#### `Response`
```
{
    "success": true,
    "data": {
        "selection": [
            1,
            3,
            54,
            6543
        ],
        "_id": "5e2f6938498144806e2c1150",
        "authorId": "3452",
        "selectionId": "334",
        "__v": 0,
        "createdAt": "2020-01-27T22:50:32.543Z",
        "updatedAt": "2020-01-27T22:50:32.543Z"
    }
}
```


### Get image selection
#### `Request`
```
GET /v1/selection/{selectionID} 
Host: localhost:2010
```
#### `Response`
```
{
    "success": true,
    "data": {
        "selection": [
            1,
            3,
            54,
            6543
        ],
        "_id": "5e2f6938498144806e2c1150",
        "authorId": "3452",
        "selectionId": "334",
        "__v": 0,
        "createdAt": "2020-01-27T22:50:32.543Z",
        "updatedAt": "2020-01-27T22:50:32.543Z"
    }
}
```







