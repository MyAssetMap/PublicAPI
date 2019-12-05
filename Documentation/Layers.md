# Import GEOJSON to GEOMETRY
## `POST` /dev/layer/import/json

*Post the JSON you want to upload using this api, and it will convert that to geometry and properties pawfor use with the PG database.

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

*Returns the user layers & groups for a given userID.*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 8

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
            "counties",
            {
                "label": "Common Layers",
                "groupId": "1",
                "parent": null,
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
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
                            "id": "unco-area-around-house_unco-area-around-house_10",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2013"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "unco-area-around-house_unco-area-around-house_13",
                                "type": "line",
                                "source": "unco-area-around-house_unco-area-around-house_10",
                                "source-layer": "unco-area-around-house",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {},
                                "paint": {},
                                "metadata": {}
                            }
                        }
                    ]
                }
            ]
        ]
    }
}
```
***


# Create Layer Group
## `POST` /dev/group/add

*Create a new Empty layer group with the name specified.*

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

*Create a new Empty layer with the name specified. Once created, you can then import geojson as normal.*

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


