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
{
    "mapID": "1",
    "layerID": "polygon_polygon_83",
    "json": "{\n  \"type\": \"FeatureCollection\",\n  \"features\": [\n    {\n      \"type\": \"Feature\",\n      \"properties\": {},\n      \"geometry\": {\n        \"type\": \"Polygon\",\n        \"coordinates\": [\n          [\n            [\n              84.375,\n              53.74871079689897\n            ],\n            [\n              132.1875,\n              38.548165423046584\n            ],\n            [\n              119.17968749999999,\n              71.52490903732816\n            ],\n            [\n              84.375,\n              53.74871079689897\n            ]\n          ]\n        ]\n      }\n    }\n  ]\n}"
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


# Create & Save GEOJSON by layerID Duplicate
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
{
    "mapID": "1",
    "layerID": "85",
    "json": "{\n  \"type\": \"FeatureCollection\",\n  \"features\": [\n    {\n      \"type\": \"Feature\",\n      \"properties\": {},\n      \"geometry\": {\n        \"type\": \"Polygon\",\n        \"coordinates\": [\n          [\n            [\n              84.375,\n              53.74871079689897\n            ],\n            [\n              132.1875,\n              38.548165423046584\n            ],\n            [\n              119.17968749999999,\n              71.52490903732816\n            ],\n            [\n              84.375,\n              53.74871079689897\n            ]\n          ]\n        ]\n      }\n    }\n  ]\n}"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "GEOJson has been created.",
    "data": []
}
```
</details>


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


