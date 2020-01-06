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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
    –

***




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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
    –

***




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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
            "id": 17,
            "firstName": "–",
            "lastName": "–",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2019-12-23T00:00:00.000Z"
        },
        {
            "id": 0,
            "firstName": "GLOBAL",
            "lastName": "USER",
            "isDisabled": false,
            "lastLogin": null,
            "dateUpdated": null,
            "dateCreated": null
        },
        {
            "id": 16,
            "firstName": "Shane",
            "lastName": "Bergman",
            "isDisabled": false,
            "lastLogin": "2020-01-06T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2019-12-14T00:00:00.000Z"
        },
        {
            "id": 19,
            "firstName": "–",
            "lastName": "–",
            "isDisabled": false,
            "lastLogin": "2020-01-06T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2020-01-03T00:00:00.000Z"
        },
        {
            "id": 8,
            "firstName": "Dakotah",
            "lastName": "Intriglia",
            "isDisabled": false,
            "lastLogin": "2020-01-06T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": null
        },
        {
            "id": 18,
            "firstName": "–",
            "lastName": "–",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2020-01-03T00:00:00.000Z"
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
    "message": "User information has been returned.",
    "data": [
        {
            "id": 17,
            "firstName": "–",
            "lastName": "–",
            "cognitoUUID": "3b625216-4823-498c-9fea-ba46c406d803",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2019-12-23T00:00:00.000Z",
            "userLayers": [
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
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ]
            ]
        },
        {
            "id": 0,
            "firstName": "GLOBAL",
            "lastName": "USER",
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
            "id": 16,
            "firstName": "Shane",
            "lastName": "Bergman",
            "cognitoUUID": "6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c",
            "isDisabled": false,
            "lastLogin": "2020-01-06T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2019-12-14T00:00:00.000Z",
            "userLayers": [
                [
                    13,
                    {}
                ],
                [
                    "plss",
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ],
                [
                    117,
                    {}
                ],
                [
                    118,
                    {}
                ],
                [
                    119,
                    {}
                ],
                [
                    120,
                    {}
                ],
                [
                    121,
                    {}
                ],
                [
                    122,
                    {}
                ],
                [
                    123,
                    {}
                ],
                [
                    "counties",
                    {}
                ]
            ]
        },
        {
            "id": 19,
            "firstName": "–",
            "lastName": "–",
            "cognitoUUID": "d3dafb67-a09b-4f6a-a867-9c5c63bbd108",
            "isDisabled": false,
            "lastLogin": "2020-01-06T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2020-01-03T00:00:00.000Z",
            "userLayers": [
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
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ]
            ]
        },
        {
            "id": 8,
            "firstName": "Dakotah",
            "lastName": "Intriglia",
            "cognitoUUID": "6872305e-65e3-48f1-a785-08ce114c8e49",
            "isDisabled": false,
            "lastLogin": "2020-01-06T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": null,
            "userLayers": [
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
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    116,
                    {}
                ]
            ]
        },
        {
            "id": 18,
            "firstName": "–",
            "lastName": "–",
            "cognitoUUID": "1a1742bb-2f35-4439-ab4e-6f24dd4fa274",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2020-01-03T00:00:00.000Z",
            "userLayers": [
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
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ]
            ]
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
    "message": "User information has been returned.",
    "data": [
        {
            "id": 17,
            "firstName": "–",
            "lastName": "–",
            "cognitoUUID": "3b625216-4823-498c-9fea-ba46c406d803",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2019-12-23T00:00:00.000Z",
            "userLayers": [
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
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ]
            ]
        },
        {
            "id": 16,
            "firstName": "Shane",
            "lastName": "Bergman",
            "cognitoUUID": "6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2019-12-14T00:00:00.000Z",
            "userLayers": [
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
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "This is a good group 2",
                        "groupId": "E8GDS6Ufjh",
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
                        "groupId": "cKYSpTTk2x",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ]
            ]
        },
        {
            "id": 0,
            "firstName": "GLOBAL",
            "lastName": "USER",
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
            "id": 19,
            "firstName": "–",
            "lastName": "–",
            "cognitoUUID": "d3dafb67-a09b-4f6a-a867-9c5c63bbd108",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2020-01-03T00:00:00.000Z",
            "userLayers": [
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
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ]
            ]
        },
        {
            "id": 18,
            "firstName": "–",
            "lastName": "–",
            "cognitoUUID": "1a1742bb-2f35-4439-ab4e-6f24dd4fa274",
            "isDisabled": false,
            "lastLogin": "2020-01-03T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": "2020-01-03T00:00:00.000Z",
            "userLayers": [
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
                    {}
                ],
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    114,
                    {}
                ],
                [
                    115,
                    {}
                ]
            ]
        },
        {
            "id": 8,
            "firstName": "Dakotah",
            "lastName": "Intriglia",
            "cognitoUUID": "6872305e-65e3-48f1-a785-08ce114c8e49",
            "isDisabled": false,
            "lastLogin": "2020-01-02T00:00:00.000Z",
            "dateUpdated": null,
            "dateCreated": null,
            "userLayers": [
                [
                    {
                        "color": "#f2f2f2",
                        "label": "kjhlkjhjklh",
                        "groupId": "VwGpXu7FCy",
                        "children": {
                            "groupIds": [],
                            "layerIds": []
                        }
                    },
                    {}
                ],
                [
                    112,
                    {}
                ],
                [
                    105,
                    {}
                ],
                [
                    103,
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
                    {}
                ],
                [
                    13,
                    {}
                ],
                [
                    22,
                    {}
                ],
                [
                    23,
                    {}
                ],
                [
                    24,
                    {}
                ],
                [
                    25,
                    {}
                ],
                [
                    26,
                    {}
                ],
                [
                    27,
                    {}
                ],
                [
                    28,
                    {}
                ],
                [
                    29,
                    {}
                ],
                [
                    30,
                    {}
                ],
                [
                    34,
                    {}
                ],
                [
                    35,
                    {}
                ],
                [
                    36,
                    {}
                ],
                [
                    37,
                    {}
                ],
                [
                    38,
                    {}
                ],
                [
                    39,
                    {}
                ],
                [
                    40,
                    {}
                ],
                [
                    41,
                    {}
                ],
                [
                    42,
                    {}
                ],
                [
                    47,
                    {}
                ],
                [
                    48,
                    {}
                ],
                [
                    49,
                    {}
                ],
                [
                    50,
                    {}
                ],
                [
                    51,
                    {}
                ],
                [
                    52,
                    {}
                ],
                [
                    53,
                    {}
                ],
                [
                    54,
                    {}
                ],
                [
                    55,
                    {}
                ],
                [
                    56,
                    {}
                ],
                [
                    57,
                    {}
                ],
                [
                    58,
                    {}
                ],
                [
                    59,
                    {}
                ],
                [
                    60,
                    {}
                ],
                [
                    61,
                    {}
                ],
                [
                    62,
                    {}
                ],
                [
                    63,
                    {}
                ],
                [
                    64,
                    {}
                ],
                [
                    65,
                    {}
                ],
                [
                    66,
                    {}
                ],
                [
                    67,
                    {}
                ],
                [
                    68,
                    {}
                ],
                [
                    69,
                    {}
                ],
                [
                    70,
                    {}
                ],
                [
                    71,
                    {}
                ],
                [
                    72,
                    {}
                ],
                [
                    73,
                    {}
                ],
                [
                    74,
                    {}
                ],
                [
                    75,
                    {}
                ],
                [
                    76,
                    {}
                ],
                [
                    77,
                    {}
                ],
                [
                    78,
                    {}
                ],
                [
                    79,
                    {}
                ],
                [
                    82,
                    {}
                ],
                [
                    83,
                    {}
                ],
                [
                    84,
                    {}
                ],
                [
                    87,
                    {}
                ],
                [
                    88,
                    {}
                ],
                [
                    89,
                    {}
                ],
                [
                    90,
                    {}
                ],
                [
                    91,
                    {}
                ],
                [
                    93,
                    {}
                ],
                [
                    94,
                    {}
                ],
                [
                    95,
                    {}
                ],
                [
                    98,
                    {}
                ],
                [
                    99,
                    {}
                ],
                [
                    102,
                    {}
                ],
                [
                    104,
                    {}
                ],
                [
                    106,
                    {}
                ],
                [
                    107,
                    {}
                ],
                [
                    108,
                    {}
                ],
                [
                    109,
                    {}
                ],
                [
                    110,
                    {}
                ],
                [
                    111,
                    {}
                ],
                [
                    113,
                    {}
                ],
                [
                    116,
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
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>TypeError: Q.General.getSuperUsers is not a function<br> &nbsp; &nbsp;at /var/task/index.js:236:13<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/var/task/node_modules/express/lib/router/route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (/var/task/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /var/task/node_modules/express/lib/router/index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (/var/task/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/var/task/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at jsonParser (/var/task/node_modules/body-parser/lib/types/json.js:119:7)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)</pre>
</body>
</html>

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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
{
    "message": "Internal server error"
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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

+ Body:
```
{
    "label": "This is a good group 2",
    "mapID": "0"
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
    "data": "cKYSpTTk2x"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User Group has been created.",
    "data": "E8GDS6Ufjh"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User Group has been created.",
    "data": "0GmxejyQKp"
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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
                "color": "#f2f2f2",
                "label": "ADMIN",
                "groupId": "nc5Eyfi1h3",
                "children": {
                    "groupIds": [],
                    "layerIds": [
                        "counties"
                    ]
                }
            },
            "3": {
                "color": "#f2f2f2",
                "label": "CHILD 1",
                "groupId": "lJJp3VZQ2E",
                "children": {
                    "groupIds": [
                        "nc5Eyfi1h3"
                    ],
                    "layerIds": [
                        "123",
                        "123",
                        "plss",
                        "123"
                    ]
                }
            },
            "4": {
                "color": "#f2f2f2",
                "label": "SURVEY",
                "groupId": "4cjyyRhAcd",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "5": {
                "color": "#f2f2f2",
                "label": "COMMON",
                "groupId": "Wl45bVx7yc",
                "children": {
                    "groupIds": [
                        "lJJp3VZQ2E",
                        "4cjyyRhAcd"
                    ],
                    "layerIds": []
                }
            },
            "6": [
                {
                    "toc": {
                        "id": "tesd_123",
                        "label": "TESD",
                        "description": "",
                        "canExpand": false,
                        "canOrgView": false,
                        "canOrgEdit": false,
                        "group": "dataLayer"
                    },
                    "sourcesArray": [
                        {
                            "id": "tesd_tesd_source",
                            "type": "vector",
                            "tiles": [
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?columns=prop%2Cid&filter=layer%20%3D%20119"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "tesd_tesd_119",
                                "type": "fill",
                                "source-layer": "layer_1_user",
                                "interactive": true,
                                "minzoom": 8,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {
                                    "fill-opacity": 1,
                                    "fill-color": "#000000"
                                },
                                "metadata": {
                                    "label": "TESD"
                                },
                                "filter": {},
                                "source": "tesd_tesd_source"
                            },
                            "symbol": {
                                "id": "tesd_tesd_119_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 8,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol"
                                },
                                "source-layer": "layer_1_user",
                                "source": "tesd_tesd_source"
                            },
                            "outline": {
                                "id": "tesd_tesd_119_outline",
                                "type": "line",
                                "interactive": false,
                                "minzoom": 8,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Outline"
                                },
                                "source-layer": "layer_1_user",
                                "source": "tesd_tesd_source"
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
            "0": {
                "color": "#f2f2f2",
                "label": "kjhlkjhjklh",
                "groupId": "VwGpXu7FCy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "4": "plss",
            "5": "counties",
            "6": {
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
            "81": [
                {
                    "toc": {
                        "id": "fill-test_116",
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
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?columns=prop%2Cid&filter=layer%20%3D%20112"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "fill-test_fill-test_112",
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
                                "id": "fill-test_fill-test_112_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 8,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol"
                                },
                                "source-layer": "layer_1_user",
                                "source": "fill-test_fill-test_source"
                            },
                            "outline": {
                                "id": "fill-test_fill-test_112_outline",
                                "type": "line",
                                "interactive": false,
                                "minzoom": 8,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Outline"
                                },
                                "source-layer": "layer_1_user",
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

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "User Layers have been returned for user #8",
    "data": {
        "user": {
            "0": {
                "color": "#f2f2f2",
                "label": "kjhlkjhjklh",
                "groupId": "VwGpXu7FCy",
                "children": {
                    "groupIds": [],
                    "layerIds": []
                }
            },
            "4": "plss",
            "5": "counties",
            "6": {
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
            "81": [
                {
                    "toc": {
                        "id": "fill-test_116",
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
                                "https://tiles.myassetmap.com/v1/mvt/layer_1_user/{z}/{x}/{y}?columns=prop%2Cid&filter=layer%20%3D%20112"
                            ],
                            "maxzoom": 10
                        }
                    ],
                    "layersArray": [
                        {
                            "beforeLayer": null,
                            "layer": {
                                "id": "fill-test_fill-test_112",
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
                                "id": "fill-test_fill-test_112_symbol",
                                "type": "symbol",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Symbol"
                                },
                                "source-layer": "layer_1_user",
                                "source": "fill-test_fill-test_source"
                            },
                            "outline": {
                                "id": "fill-test_fill-test_112_outline",
                                "type": "line",
                                "interactive": false,
                                "minzoom": 0,
                                "layout": {
                                    "visibility": "none"
                                },
                                "paint": {},
                                "metadata": {
                                    "label": "Outline"
                                },
                                "source-layer": "layer_1_user",
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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
                        "id": "counties_counties_source",
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
                            "source-layer": "counties",
                            "interactive": false,
                            "minzoom": 10,
                            "layout": {
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "red",
                                "line-opacity": 1
                            },
                            "metadata": {
                                "label": "Counties"
                            },
                            "filter": [],
                            "source": "counties_counties_source"
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
                        "id": "plss_townships_source",
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
                            "metadata": {
                                "label": "Sections"
                            },
                            "filter": [],
                            "source": "plss_sections_source"
                        }
                    },
                    {
                        "beforeLayer": null,
                        "layer": {
                            "id": "plss_townships_1",
                            "type": "line",
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
                                },
                                "label": "Townships"
                            },
                            "filter": [],
                            "source": "plss_townships_source"
                        }
                    }
                ]
            }
        ]
    ]
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
    "success": false,
    "message": "Authentication Failed: User UUID (`userID`) was not passed."
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
    + `userID`: 6b3fd4ca-9e4b-49e6-9beb-6cf31e7d780c

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
            13,
            {}
        ],
        [
            "plss",
            {}
        ],
        [
            22,
            {}
        ],
        [
            23,
            {}
        ],
        [
            24,
            {}
        ],
        [
            25,
            {}
        ],
        [
            26,
            {}
        ],
        [
            27,
            {}
        ],
        [
            28,
            {}
        ],
        [
            29,
            {}
        ],
        [
            30,
            {}
        ],
        [
            34,
            {}
        ],
        [
            35,
            {}
        ],
        [
            36,
            {}
        ],
        [
            37,
            {}
        ],
        [
            38,
            {}
        ],
        [
            39,
            {}
        ],
        [
            40,
            {}
        ],
        [
            41,
            {}
        ],
        [
            42,
            {}
        ],
        [
            47,
            {}
        ],
        [
            48,
            {}
        ],
        [
            49,
            {}
        ],
        [
            50,
            {}
        ],
        [
            51,
            {}
        ],
        [
            52,
            {}
        ],
        [
            53,
            {}
        ],
        [
            54,
            {}
        ],
        [
            55,
            {}
        ],
        [
            56,
            {}
        ],
        [
            57,
            {}
        ],
        [
            58,
            {}
        ],
        [
            59,
            {}
        ],
        [
            60,
            {}
        ],
        [
            61,
            {}
        ],
        [
            62,
            {}
        ],
        [
            63,
            {}
        ],
        [
            64,
            {}
        ],
        [
            65,
            {}
        ],
        [
            66,
            {}
        ],
        [
            67,
            {}
        ],
        [
            68,
            {}
        ],
        [
            69,
            {}
        ],
        [
            70,
            {}
        ],
        [
            71,
            {}
        ],
        [
            72,
            {}
        ],
        [
            73,
            {}
        ],
        [
            74,
            {}
        ],
        [
            75,
            {}
        ],
        [
            76,
            {}
        ],
        [
            77,
            {}
        ],
        [
            78,
            {}
        ],
        [
            79,
            {}
        ],
        [
            82,
            {}
        ],
        [
            83,
            {}
        ],
        [
            84,
            {}
        ],
        [
            87,
            {}
        ],
        [
            88,
            {}
        ],
        [
            89,
            {}
        ],
        [
            90,
            {}
        ],
        [
            91,
            {}
        ],
        [
            93,
            {}
        ],
        [
            94,
            {}
        ],
        [
            95,
            {}
        ],
        [
            98,
            {}
        ],
        [
            99,
            {}
        ],
        [
            102,
            {}
        ],
        [
            103,
            {}
        ],
        [
            104,
            {}
        ],
        [
            105,
            {}
        ],
        [
            106,
            {}
        ],
        [
            107,
            {}
        ],
        [
            108,
            {}
        ],
        [
            109,
            {}
        ],
        [
            110,
            {}
        ],
        [
            111,
            {}
        ],
        [
            112,
            {}
        ],
        [
            113,
            {}
        ],
        [
            114,
            {}
        ],
        [
            115,
            {}
        ],
        [
            117,
            {}
        ],
        [
            118,
            {}
        ],
        [
            119,
            {}
        ],
        [
            120,
            {}
        ],
        [
            121,
            {}
        ],
        [
            122,
            {}
        ],
        [
            123,
            {}
        ],
        [
            "counties",
            {}
        ]
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
    "message": "User Layers & Groups has been reordered.",
    "data": [
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
            22,
            {}
        ],
        [
            23,
            {}
        ],
        [
            24,
            {}
        ],
        [
            25,
            {}
        ],
        [
            26,
            {}
        ],
        [
            27,
            {}
        ],
        [
            28,
            {}
        ],
        [
            29,
            {}
        ],
        [
            30,
            {}
        ],
        [
            34,
            {}
        ],
        [
            35,
            {}
        ],
        [
            36,
            {}
        ],
        [
            37,
            {}
        ],
        [
            38,
            {}
        ],
        [
            39,
            {}
        ],
        [
            40,
            {}
        ],
        [
            41,
            {}
        ],
        [
            42,
            {}
        ],
        [
            47,
            {}
        ],
        [
            48,
            {}
        ],
        [
            49,
            {}
        ],
        [
            50,
            {}
        ],
        [
            51,
            {}
        ],
        [
            52,
            {}
        ],
        [
            53,
            {}
        ],
        [
            54,
            {}
        ],
        [
            55,
            {}
        ],
        [
            56,
            {}
        ],
        [
            57,
            {}
        ],
        [
            58,
            {}
        ],
        [
            59,
            {}
        ],
        [
            60,
            {}
        ],
        [
            61,
            {}
        ],
        [
            62,
            {}
        ],
        [
            63,
            {}
        ],
        [
            64,
            {}
        ],
        [
            65,
            {}
        ],
        [
            66,
            {}
        ],
        [
            67,
            {}
        ],
        [
            68,
            {}
        ],
        [
            69,
            {}
        ],
        [
            70,
            {}
        ],
        [
            71,
            {}
        ],
        [
            72,
            {}
        ],
        [
            73,
            {}
        ],
        [
            74,
            {}
        ],
        [
            75,
            {}
        ],
        [
            76,
            {}
        ],
        [
            77,
            {}
        ],
        [
            78,
            {}
        ],
        [
            79,
            {}
        ],
        [
            82,
            {}
        ],
        [
            83,
            {}
        ],
        [
            84,
            {}
        ],
        [
            87,
            {}
        ],
        [
            88,
            {}
        ],
        [
            89,
            {}
        ],
        [
            90,
            {}
        ],
        [
            91,
            {}
        ],
        [
            93,
            {}
        ],
        [
            94,
            {}
        ],
        [
            95,
            {}
        ],
        [
            98,
            {}
        ],
        [
            99,
            {}
        ],
        [
            102,
            {}
        ],
        [
            103,
            {}
        ],
        [
            104,
            {}
        ],
        [
            105,
            {}
        ],
        [
            106,
            {}
        ],
        [
            107,
            {}
        ],
        [
            108,
            {}
        ],
        [
            109,
            {}
        ],
        [
            110,
            {}
        ],
        [
            111,
            {}
        ],
        [
            112,
            {}
        ],
        [
            113,
            {}
        ],
        [
            116,
            {}
        ]
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
    "message": "User Layers & Groups has been reordered.",
    "data": [
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
            22,
            {}
        ],
        [
            23,
            {}
        ],
        [
            24,
            {}
        ],
        [
            25,
            {}
        ],
        [
            26,
            {}
        ],
        [
            27,
            {}
        ],
        [
            28,
            {}
        ],
        [
            29,
            {}
        ],
        [
            30,
            {}
        ],
        [
            34,
            {}
        ],
        [
            35,
            {}
        ],
        [
            36,
            {}
        ],
        [
            37,
            {}
        ],
        [
            38,
            {}
        ],
        [
            39,
            {}
        ],
        [
            40,
            {}
        ],
        [
            41,
            {}
        ],
        [
            42,
            {}
        ],
        [
            47,
            {}
        ],
        [
            48,
            {}
        ],
        [
            49,
            {}
        ],
        [
            50,
            {}
        ],
        [
            51,
            {}
        ],
        [
            52,
            {}
        ],
        [
            53,
            {}
        ],
        [
            54,
            {}
        ],
        [
            55,
            {}
        ],
        [
            56,
            {}
        ],
        [
            57,
            {}
        ],
        [
            58,
            {}
        ],
        [
            59,
            {}
        ],
        [
            60,
            {}
        ],
        [
            61,
            {}
        ],
        [
            62,
            {}
        ],
        [
            63,
            {}
        ],
        [
            64,
            {}
        ],
        [
            65,
            {}
        ],
        [
            66,
            {}
        ],
        [
            67,
            {}
        ],
        [
            68,
            {}
        ],
        [
            69,
            {}
        ],
        [
            70,
            {}
        ],
        [
            71,
            {}
        ],
        [
            72,
            {}
        ],
        [
            73,
            {}
        ],
        [
            74,
            {}
        ],
        [
            75,
            {}
        ],
        [
            76,
            {}
        ],
        [
            77,
            {}
        ],
        [
            78,
            {}
        ],
        [
            79,
            {}
        ],
        [
            82,
            {}
        ],
        [
            83,
            {}
        ],
        [
            84,
            {}
        ],
        [
            87,
            {}
        ],
        [
            88,
            {}
        ],
        [
            89,
            {}
        ],
        [
            90,
            {}
        ],
        [
            91,
            {}
        ],
        [
            93,
            {}
        ],
        [
            94,
            {}
        ],
        [
            95,
            {}
        ],
        [
            98,
            {}
        ],
        [
            99,
            {}
        ],
        [
            102,
            {}
        ],
        [
            103,
            {}
        ],
        [
            104,
            {}
        ],
        [
            105,
            {}
        ],
        [
            106,
            {}
        ],
        [
            107,
            {}
        ],
        [
            108,
            {}
        ],
        [
            109,
            {}
        ],
        [
            110,
            {}
        ],
        [
            111,
            {}
        ],
        [
            112,
            {}
        ],
        [
            113,
            {}
        ],
        [
            116,
            {}
        ]
    ]
}
```
</details>


