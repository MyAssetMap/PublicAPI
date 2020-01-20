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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
## `POST` /alpha/layer/geojson/add

*Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Optional):** The type of layer you are importing to (user, org, global). Defaults to _user_
- **layerID (Required):** The Layer ID you wish to import to.
- **json (Required):** The json you are importing.
- **file (Required):** The file in s3 you are importing.*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "mapID": "1",
    "layerID": "lotting-areas_142",
    "file": "client_data/aurora_highlands_0715/TestingData/LottingAreas.geojson"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "GEOJson has been imported.",
    "data": []
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "GEOJSON (`json`) must be supplied."
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Map ID (`mapID`) must be supplied."
}
```
</details>


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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
    "success": true,
    "message": "GEOJson for this layer has been returned.",
    "data": {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                84.375,
                                53.748710796899
                            ],
                            [
                                132.1875,
                                38.5481654230466
                            ],
                            [
                                119.1796875,
                                71.5249090373282
                            ],
                            [
                                84.375,
                                53.748710796899
                            ]
                        ]
                    ]
                },
                "properties": {
                    "prop": {}
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                84.375,
                                53.748710796899
                            ],
                            [
                                132.1875,
                                38.5481654230466
                            ],
                            [
                                119.1796875,
                                71.5249090373282
                            ],
                            [
                                84.375,
                                53.748710796899
                            ]
                        ]
                    ]
                },
                "properties": {
                    "prop": {}
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                84.375,
                                53.748710796899
                            ],
                            [
                                132.1875,
                                38.5481654230466
                            ],
                            [
                                119.1796875,
                                71.5249090373282
                            ],
                            [
                                84.375,
                                53.748710796899
                            ]
                        ]
                    ]
                },
                "properties": {
                    "prop": {}
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -104.010643,
                                40.0163698
                            ],
                            [
                                -104.0137329,
                                40.006509
                            ],
                            [
                                -103.9931335,
                                40.0066404
                            ],
                            [
                                -103.9872971,
                                40.0159754
                            ],
                            [
                                -103.9969101,
                                40.0232058
                            ],
                            [
                                -104.010643,
                                40.0163698
                            ]
                        ]
                    ]
                },
                "properties": {
                    "prop": {}
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -104.0183111,
                                40.0123082
                            ],
                            [
                                -104.020886,
                                40.0063915
                            ],
                            [
                                -104.0100713,
                                40.0020522
                            ],
                            [
                                -103.9925619,
                                40.005734
                            ],
                            [
                                -103.9932485,
                                40.0180929
                            ],
                            [
                                -104.0093847,
                                40.0215109
                            ],
                            [
                                -104.0183111,
                                40.0123082
                            ]
                        ]
                    ]
                },
                "properties": {
                    "prop": {}
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -104.0964654,
                                40.0531798
                            ],
                            [
                                -104.0945473,
                                40.0531798
                            ],
                            [
                                -104.0947492,
                                40.050913
                            ],
                            [
                                -104.0973871,
                                40.0508613
                            ],
                            [
                                -104.0988413,
                                40.0522851
                            ],
                            [
                                -104.0964654,
                                40.0531798
                            ]
                        ]
                    ]
                },
                "properties": {
                    "prop": {}
                }
            }
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
    "message": "GEOJson for this feature has been returned.",
    "data": {
        "type": "FeatureCollection",
        "features": []
    }
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Layer ID (`layerID`) must be provided."
}
```
</details>


# Update GEOJSON by featureID
## `POST` /alpha/layer/geojson/update

*Post the JSON you want to upload & dupate using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Optional):** The type of layer you are importing to (user, org, global). Defaults to _user_
- **featureID (Required):** The featureID of the data you are updating
- **json (Required):** The updated json you are updating.

_**Note:** json that is passed should be a singular feature. 
It can contain just geometry to update only the geometry ignoring properties, just properties to update only the properties ignoring geometry, or both geometry and properties to update both._ 

*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
  "mapID": "1",
  "featureID": "25",
  "json": "{
      \"type\": \"Feature\",
      \"properties\": {},
      \"geometry\": {
        \"type\": \"Point\",
        \"coordinates\": [
          -109.6875,
          36.03133177633187
        ]
      }\n    }"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Feature has been updated."
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Please only pass one GEOJSON feature to endpoint for updating."
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Feature ID (`featureID`) must be supplied."
}
```
</details>


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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "mapID": "1",
    "type": "user",
    "layerID": "142"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Data for this layer has been deleted.",
    "data": []
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Data for this feature has been deleted.",
    "data": []
}
```
</details>


# Cleanup Properties by layerID
## `POST` /alpha/layer/geojson/cleanup

*Pass a layer ID, and it will clean up the properties, removing any that are equal to the default, saving on database space.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Optional):** The type of layer you are importing to (user, org, global). Defaults to _user_
- **layerID (Required):** The layer ID you would like to delete all features for.

*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "mapID": "1",
    "layerID": "142"
}
```

***




# Create Property by layerID
## `POST` /alpha/layer/properties/add

*Create a new property element that is used by every feature on a layerID.

- **layerID (Required):** The Layer ID you wish to import to.
- **type (Optional):** The type of property (text,checkbox,dropdown) (Defaults to text)
- **name (Required):** The human readable name of property
- **key (Optional):** The key of the property (Will always be lowercased, will be automatically calculated if not defined)
- **value (Required):** The type of property (
- **default (Optional):** The default if not set value of property (Defaults to 0/false)

*Valid Types:*
- **text:** Text
- **number** An integer or float (Ex: 1 OR 3.1415)
- **date:** A valid UNIX timestamp. (Ex. Date.now() [1578535183033])
- **dropdown:** A valid UNIX timestamp. (Ex. Date.now() [1578535183033])
- **image:** The URL of the image that is stored in S3.*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "layerID": "polygon_142",
    "name": "Test",
    "value": null,
    "default": null
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Property has been created.",
    "data": {
        "id": 37,
        "key": "test",
        "name": "Test"
    }
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Property Field Type (`type`) is invalid."
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Property Field Type (`type`) is invalid."
}
```
</details>


# Get Property by layerID
## `POST` /alpha/layer/properties/get

*Get the information regarding the property element that is used by every feature on a layerID.

- **layerID (Required):** The Layer ID you wish to import to.
- **key (Optional):** If included, will only return props that match the key of property (Will always be lowercased). If ignored, will return array list of all props that match layerID.
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "layerID": "polygon_polygon_142",
    "key": "id"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Property information has been returned.",
    "data": {
        "id": 31,
        "layer": 142,
        "type": "text",
        "key": "id",
        "value": null,
        "default": null,
        "name": "ID"
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
    "message": "Property information has been returned.",
    "data": [
        {
            "id": 28,
            "layer": 142,
            "type": "text",
            "key": "completion",
            "value": null,
            "default": null,
            "name": "Completion"
        },
        {
            "id": 29,
            "layer": 142,
            "type": "text",
            "key": "lot_size",
            "value": null,
            "default": null,
            "name": "Lot Size"
        },
        {
            "id": 30,
            "layer": 142,
            "type": "text",
            "key": "lotcost",
            "value": null,
            "default": null,
            "name": "Lot Cost"
        },
        {
            "id": 31,
            "layer": 142,
            "type": "text",
            "key": "id",
            "value": null,
            "default": null,
            "name": "ID"
        },
        {
            "id": 32,
            "layer": 142,
            "type": "text",
            "key": "builder",
            "value": null,
            "default": null,
            "name": "Builder"
        }
    ]
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "The property with this key (`Test`) does not exist."
}
```
</details>


# Update Property by layerID 
## `POST` /alpha/layer/properties/update

*Update an existing property element that is used by every feature on a layerID. Allows you to update the type, value, or default value.


- **layerID (Required):** The Layer ID you wish to import to.
- **key (Required):** The key of property (Will always be lowercased)
- **name (Optional):** The update to the name of property
- **type (Optional):** The update to the type of property
- **value (Optional):** The update to the value of property (
- **default (Optional):** The default if not set value of property (Defaults to 0/false)


*Valid Types:*
- **text:** Text
- **number** An integer or float (Ex: 1 OR 3.1415)
- **date:** A valid UNIX timestamp. (Ex. Date.now() [1578535183033])
- **dropdown:** A valid UNIX timestamp. (Ex. Date.now() [1578535183033])
- **image:** The URL of the image that is stored in S3.*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "layerID": "140",
    "key": "test",
    "name": "New Test"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Property has been updated.",
    "data": []
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Property has been updated.",
    "data": []
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Property has been updated.",
    "data": []
}
```
</details>


# Delete Property by layerID and Key
## `POST` /alpha/layer/properties/delete

*Get the information regarding the property element that is used by every feature on a layerID.

- **layerID (Required):** The Layer ID you wish to import to.
- **key (Optional):** If included, will only return props that match the key of property (Will always be lowercased). If ignored, will return array list of all props that match layerID.
- **deleteData (Optional):** Should the data on each feature also be deleted? (Defaults to false)

_**Note:** deleteData is NOT BUILT YET. No data will be deleted at this time, but please use this documentation as if it was working._

*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "layerID": "polygon_polygon_142",
    "key": "Test",
    "deleteData": "false"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Property has been deleted.",
    "data": []
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "message": "Internal server error"
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
<pre>Cannot POST /dev/layer/properties/delete</pre>
</body>
</html>

```
</details>


