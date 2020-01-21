# Test Endpoint
## `GET` /public/

*Used to simply test if your authentication is successful and what your scopes are.

Please use the following URL: **https://x5v4mel8c9.execute-api.us-east-1.amazonaws.com/public

To authenticate into the API, please either pass _apiKey_ as a query variable to the URL, or pass the APIKey in the _Authorization_ header.*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
    –

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Welcome to the MY ASSET MAP public endpoint. You have successfully authenticated as Test API Key",
    "data": {
        "name": "Test API Key",
        "map": [
            1,
            2
        ],
        "scope": [
            "read",
            "write"
        ]
    }
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Welcome to the MY ASSET MAP public endpoint. You have successfully authenticated as Test API Key",
    "data": {
        "name": "Test API Key",
        "map": [
            1,
            2
        ]
    }
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Welcome to the MY ASSET MAP endpoint v1.01"
}
```
</details>


# Get MVT Tile
## `GET` /public/layer/mvt/get/:mapID/:layerID/:z/:x/:y

*Returns a mvt file for the given Z, X, Y and tile. Also uses the filter to gather only the information needed.

- **Z (Required):** The Z scaling of the file.
- **X (Required):** The X position of the file.
- **Y (Required):** The Y position of the file.
- **mapID (Required):** The Map ID you wish to pull the layer for.
- **layerID (Required):** The Layer ID you wish to gather information for.
*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
    –

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Unauthorized for the scope: geojson.read"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /public/layer/mvt/get/:layerID/:z/:x/:y</pre>
</body>
</html>

```
</details>

### Response:

<details>
<summary>Expand</summary>

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /public/layer/mvt/get/</pre>
</body>
</html>

```
</details>


# Get GEOJSON by featureID/layerID
## `POST` /public/layer/geojson/get

**SCOPE REQUIRED: *_geojson.read_

Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Optional):** The type of layer you are importing to (user, org, global). Defaults to _user_

**ONE OF THE FOLLOWING IS REQUIRED**

- **featureID (Required):** The feature ID you would like to return GEOJSON for.
- **layerID (Required):** The layer ID you would like to return GEOJSON for.
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 3b4e26fc-e158-4c31-94b9-e6095a002696

+ Body:
```
{
    "mapID": "1",
    "layerID": "140"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Unauthorized for the scope: geojson.read"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Unauthorized for the scope: geojson.get"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Unauthorized"
}
```
</details>


