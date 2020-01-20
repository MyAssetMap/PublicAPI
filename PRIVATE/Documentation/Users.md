# Get All Possible Addons
## `GET` /alpha/addons

*`WIP` Returns all possible addons and their information

**userID Authentication (`OPTIONAL`):**
This endpoint does not require the user to authenticate themselves with their UUID.

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

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Addon information has been returned.",
    "data": [
        {
            "id": 1,
            "name": "NearMap",
            "description": "Aerial imagery and data insights move location analysis out of the field and into the office, giving businesses the tools to scale quickly and bring their most important initiatives to life."
        },
        {
            "id": 2,
            "name": "US Land Grid",
            "description": "USLandGrid provides instant access to high resolution vector data based on nationally trusted sources."
        },
        {
            "id": 3,
            "name": "Free System Layers",
            "description": "na"
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
    "success": true,
    "message": "Addon information has been returned.",
    "data": [
        {
            "id": 1,
            "name": "NearMap",
            "description": "Aerial imagery and data insights move location analysis out of the field and into the office, giving businesses the tools to scale quickly and bring their most important initiatives to life."
        },
        {
            "id": 2,
            "name": "US Land Grid",
            "description": "USLandGrid provides instant access to high resolution vector data based on nationally trusted sources."
        },
        {
            "id": 3,
            "name": "Free System Layers",
            "description": "na"
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
    "success": true,
    "message": "Addon information has been returned.",
    "data": [
        {
            "id": 1,
            "name": "NearMap",
            "description": "Aerial imagery and data insights move location analysis out of the field and into the office, giving businesses the tools to scale quickly and bring their most important initiatives to life."
        },
        {
            "id": 2,
            "name": "US Land Grid",
            "description": "USLandGrid provides instant access to high resolution vector data based on nationally trusted sources."
        },
        {
            "id": 3,
            "name": "Free System Layers",
            "description": "na"
        }
    ]
}
```
</details>


# Get Accounts
## `GET` /alpha/accounts

*`WIP` Returns a list of all accounts and their properties

**userID Authentication (`OPTIONAL`):**
This endpoint does not require the user to authenticate themselves with their UUID.

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

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Accounts information has been returned.",
    "data": [
        {
            "id": 1,
            "name": "Greeley Pipelines",
            "userCount": 2,
            "stripeSubscriptionID": 12,
            "dateUpdated": "2015-10-09T00:00:00.000Z",
            "dateCreated": "2013-10-02T00:00:00.000Z"
        },
        {
            "id": 2,
            "name": "Greeley Electrical",
            "userCount": 1,
            "stripeSubscriptionID": 23,
            "dateUpdated": "2016-05-19T00:00:00.000Z",
            "dateCreated": "2010-11-05T00:00:00.000Z"
        },
        {
            "id": 3,
            "name": "Denver Construction LLC",
            "userCount": 2,
            "stripeSubscriptionID": 55,
            "dateUpdated": "2018-01-10T00:00:00.000Z",
            "dateCreated": "2006-01-11T00:00:00.000Z"
        },
        {
            "id": 4,
            "name": "FoCo Industries",
            "userCount": 1,
            "stripeSubscriptionID": 24,
            "dateUpdated": "2017-12-15T00:00:00.000Z",
            "dateCreated": "2010-05-19T00:00:00.000Z"
        },
        {
            "id": 0,
            "name": "GLOBAL",
            "userCount": 0,
            "stripeSubscriptionID": 0,
            "dateUpdated": null,
            "dateCreated": null
        }
    ]
}
```
</details>


# Get Users
## `GET` /alpha/users

*`WIP` Returns a list of all users and their properties

**userID Authentication (`Required`):**
This endpoint requires the user to authenticate themselves with their UUID.

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

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User information has been returned.",
    "data": [
        {
            "id": 1,
            "firstName": "Ted",
            "lastName": "Murillo",
            "email": "TMurillo@GPipelines.com",
            "cognitoUUID": "00000000-0000-0000-0000-000000000000",
            "isDisabled": false,
            "lastLogin": "2019-09-02T00:00:00.000Z",
            "dateUpdated": "2019-04-02T00:00:00.000Z",
            "dateCreated": "2015-10-15T00:00:00.000Z",
            "userLayers": []
        },
        {
            "id": 2,
            "firstName": "Joss",
            "lastName": "Murillo",
            "email": "JWood@Greeleyelectrical.com",
            "cognitoUUID": "00000000-0000-0000-0000-000000000000",
            "isDisabled": false,
            "lastLogin": "2019-09-02T00:00:00.000Z",
            "dateUpdated": "2019-04-03T00:00:00.000Z",
            "dateCreated": "2010-11-05T00:00:00.000Z",
            "userLayers": []
        },
        {
            "id": 3,
            "firstName": "Roland",
            "lastName": "Edwards",
            "email": "RolandEd1@GPipelines.com",
            "cognitoUUID": "00000000-0000-0000-0000-000000000000",
            "isDisabled": false,
            "lastLogin": "2019-09-02T00:00:00.000Z",
            "dateUpdated": "2018-04-04T00:00:00.000Z",
            "dateCreated": "2015-10-09T00:00:00.000Z",
            "userLayers": []
        },
        {
            "id": 4,
            "firstName": "Carol",
            "lastName": "House",
            "email": "CarolH@denverLLC.com",
            "cognitoUUID": "00000000-0000-0000-0000-000000000000",
            "isDisabled": true,
            "lastLogin": "2019-09-01T00:00:00.000Z",
            "dateUpdated": "2017-08-05T00:00:00.000Z",
            "dateCreated": "2006-01-11T00:00:00.000Z",
            "userLayers": []
        },
        {
            "id": 5,
            "firstName": "Darius",
            "lastName": "Vance",
            "email": "DDDV@denverLLC.com",
            "cognitoUUID": "00000000-0000-0000-0000-000000000000",
            "isDisabled": false,
            "lastLogin": "2019-09-02T00:00:00.000Z",
            "dateUpdated": "2018-04-06T00:00:00.000Z",
            "dateCreated": "2007-02-14T00:00:00.000Z",
            "userLayers": []
        },
        {
            "id": 6,
            "firstName": "Malak",
            "lastName": "Webb",
            "email": "MalakWeb@FoCoIndustries.com",
            "cognitoUUID": "00000000-0000-0000-0000-000000000000",
            "isDisabled": false,
            "lastLogin": "2019-09-02T00:00:00.000Z",
            "dateUpdated": "2019-04-07T00:00:00.000Z",
            "dateCreated": "2010-05-19T00:00:00.000Z",
            "userLayers": []
        },
        {
            "id": 0,
            "firstName": "GLOBAL",
            "lastName": "USER",
            "email": "support@myassetmap.com",
            "cognitoUUID": "00000000-0000-0000-0000-000000000000",
            "isDisabled": false,
            "lastLogin": null,
            "dateUpdated": null,
            "dateCreated": null,
            "userLayers": [
                [
                    "plss",
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    {
                        "label": "Common Layers",
                        "groupId": "1",
                        "parent": null,
                        "layerIds": [
                            "plss",
                            "counties"
                        ]
                    },
                    {}
                ],
                [
                    "counties",
                    {}
                ]
            ]
        },
        {
            "id": 8,
            "firstName": "Dakotah",
            "lastName": "Intriglia",
            "email": "\"\"",
            "cognitoUUID": "6872305e-65e3-48f1-a785-08ce114c8e49",
            "isDisabled": false,
            "lastLogin": null,
            "dateUpdated": null,
            "dateCreated": null,
            "userLayers": [
                [
                    "plss",
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    {
                        "label": "Common Layers",
                        "groupId": "1",
                        "parent": null,
                        "layerIds": [
                            "plss",
                            "counties"
                        ]
                    },
                    {}
                ],
                [
                    "counties",
                    {}
                ]
            ]
        }
    ]
}
```
</details>


# Get Super Users
## `GET` /alpha/superusers

*`WIP` Returns the super user information. 

**userID Authentication (`REQUIRED`):**
This endpoint does not require the user to authenticate themselves with their UUID.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
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
    "success": true,
    "message": "Super User preference has been returned.",
    "data": [
        {
            "id": 1,
            "userID": 1,
            "accountID": 1
        },
        {
            "id": 2,
            "userID": 2,
            "accountID": 2
        },
        {
            "id": 3,
            "userID": 4,
            "accountID": 3
        },
        {
            "id": 4,
            "userID": 6,
            "accountID": 4
        }
    ]
}
```
</details>


# Get User Initialization
## `GET` /alpha/users/init

*`WIP` Returns all necessary information about the user upon first login to the application. Occurs on login automatically; userID is automatically passed in UUID form.

**userID Authentication (`Required`):**
This endpoint requires the user to authenticate themselves with their UUID.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
    –

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User information obtained successfully.",
    "data": {
        "isActive": true,
        "profile": {
            "userID": 8,
            "firstName": "Dakotah",
            "lastName": "Intriglia",
            "displayName": "Dakotah Intriglia"
        },
        "preferences": {
            "tool.print.layout": [
                {
                    "id": 9,
                    "name": "",
                    "value": null
                },
                {
                    "id": 10,
                    "name": "",
                    "value": null
                }
            ]
        },
        "superUserID": [],
        "accountID": [
            1
        ],
        "mapID": [
            1
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
    "message": "User information obtained successfully.",
    "data": {
        "isActive": true,
        "profile": {
            "userID": 8,
            "firstName": "Dakotah",
            "lastName": "Intriglia",
            "displayName": "Dakotah Intriglia"
        },
        "tools": {
            "printLayouts": []
        },
        "superUserID": [],
        "accountID": [
            1
        ],
        "mapID": [
            1
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
    "message": "User information obtained successfully.",
    "data": {
        "isActive": true,
        "profile": {
            "userID": 8,
            "firstName": "Dakotah",
            "lastName": "Intriglia",
            "displayName": "Dakotah Intriglia"
        },
        "superUserID": [],
        "accountID": [
            1
        ],
        "mapID": [
            1
        ]
    }
}
```
</details>


# Create Users Preference
## `POST` /alpha/user/preferences/add

*Create a new User Preference Item

- **userID (Required):** The User ID you wish to add the user preferencer for.
- **key (Required):** The textual key of the user preference you wish to create.
- **——OPTIONAL——**
- **name (Optional):** The Name of the preference
- **value (Required):** The Value of the preference

Value is required, and name can be used if you would like. Here are some examples:

- **Boolean:** {value: true}
- **Book Review:** {name: "Book Title", value: "I love this book so much!"}

If the name is null, it will be removed from the payload on return. Value will be in the payload no matter what.

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
    "key": "tool.print.layout",
    "value": "[\"Hello\"]"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User preferences have been created.",
    "data": "User Preference Key (`key`) is invalid."
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User preferences have been created.",
    "data": 13
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User preferences have been created.",
    "data": 12
}
```
</details>


# Get Users Preferences
## `POST` /alpha/user/preferences/get

*Get all user preferences for a user, or by a key for a user.

- **userID (Required):** The User ID you wish to add the user preferencer for.
- **key (Optional):** The textual key of the user preference you wish to locate. If not provided, all user preferences would be returned.

If the name is null, it will be removed from the payload on return. Value will be in the payload no matter what.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
{}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User preferences have been returned.",
    "data": {
        "tool.print.layout": [
            {
                "id": 9,
                "value": null
            },
            {
                "id": 10,
                "value": null
            },
            {
                "id": 12,
                "name": "undefined",
                "value": [
                    "Hello"
                ]
            },
            {
                "id": 13,
                "value": [
                    "Hello"
                ]
            }
        ]
    }
}
```
</details>


# Update Users Preferences 
## `POST` /alpha/user/preferences/update

*Update a User Preference Item by prefID

- **userID (Required):** The User ID you wish to add the user preferencer for.
- **prefID (Required):** The User Preferences ID of the user preference you wish to update.
- **——OPTIONAL——**
- **name (Optional):** The Name of the preference
- **value (Optional):** The Value of the preference

Both items can be used, either can be used, or neither can be used. Here are some examples:

- **Boolean:** {value: true}
- **Book Review:** {name: "Book Title", value: "I love this book so much!"}

If the name is null, it will be removed from the payload on return. Value will be in the payload no matter what.

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
    "prefID": 14,
    "name": "Test",
    "value": "\"Another value\""
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "User Preference ID (`prefID`) does not exist!"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User preferences have been updated.",
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
    "message": "User preferences have been returned.",
    "data": []
}
```
</details>


# Delete Users Preferences 
## `POST` /alpha/user/preferences/delete

*Delete a User Preference Item by prefID

- **userID (Required):** The User ID you wish to add the user preferencer for.
- **prefID (Required):** The User Preferences ID of the user preference you wish to update.

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
    "prefID": 12
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "User Preference ID (`prefID`) does not exist!"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User preferences have been returned.",
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
    "label": "This is a Test!",
    "mapID": "1"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User Group has been created.",
    "data": "XCE22fIfQa"
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
{
    "message": "Internal server error"
}
```
</details>


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

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User Layers have been returned for user #16",
    "data": {
        "user": {
            "0": "plss",
            "1": "counties",
            "2": {
                "label": "Common Layers",
                "groupId": "gKlasSdDsS",
                "children": {
                    "groupIds": [],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            "69": [
                {
                    "toc": {
                        "id": "test_103",
                        "label": "TEST",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "test_test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2099"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "test_test_99",
                                "type": "fill",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {
                                    "fill-opacity": 1,
                                    "fill-color": "#000000"
                                },
                                "metadata": {
                                    "label": "TEST"
                                },
                                "filter": [],
                                "source": "test_test_source"
                            },
                            "symbol": {
                                "id": "test_test_99_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol"
                                },
                                "source-layer": "layer_1_user",
                                "source": "test_test_source"
                            },
                            "outline": {
                                "id": "test_test_99_outline",
                                "type": "line",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Outline"
                                },
                                "source-layer": "layer_1_user",
                                "source": "test_test_source"
                            }
                        }
                    ]
                }
            ]
        }
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
    "message": "User Layers have been returned for user #16",
    "data": {
        "user": {
            "0": "plss",
            "1": "counties",
            "2": {
                "label": "Common Layers",
                "groupId": "gKlasSdDsS",
                "children": {
                    "groupIds": [],
                    "layerIds": [
                        "plss",
                        "counties"
                    ]
                }
            },
            "68": [
                {
                    "toc": {
                        "id": "fill-sub_102",
                        "label": "FILL SUB",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "fill-sub_fill-sub_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2098"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "fill-sub_fill-sub_98",
                                "type": "fill",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {
                                    "fill-opacity": 1,
                                    "fill-color": "#000000"
                                },
                                "metadata": {
                                    "label": "FILL SUB"
                                },
                                "filter": [],
                                "source": "fill-sub_fill-sub_source"
                            },
                            "symbol": {
                                "id": "fill-sub_fill-sub_98_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol"
                                },
                                "source-layer": "fill-sub",
                                "source": "fill-sub_fill-sub_source"
                            },
                            "outline": {
                                "id": "fill-sub_fill-sub_98_outline",
                                "type": "outline",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Outline"
                                },
                                "source-layer": "fill-sub",
                                "source": "fill-sub_fill-sub_source"
                            }
                        }
                    ]
                }
            ]
        }
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
            },
            "18": [
                {
                    "toc": {
                        "id": "symbol-test_100",
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
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2096"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "symbol-test_symbol-test_96",
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
                                "id": "symbol-test_symbol-test_96_symbol",
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
            "19": [
                {
                    "toc": {
                        "id": "fill-test_101",
                        "label": "Fill Test",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "fill-test_fill-test_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?filter=layer%20%3D%2097"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "fill-test_fill-test_97",
                                "type": "fill",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 10,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Fill Test"
                                },
                                "filter": [],
                                "source": "fill-test_fill-test_source"
                            },
                            "symbol": {
                                "id": "fill-test_fill-test_97_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol"
                                },
                                "source-layer": "fill-test",
                                "source": "fill-test_fill-test_source"
                            },
                            "outline": {
                                "id": "fill-test_fill-test_97_outline",
                                "type": "outline",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {},
                                "paint": {},
                                "metadata": {
                                    "label": "Outline"
                                },
                                "source-layer": "fill-test",
                                "source": "fill-test_fill-test_source"
                            }
                        }
                    ]
                }
            ]
        }
    }
}
```
</details>


# Get Common Layers
## `GET` /alpha/layers/public

**DEPRECATED* Returns all of the Public Common layers in the Mapbox Spec. Used purely for reference at this point as public common layers are now stored directly in the client.*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
    –

***



### Response:

<details>
<summary>Expand</summary>

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
</details>


# Order Layers & Groups
## `POST` /alpha/layer/order

*Pass the ids of the groups and layers in the correct order. 

Any userLayer IDs not in the order object will be moved to the end of the object in the same order they were. Any group IDs not in the order object will be *deleted*.

- **userID (Required):** The User ID you wish to create the group for
- **order (Required):** The object of Ids you would like to pass.
- **delete BOOL (Optional):** Should any groups that are not passed be deleted? *Defaults to false*

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
            "layer": "plss"
        },
        {
            "group": "ou34ckvFHm",
            "children": [
                {
                    "layer": "plss"
                },
                {
                    "layer": "counties"
                },
                {
                    "group": "tyrxgvRmKB"
                }
            ]
        },
        {
            "group": "tyrxgvRmKB",
            "children": [
                {
                    "layer": "33"
                }
            ]
        }
    ]
}
```

***



### Response:

<details>
<summary>Expand</summary>

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
            "plss",
            {}
        ],
        [
            "counties",
            {}
        ],
        [
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "ou34ckvFHm",
                "children": {
                    "groupIds": [
                        "tyrxgvRmKB"
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
            {
                "color": "#f2f2f2",
                "label": "This is a good group 2",
                "groupId": "tyrxgvRmKB",
                "children": {
                    "groupIds": [],
                    "layerIds": [
                        "33"
                    ]
                }
            },
            {}
        ],
        [
            43,
            {}
        ],
        [
            44,
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
        ],
        [
            100,
            {}
        ],
        [
            101,
            {}
        ]
    ]
}
```
</details>


