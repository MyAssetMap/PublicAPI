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


# Get Users Preferences
## `GET` /alpha/userpreference

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
    "message": "User preference information has been returned.",
    "data": [
        {
            "id": 1,
            "userID": 1
        },
        {
            "id": 2,
            "userID": 2
        },
        {
            "id": 3,
            "userID": 3
        },
        {
            "id": 4,
            "userID": 4
        },
        {
            "id": 5,
            "userID": 5
        },
        {
            "id": 6,
            "userID": 6
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
            "userID": 16,
            "firstName": "Shane",
            "lastName": "Bergman",
            "displayName": "Shane Bergman"
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
            "userID": 16,
            "firstName": "Shane",
            "lastName": "Bergman",
            "displayName": "Shane Bergman"
        },
        "superUserID": [],
        "accountID": [
            1
        ],
        "mapID": [
            1,
            2
        ]
    }
}
```
</details>


