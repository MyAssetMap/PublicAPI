# Import GEOJSON to GEOMETRY
## `POST` /dev/layer/import/json

*Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **type (Required):** The type of layer you are importing to (user, org, public)
- **json (Required):** The json you are importing.*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
```
mapID — 1
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


### Response:

+ Status: **500**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>ReferenceError: payload is not defined<br> &nbsp; &nbsp;at /var/task/index.js:292:20<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/var/task/node_modules/express/lib/router/route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (/var/task/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /var/task/node_modules/express/lib/router/index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (/var/task/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/var/task/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at jsonParser (/var/task/node_modules/body-parser/lib/types/json.js:101:7)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)</pre>
</body>
</html>

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


# Get Common Layers
## `GET` /dev/layers/public

**DEPRECATED* Returns all of the Public Common layers in the Mapbox Spec. Used purely for reference at this point as public common layers are now stored directly in the client.*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
    –

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Public Layers have been returned",
    "data": [
        [
            {
                "toc": {
                    "id": "counties_5",
                    "label": "Counties",
                    "description": "US County Boundaries",
                    "canExpand": false,
                    "canOrgView": true,
                    "canOrgEdit": false,
                    "group": "dataLayer"
                },
                "sourcesArray": [
                    {
                        "id": "counties_counties_4",
                        "type": "vector",
                        "tiles": [
                            "https://my-asset-map-data.s3.amazonaws.com/public_data/counties/{z}/{x}/{y}.pbf"
                        ],
                        "maxzoom": 10
                    }
                ],
                "layersArray": [
                    {
                        "beforeLayer": null,
                        "layer": {
                            "id": "counties_counties_4",
                            "type": "line",
                            "source": "counties_counties_4",
                            "source-layer": "counties",
                            "interactive": false,
                            "minzoom": 0,
                            "layout": {
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "red",
                                "line-opacity": 1
                            },
                            "metadata": {}
                        }
                    }
                ]
            }
        ],
        [
            {
                "toc": {
                    "id": 0,
                    "label": null,
                    "description": null,
                    "canExpand": false,
                    "canOrgView": false,
                    "canOrgEdit": false,
                    "group": "dataLayer"
                },
                "sourcesArray": [],
                "layersArray": []
            }
        ],
        [
            {
                "toc": {
                    "id": "plss_4",
                    "label": "PLSS",
                    "description": "PLSS Town Ship, Sections, Quarter Sections",
                    "canExpand": false,
                    "canOrgView": true,
                    "canOrgEdit": false,
                    "group": "dataLayer"
                },
                "sourcesArray": [
                    {
                        "id": "plss_sections_3",
                        "type": "vector",
                        "tiles": [
                            "https://my-asset-map-data.s3.amazonaws.com/public_data/plss/sections/{z}/{x}/{y}.pbf"
                        ],
                        "maxzoom": 10
                    },
                    {
                        "id": "plss_townships_2",
                        "type": "vector",
                        "tiles": [
                            "https://my-asset-map-data.s3.amazonaws.com/public_data/plss/townships/{z}/{x}/{y}.pbf"
                        ],
                        "maxzoom": 10
                    }
                ],
                "layersArray": [
                    {
                        "beforeLayer": null,
                        "layer": {
                            "id": "plss_sections_2",
                            "type": "line",
                            "source": "plss_sections_3",
                            "source-layer": "sections",
                            "interactive": false,
                            "minzoom": 10,
                            "layout": {
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "blue",
                                "line-width": [
                                    "interpolate",
                                    [
                                        "linear"
                                    ],
                                    [
                                        "zoom"
                                    ],
                                    10,
                                    0.5,
                                    11,
                                    1
                                ],
                                "line-opacity": 1
                            },
                            "metadata": {}
                        }
                    },
                    {
                        "beforeLayer": null,
                        "layer": {
                            "id": "plss_townships_1",
                            "type": "line",
                            "source": "plss_townships_2",
                            "source-layer": "townships",
                            "interactive": true,
                            "minzoom": 10,
                            "layout": {
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "black",
                                "line-width": [
                                    "interpolate",
                                    [
                                        "linear"
                                    ],
                                    [
                                        "zoom"
                                    ],
                                    6,
                                    0.5,
                                    7,
                                    1,
                                    8,
                                    1.5,
                                    9,
                                    2,
                                    10,
                                    2.5,
                                    11,
                                    3
                                ],
                                "line-opacity": 1
                            },
                            "metadata": {
                                "popup": {
                                    "title": "Township Line"
                                }
                            }
                        }
                    }
                ]
            }
        ]
    ]
}
```
***


# Get User Layers
## `GET` /dev/layers/user

*Returns the user layers & groups for a given userID.

- **userID (Required):** The User Cognito UUID you wish to gather information for. This information is auto passed via the application.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
    –

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned",
    "data": {
        "user": [
            "plss",
            [],
            "counties",
            [],
            [
                {
                    "toc": {
                        "id": "unco-area-around-house_13",
                        "label": "UNCO Area around House",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "unco-area-around-house_unco-area-around-house_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2013"
                            ],
                            "maxzoom": 10,
                            "layerID": 13
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "unco-area-around-house_unco-area-around-house_13",
                                "type": "line",
                                "source-layer": "unco-area-around-house",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "source": "unco-area-around-house_unco-area-around-house_source"
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "toc": {
                        "id": "test-2_18",
                        "label": "TEST 2",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "test-2_test-2_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2017"
                            ],
                            "maxzoom": 10,
                            "layerID": 17
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "test-2_test-2_17",
                                "type": "line",
                                "source-layer": "test-2",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "source": "test-2_test-2_source"
                            }
                        }
                    ]
                }
            ],
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            }
        ]
    }
}
```
***


# Create Group for Layer
## `POST` /dev/group/add

*Create a new Empty layer stack (mainly for stacked layers) with the name specified. Layer Groups are done on a per user level.

- **userID (Required):** The User ID you wish to gather information for
- **label (Required):** The name of the group you wish to create.
- **mapID (Required):** The Map ID in which the group will be stored.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._

_**DEPRECATED:** Create Layer (layer/add) is to be used instead as that endpoint also creates the layer source, and layer group as needed._
*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
```
userID — 4
label — New Group Name
mapID — 0
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Group has been created.",
    "data": [
        {
            "id": 14
        }
    ]
}
```
***


# Create Layer
## `POST` /dev/layer/add

*Create a new Empty layer with the name specified. Once created, you can then import geojson as normal.


- **userID (Required):** The User ID you wish to gather information for
- **label (Required):** The name of the group you wish to create.
- **sourceType (Required):** The source type of the layer we are creating (user, org, or public).
- **type (Required):** The mapbox spec type of layer you are creating (point, line, polygon.
- **mapID (Required):** The Map ID in which the group will be stored.
- **——OPTIONAL——**
- **interactive (Optional):** The Interactive Value (Defaults to true)
- **minzoom (Optional):** The MinZoom Value (Defaults to 10)
- **layout (Optional):** The Layout Value (Defaults to {visibility: none})
- **paint (Optional):** The Paint Value (Defaults to {})
- **metadata (Optional):** The Metadata Value (Defaults to {})


_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
```
userID — 6872305e-65e3-48f1-a785-08ce114c8e49
label — Layer Test #2
sourceType — user
type — line
mapID — 1
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Layer has been created.",
    "data": 21
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Layer has been created.",
    "data": 20
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Layer has been created.",
    "data": 18
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "You are not authenticated to use this endpoint.",
    "data": "invalid input syntax for type uuid: \"undefined\""
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "You are not authenticated to use this endpoint.",
    "data": "invalid input syntax for type uuid: \"undefined\""
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "You are not authenticated to use this endpoint.",
    "data": "invalid input syntax for type uuid: \"undefined\""
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
    "success": true,
    "message": "Layer has been created.",
    "data": 14
}
```
***


# Order Layers & Groups
## `POST` /dev/layer/order

*`WIP` Takes the existing layer information and pushes it to save to the server. Saves the order, groups, and layer properties such as paint properties and tags.

- **userID (Required):** The User ID you wish to gather information for
- **payload (Required):** The payload of group Ids and group entries to push to the database.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
```
userID — 4
label — UNCO Test
sourceType — user
type — line
mapID — 1
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
<pre>Cannot POST /dev/layer/order</pre>
</body>
</html>

```
***


# Save Layer Properties
## `POST` /dev/layer/update

*`WIP` Takes the client layer information and pushes it to save to the server. Maintains the order, but updates layer properties such as paint properties and tags.

- **userID (Required):** The User ID you wish to gather information for
- **payload (Required):** The payload of group Ids and group entries to push to the database.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
```
userID — 4
label — UNCO Test
sourceType — user
type — line
mapID — 1
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
<pre>Cannot POST /dev/layer/update</pre>
</body>
</html>

```
***


# Delete Layer
## `POST` /dev/layer/delete

* Delete an existing layer and optionally delete the data associated permanently.

- **userID (Required):** The User ID you wish to gather information for
- **layerID (Required):** The layerGroupID you wish to delete.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
_**Note:** The layerGroupID can be passed as a integer, or as the mapbox layerID (layerName_INT)_
*

### Request:

+ Headers:
    –

+ Url Params:
    –

+ Body:
```
layerID — layer_20
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Layer has been deleted.",
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
    "message": "Layer Group ID (`layerID`) is being passed in the incorrect format."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": false,
    "message": "Layer Group ID (`199`) does not exist!"
}
```
***


