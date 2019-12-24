# Import GEOJSON to GEOMETRY
## `POST` /alpha/layer/import/json

*Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

- **mapID (Required):** The Map ID you wish to import to.
- **layerID (Required):** The Layer ID you wish to import to.
- **type (Required):** The type of layer you are importing to (user, org, public)
- **json (Required):** The json you are importing.*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

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


# Get Common Layers
## `GET` /alpha/layers/public

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
## `GET` /alpha/layers/user

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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "0": "plss",
            "2": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "3": "counties",
            "4": [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "5": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "6": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "7": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "8": [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "9": {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "layerIds": []
            },
            "10": [
                {
                    "toc": {
                        "id": "prod-test_85",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2081"
                            ],
                            "maxzoom": 10,
                            "layerID": 81
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_81",
                                "type": "circle",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "11": [
                {
                    "toc": {
                        "id": "prod-test_86",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2082"
                            ],
                            "maxzoom": 10,
                            "layerID": 82
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_82",
                                "type": "circle",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "0": "plss",
            "2": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "3": "counties",
            "4": [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "5": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "6": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "7": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "8": [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "9": {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "layerIds": []
            }
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "0": "plss",
            "2": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "3": "counties",
            "4": [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "5": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "6": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "7": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "8": [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "1": "plss",
            "3": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "4": "counties",
            "5": [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "6": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "7": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "8": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "9": [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "1": "plss",
            "3": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "4": "counties",
            "5": [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "6": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "7": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "8": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "9": [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "1": "plss",
            "3": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "4": "counties",
            "5": [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "6": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "7": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "8": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "9": [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "1": "plss",
            "3": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "4": "counties",
            "5": [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "6": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "7": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "8": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "9": [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "15": [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "15": [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {}
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "currentKey": [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "counties"
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
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
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            "plss",
            "counties",
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            null,
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            null,
            null,
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            "plss",
            null,
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            null,
            null,
            null,
            null,
            "counties",
            null,
            [
                {
                    "toc": {
                        "id": "prod-test_45",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2043"
                            ],
                            "maxzoom": 10,
                            "layerID": 43
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "toc": {
                        "id": "prod-test_33",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2031"
                            ],
                            "maxzoom": 10,
                            "layerID": 31
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "toc": {
                        "id": "prod-test_46",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2044"
                            ],
                            "maxzoom": 10,
                            "layerID": 44
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "toc": {
                        "id": "prod-test_43",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2041"
                            ],
                            "maxzoom": 10,
                            "layerID": 41
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "toc": {
                        "id": "prod-test_44",
                        "label": "Prod Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "prod-test_prod-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2042"
                            ],
                            "maxzoom": 10,
                            "layerID": 42
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "prod-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "filter": [],
                                "source": "prod-test_prod-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            "plss",
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "counties",
            [
                {
                    "toc": {
                        "id": "new-group-name_13",
                        "label": "New Group Name",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "new-group-name_unco-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_0_user/{z}/{x}/{y}?filter=layer%20%3D%2014"
                            ],
                            "maxzoom": 10,
                            "layerID": 14
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "new-group-name_unco-test_14",
                                "type": "line",
                                "source-layer": "unco-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "source": "new-group-name_unco-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": [
            "plss",
            "counties",
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            [
                {
                    "toc": {
                        "id": "new-group-name_13",
                        "label": "New Group Name",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "new-group-name_unco-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_0_user/{z}/{x}/{y}?filter=layer%20%3D%2014"
                            ],
                            "maxzoom": 10,
                            "layerID": 14
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "new-group-name_unco-test_14",
                                "type": "line",
                                "source-layer": "unco-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "source": "new-group-name_unco-test_source"
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
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers have been returned for user #16",
    "data": {
        "user": [
            "plss",
            "counties",
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            [
                {
                    "toc": {
                        "id": "new-group-name_13",
                        "label": "New Group Name",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "new-group-name_unco-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_0_user/{z}/{x}/{y}?filter=layer%20%3D%2014"
                            ],
                            "maxzoom": 10,
                            "layerID": 14
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "new-group-name_unco-test_14",
                                "type": "line",
                                "source-layer": "unco-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "source": "new-group-name_unco-test_source"
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
### Response:

+ Status: **301**

+ Body:
```
<a href="/egd4avkav9.execute-api.us-east-1.amazonaws.com/prod/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c">Moved Permanently</a>.


```
***
### Response:

+ Status: **301**

+ Body:
```
<a href="/rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c">Moved Permanently</a>.


```
***
### Response:

+ Status: **301**

+ Body:
```
<a href="/rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c6872305e-65e3-48f1-a785-08ce114c8e49">Moved Permanently</a>.


```
***
### Response:

+ Status: **301**

+ Body:
```
<a href="/egd4avkav9.execute-api.us-east-1.amazonaws.com/prod/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c6872305e-65e3-48f1-a785-08ce114c8e49">Moved Permanently</a>.


```
***
### Response:

+ Status: **301**

+ Body:
```
<a href="/egd4avkav9.execute-api.us-east-1.amazonaws.com/prod/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c6872305e-65e3-48f1-a785-08ce114c8e49">Moved Permanently</a>.


```
***
### Response:

+ Status: **301**

+ Body:
```
<a href="/rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c6872305e-65e3-48f1-a785-08ce114c8e49">Moved Permanently</a>.


```
***
### Response:

+ Status: **301**

+ Body:
```
<a href="/rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c6872305e-65e3-48f1-a785-08ce114c8e49">Moved Permanently</a>.


```
***
### Response:

+ Status: **301**

+ Body:
```
<a href="/egd4avkav9.execute-api.us-east-1.amazonaws.com/dev/layers/user?userID=6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c6872305e-65e3-48f1-a785-08ce114c8e49">Moved Permanently</a>.


```
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
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "counties",
            [
                {
                    "toc": {
                        "id": "new-group-name_13",
                        "label": "New Group Name",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "new-group-name_unco-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_0_user/{z}/{x}/{y}?filter=layer%20%3D%2014"
                            ],
                            "maxzoom": 10,
                            "layerID": 14
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "new-group-name_unco-test_14",
                                "type": "line",
                                "source-layer": "unco-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "source": "new-group-name_unco-test_source"
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
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "1",
                "layerIds": [
                    "plss",
                    "counties"
                ]
            },
            "counties",
            [
                {
                    "toc": {
                        "id": "new-group-name_13",
                        "label": "New Group Name",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "new-group-name_unco-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_0_user/{z}/{x}/{y}?filter=layer%20%3D%2014"
                            ],
                            "maxzoom": 10,
                            "layerID": 14
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "new-group-name_unco-test_14",
                                "type": "line",
                                "source-layer": "unco-test",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {},
                                "source": "new-group-name_unco-test_source"
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


# Create User Group
## `POST` /alpha/group/add

*Create a new Empty user group with the name specified. Layer Groups are done on a per user level.

- **userID (Required):** The User ID you wish to create the group for
- **label (Required):** The name of the group you wish to create.
- **color (Optional):** The color of the group you wish to create (Defaults to #f2f2f2).
- **parentID (Option):** The Parent ID of the group you wish to place this group inside.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
label — This is a good group 2
mapID — 0
```

***


### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Group has been created.",
    "data": "tRe6hnfiPy"
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Group has been created.",
    "data": "xoOHNl4ypX"
}
```
***


# Create Layer
## `POST` /alpha/layer/add

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
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
label — Prod Test
sourceType — user
type — circle
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
    "data": "prod-test_86"
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
    "data": "prod-test_85"
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
    "data": "prod-test_46"
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
    "data": 45
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
    "data": 44
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
    "data": 43
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
    "data": 33
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
    "success": false,
    "message": "invalid input syntax for type boolean: \"undefined\""
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
## `POST` /alpha/layer/order

*`WIP` Takes the existing layer information and pushes it to save to the server. Saves the order, groups, and layer properties such as paint properties and tags.

- **userID (Required):** The User ID you wish to gather information for
- **payload (Required):** The payload of group Ids and group entries to push to the database.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

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
## `POST` /alpha/layer/update

*`WIP` Takes the client layer information and pushes it to save to the server. Maintains the order, but updates layer properties such as paint properties and tags.

- **userID (Required):** The User ID you wish to gather information for
- **payload (Required):** The payload of group Ids and group entries to push to the database.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
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
## `POST` /alpha/layer/delete

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
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

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


