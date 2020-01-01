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
            "0": [
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
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_31",
                                "type": "line",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Prod Test"
                                },
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "2": "counties",
            "3": [
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
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_42",
                                "type": "line",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Prod Test"
                                },
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "4": [
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
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_41",
                                "type": "line",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Prod Test"
                                },
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "5": "plss",
            "6": {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "7": {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "8": {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "pgowvUVGHG",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "9": {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "0GmxejyQKp",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "10": {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "11": {
                "label": "Common Layers",
                "parent": null,
                "groupId": "gAkJksSjSj",
                "children": {
                    "groupIds": [
                        "tRe6hnfiPy"
                    ],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            "12": [
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
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_43",
                                "type": "line",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Prod Test"
                                },
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "13": [
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
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_44",
                                "type": "line",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Prod Test"
                                },
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "14": [
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
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_81",
                                "type": "circle",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Prod Test"
                                },
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            },
                            "symbol": {
                                "id": "prod-test_prod-test_81_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Sublayer"
                                },
                                "source-layer": "prod-test",
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "15": [
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
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "prod-test_prod-test_82",
                                "type": "circle",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Prod Test"
                                },
                                "filter": [],
                                "source": "prod-test_prod-test_source"
                            }
                        }
                    ]
                }
            ],
            "16": [
                {
                    "toc": {
                        "id": "symbol-test_92",
                        "label": "Symbol Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "symbol-test_symbol-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2088"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "symbol-test_symbol-test_88",
                                "type": "circle",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol Test"
                                },
                                "filter": [],
                                "source": "symbol-test_symbol-test_source"
                            },
                            "symbol": {
                                "id": "symbol-test_symbol-test_88_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol"
                                },
                                "source-layer": "symbol-test",
                                "source": "symbol-test_symbol-test_source"
                            }
                        }
                    ]
                }
            ],
            "17": {
                "color": "#f2f2f2",
                "label": "Testing the new format",
                "groupId": "vYG7eeqSzv",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
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

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._

_**Note:** parentID was removed on Dec 31, 2019. Please use layer/order to set relationships instead of parentID._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
{
    "label": "Testing the new format",
    "mapID": "1"
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
    "data": "vYG7eeqSzv"
}
```
***


# Delete User Group
## `POST` /alpha/group/delete

**DEPRECATED* `wip` This is unfinished. Please use layers/order instead.

Delete a group by ID. This can be done instead by passing the new order without the group, which should be done anyway. Might build later if needed.

- **userID (Required):** The User ID you wish to create the group for
- **groupID (Required):** The Group ID of the group you wish to place this group inside.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
{
    "label": "This is a good group 2",
    "mapID": "0"
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
{
    "label": "Symbol Test",
    "sourceType": "user",
    "type": "circle",
    "mapID": "1"
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


# Order Groups & Layers
## `POST` /alpha/layer/order

*Pass the ids of the groups and layers in the correct order. 

Any userLayer IDs not in the order object will be moved to the end of the object in the same order they were. Any group IDs not in the order object will be *deleted*.

- **userID (Required):** The User ID you wish to create the group for
- **order (Required):** The object of Ids you would like to pass.

```
Example Order:
[
	{layer: "layer_layer_8"},
	{layer: "layer_layer_2"},
	{layer: "layer_layer_7"},
	{layer: "layer_layer_6"},
	{
		group: "GgAkjLkgJk", 
		children: [{layer: "layer_layer_3"},{group: "LkPoKgAsFD"}],
	},
	{
		group: "LkPoKgAsFD", 
		children: [{layer: "layer_layer_5"}],
	}
]
```
```
Result:
[
	– layer_layer_8 (Layer)
	– layer_layer_2 (Layer)
	– layer_layer_7 (Layer)
	– layer_layer_6 (Layer)
	– GgAkjLkgJk (Group)
			– layer_layer_3 (Layer)
			– LkPoKgAsFD (Group)
				– layer_layer_5 (Layer)
]
```

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
{
    "order": [
        {
            "layer": "33"
        },
        {
            "layer": "13"
        },
        {
            "layer": "counties"
        },
        {
            "layer": "44"
        },
        {
            "layer": "43"
        },
        {
            "layer": "plss"
        },
        {
            "group": "5AksSjDjDd"
        },
        {
            "group": "tyrxgvRmKB"
        },
        {
            "group": "ou34ckvFHm"
        },
        {
            "group": "pgowvUVGHG"
        },
        {
            "group": "0GmxejyQKp"
        },
        {
            "group": "tRe6hnfiPy"
        },
        {
            "group": "gAkJksSjSj",
            "children": [
                {
                    "group": "tRe6hnfiPy"
                },
                {
                    "layer": "plss"
                },
                {
                    "layer": "counties"
                }
            ]
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
    "message": "User Layers & Groups has been reordered.",
    "data": [
        [
            33,
            {}
        ],
        [
            13,
            {}
        ],
        [
            "counties",
            {}
        ],
        [
            44,
            {}
        ],
        [
            43,
            {}
        ],
        [
            "plss",
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "pgowvUVGHG",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "0GmxejyQKp",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "gAkJksSjSj",
                "children": {
                    "groupIds": [
                        "tRe6hnfiPy"
                    ],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            {}
        ],
        [
            45,
            {}
        ],
        [
            46,
            {}
        ],
        [
            85,
            {}
        ],
        [
            86,
            {}
        ],
        [
            92,
            {}
        ]
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
    "message": "User Layers & Groups has been reordered.",
    "data": [
        [
            33,
            {}
        ],
        [
            13,
            {}
        ],
        [
            "counties",
            {}
        ],
        [
            44,
            {}
        ],
        [
            43,
            {}
        ],
        [
            "plss",
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "pgowvUVGHG",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "0GmxejyQKp",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "gAkJksSjSj",
                "children": {
                    "groupIds": [
                        "tRe6hnfiPy"
                    ],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            45,
            {}
        ],
        [
            46,
            {}
        ],
        [
            85,
            {}
        ],
        [
            86,
            {}
        ],
        [
            92,
            {}
        ]
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
    "message": "User Layers & Groups has been reordered.",
    "data": [
        [
            33,
            {}
        ],
        [
            13,
            {}
        ],
        [
            "counties",
            {}
        ],
        [
            44,
            {}
        ],
        [
            43,
            {}
        ],
        [
            "plss",
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "pgowvUVGHG",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "0GmxejyQKp",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "gAkJksSjSj",
                "children": {
                    "groupIds": [
                        "tRe6hnfiPy",
                        "tRe6hnfiPy"
                    ],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            {}
        ],
        [
            45,
            {}
        ],
        [
            46,
            {}
        ],
        [
            85,
            {}
        ],
        [
            86,
            {}
        ],
        [
            92,
            {}
        ]
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
    "message": "User Layers & Groups has been reordered.",
    "data": [
        [
            33,
            {}
        ],
        [
            13,
            {}
        ],
        [
            "counties",
            {}
        ],
        [
            44,
            {}
        ],
        [
            43,
            {}
        ],
        [
            "plss",
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "pgowvUVGHG",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "0GmxejyQKp",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "gAkJksSjSj",
                "children": {
                    "groupIds": [
                        "tRe6hnfiPy"
                    ],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            {}
        ],
        [
            45,
            {}
        ],
        [
            46,
            {}
        ],
        [
            85,
            {}
        ],
        [
            86,
            {}
        ],
        [
            92,
            {}
        ]
    ]
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
    "message": "Layer & Group Order Object (`order`) must be supplied."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers & Groups has been reordered.",
    "data": [
        [
            33,
            {}
        ],
        [
            13,
            {}
        ],
        [
            "counties",
            {}
        ],
        [
            44,
            {}
        ],
        [
            43,
            {}
        ],
        [
            "plss",
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "pgowvUVGHG",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "0GmxejyQKp",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "gAkJksSjSj",
                "children": {
                    "groupIds": [],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            {}
        ],
        [
            45,
            {}
        ],
        [
            46,
            {}
        ],
        [
            85,
            {}
        ],
        [
            86,
            {}
        ],
        [
            92,
            {}
        ]
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
    "message": "Layer & Group Order Object (`order`) must be supplied."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "User Layers & Groups has been reordered.",
    "data": [
        [
            33,
            {}
        ],
        [
            13,
            {}
        ],
        [
            "counties",
            {}
        ],
        [
            44,
            {}
        ],
        [
            43,
            {}
        ],
        [
            "plss",
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "pgowvUVGHG",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "0GmxejyQKp",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tRe6hnfiPy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            {}
        ],
        [
            {
                "label": "Common Layers",
                "parent": null,
                "groupId": "gAkJksSjSj",
                "children": {
                    "groupIds": [],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            {}
        ],
        [
            45,
            {}
        ],
        [
            46,
            {}
        ],
        [
            85,
            {}
        ],
        [
            86,
            {}
        ],
        [
            92,
            {}
        ]
    ]
}
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


