# PostGIS Structure
## `NOTES` /

*The PostGIS data is stored in the following structure:

layer\_{mapID}\_{dataType}

 - **MapID**: This corresponds to the numerical map ID for the data being saved
 - **DataType**: This corresponds to the type of data that was being saved.
   - **User**: Normal User Layers (Default)
   - **Org**: Organization Data to be shared with parts of the organization
   - **Global**: Global Data for use with the entire organization*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
mapID — 1
layerID — 85
type — user
json — {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              84.375,
              53.74871079689897
            ],
            [
              132.1875,
              38.548165423046584
            ],
            [
              119.17968749999999,
              71.52490903732816
            ],
            [
              84.375,
              53.74871079689897
            ]
          ]
        ]
      }
    }
  ]
}
```

***




# Create & Save GEOJSON by layerID
## `POST` /alpha/layer/geojson/create

*Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Optional):** The type of layer you are importing to (user, org, global). Defaults to _user_
- **layerID (Required):** The Layer ID you wish to import to.
- **json (Required):** The json you are importing.*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
mapID — 1
layerID — 85
json — {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              84.375,
              53.74871079689897
            ],
            [
              132.1875,
              38.548165423046584
            ],
            [
              119.17968749999999,
              71.52490903732816
            ],
            [
              84.375,
              53.74871079689897
            ]
          ]
        ]
      }
    }
  ]
}
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "GEOJson has been imported.",
    "data": []
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "GEOJson has been imported.",
    "data": []
}
```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /alpha/layer/geojson/create</pre>
</body>
</html>

```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "GEOJson has been imported.",
    "data": []
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "Layer ID (`layerID`) must be supplied."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "GEOJson has been imported.",
    "data": []
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "GEOJSON (`json`) must be supplied."
}
```
***


# Update GEOJSON by featureID
## `POST` /alpha/layer/geojson/update

*Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Optional):** The type of layer you are importing to (user, org, global). Defaults to _user_
- **featureID (Required):** The featureID of the you are importing to (user, org, public)
- **json (Required):** The updated json you are updating.

_**Note:** json that is passed should be a singular feature. It can contain just geometry to update only the geometry ignoring properties, just properties to update only the properties ignoring geometry, or both geometry and properties to update both._ 

*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
mapID — 1
featureID — 25
json — {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -109.6875,
          36.03133177633187
        ]
      }
    }
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Feature has been updated."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Feature has been updated."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "syntax error at or near \"UPDATE\""
}
```
***
### Response:

+ Status: **502**

+ Body:
```
{
    "message": "Internal server error"
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "Please only pass one GEOJSON feature to endpoint for updating."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "Feature ID (`featureID`) must be supplied."
}
```
***
### Response:

+ Status: **502**

+ Body:
```
{
    "message": "Internal server error"
}
```
***


# Get GEOJSON by featureID/layerID
## `POST` /alpha/layer/geojson/get

*Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

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
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
mapID — 1
layerID — 899
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "GEOJson for this layer has been returned.",
    "data": {
        "type": "FeatureCollection",
        "features": []
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "GEOJson for this feature has been returned.",
    "data": {
        "type": "FeatureCollection",
        "features": []
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "Layer ID (`layerID`) must be provided."
}
```
***


# Delete GEOMETRY by layerID
## `POST` /alpha/layer/geojson/delete

*`WIP` Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Optional):** The type of layer you are importing to (user, org, global). Defaults to _user_

**ONE OF THE FOLLOWING IS REQUIRED**

- **featureID (Required):** The feature ID you would like to delete.
- **layerID (Required):** The layer ID you would like to delete all features for.

*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
mapID — 1
type — user
layerID — 85
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Data for this layer has been deleted.",
    "data": []
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Data for this feature has been deleted.",
    "data": []
}
```
***


