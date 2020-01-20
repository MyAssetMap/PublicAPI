# Create Layer (Entire Structure)
## `POST` /dev/layer/add

*Create a new TOC, Layer, Sublayers, and applicable sources with the name specified all with one endpoint. Once created, you can then import geojson as normal.


- **userID (Required):** The User ID you wish to gather information for
- **label (Required):** The name of the group you wish to create.
- **sourceType (Required):** The source type of the layer we are creating (user, org, or public).
- **type (Required):** The mapbox spec type of layer you are creating (point, line, polygon.
- **mapID (Required):** The Map ID in which the group will be stored.
- **——OPTIONAL——**
- **interactive (Optional):** The Interactive Value (Defaults to true)
- **minzoom (Optional):** The MinZoom Value (Defaults to 8)
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
    "label": "Testing Layer Adding",
    "sourceType": "user",
    "type": "point",
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
    "message": "Layer has been created.",
    "data": "fill-test_116"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Layer has been created.",
    "data": "fill-test_101"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Layer has been created.",
    "data": "symbol-test_100"
}
```
</details>


# Update Layer Group
## `POST` /dev/layer/update

*`WIP` Takes a layerID, and updates whichever fields are passed, leaving the value untouched of fields that are not passed.

- **userID (Required):** The User ID of the user who is making the change.
- **layerID (Required):** The layerGroupID of the layer group you would like to update.
- **——OPTIONAL——** 
- **mapID (Optional):** The map ID that this layer belongs to.
- **label (Optional):** The label/title of the layer TOC.
- **description (Optional):** The description of the layer TOC.
- **canOrgView (Optional):** Can this layer TOC be choosable and added to any user's map for readonly viewing?
- **canOrgEdit (Optional):** Can this layer TOC be choosabkle and added to any user's map for editing the data?

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
{
    "layerID": "layer_group_16",
    "label": "New Layer Name",
    "description": "Test Layer by Dakotah",
    "canOrgView": true
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Layer Group (TOC) has been updated.",
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
    "message": "Layer has been updated.",
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
    "message": "invalid input syntax for integer: \"layer_group_16\""
}
```
</details>


# Delete Layer (Entire Structure)
## `POST` /dev/layer/delete

*Delete an existing layer.
`FUTURE` Optionally delete the data associated permanently?

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
{
    "layerID": "layer_20"
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": false,
    "message": "Layer Group ID (`20`) does not exist!"
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "message": "When Content-Type:application/x-www-form-urlencoded, URL cannot include query-string parameters (after '?'): '/alpha/layer/delete?userID=6872305e-65e3-48f1-a785-08ce114c8e49'"
}
```
</details>


# Create Layer
## `POST` /dev/layer/add/layer

*Create a new TOC, Layer, Sublayers, and applicable sources with the name specified all with one endpoint. Once created, you can then import geojson as normal.


- **userID (Required):** The User ID you wish to gather information for
- **label (Required):** The name of the group you wish to create.
- **type (Required):** The mapbox spec type of layer you are creating (point, line, polygon.
- **groupID (Required):** The LayerGroup ID in which the group will be stored.
- **——OPTIONAL——**
- **interactive (Optional):** The Interactive Value (Defaults to true)
- **minzoom (Optional):** The MinZoom Value (Defaults to 8)
- **layout (Optional):** The Layout Value (Defaults to {visibility: none})
- **paint (Optional):** The Paint Value (Defaults to {})
- **metadata (Optional):** The Metadata Value (Defaults to {})
- **filter (Optional):** The Filter Value (Defaults to {})

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
    "label": "Fill Test",
    "sourceType": "user",
    "type": "fill",
    "mapID": "1"
}
```

***




# Update Layer 
## `POST` /dev/layer/update/layer

*`WIP` Takes a layerID, and updates whichever fields are passed, leaving the value untouched of fields that are not passed.

- **userID (Required):** The User ID of the user who is making the change.
- **layerID (Required):** The layer ID of the layer group you would like to update.
- **——OPTIONAL——** 
- **groupID (Optional):** To combine multiple layers into one layer group TOC, define the group here.
- **label (Optional):** The label/title of the layer TOC.
- **interactive (Optional):** Should the layer be interactive?
- **minzoom (Optional):** The minzoom of the layer.
- **layout (Optional):** Update the layout properties. Will overwrite any objects passed.
- **paint (Optional):** Update the default paint properties. Will save as usual to global or user. Will overwrite any objects passed.
- **metadata (Optional):** Update the metadata properties. Will overwrite any objects passed.
- **filter (Optional):** Update the filter properties. Will overwrite any objects passed.

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
    "layerID": "layer_layer_15",
    "label": "New Layer",
    "interactive": true,
    "minzoom": 11,
    "filter": {
        "test": "true"
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
    "message": "Layer has been updated.",
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
    "message": "Layer has been updated.",
    "data": []
}
```
</details>


# Delete Layer
## `POST` /dev/layer/delete/layer

*Delete an existing layer.
`FUTURE` Optionally delete the data associated permanently?

- **userID (Required):** The User ID you wish to gather information for
- **layerID (Required):** The layerGroupID you wish to delete.

_**Note:** Instead of passing a userID, it should be passed automatically using the logged in user._
_**Note:** The layerID can be passed as a integer, or as the mapbox layerID (layerName_INT)_
*

### Request:

+ Headers:
    –

+ Url Params:
    + `userID`: 6872305e-65e3-48f1-a785-08ce114c8e49

+ Body:
```
{
    "layerID": "layer_20"
}
```

***




# Create Sublayer
## `POST` /dev/layer/add/sublayer

*Create a new sublayer with the name specified.


- **userID (Required):** The User ID you wish to gather information for
- **label (Required):** The name of the group you wish to create.
- **type (Required):** The mapbox spec type of layer you are creating (point, line, polygon.
- **layerID (Required):** The Layer ID in which the layer is associated.
- **——OPTIONAL——**
- **interactive (Optional):** The Interactive Value (Defaults to true)
- **minzoom (Optional):** The MinZoom Value (Defaults to 8)
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
    "label": "Fill Test",
    "sourceType": "user",
    "type": "fill",
    "mapID": "1"
}
```

***




# Update Sublayer
## `POST` /dev/layer/update/sublayer

*`WIP` Takes a layerID, and updates whichever key fields are passed, leaving the value untouched of fields that are not passed.

- **userID (Required):** The User ID of the user who is making the change.
- **layerID (Required):** The layer ID of the layer you would like to update the sublayer info for (NOT THE SUBLAYER ID)
- **key (Required):** The sublayer object key that is used to reference the specific sublayer you are editing.
- **——OPTIONAL——** 
- **type (Optional):** The type of the sublayer.
- **label (Optional):** The label/title of the layer TOC.
- **interactive (Optional):** Should the layer be interactive?
- **minzoom (Optional):** The minzoom of the layer.
- **layout (Optional):** Update the layout properties. Will overwrite any objects passed.
- **paint (Optional):** Update the default paint properties (not the user paint properties). Will overwrite any objects passed.
- **metadata (Optional):** Update the metadata properties. Will overwrite any objects passed.

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
    "layerID": "layer_group_81",
    "key": "symbol",
    "metadata": {
        "test": "true"
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
    "message": "Sublayer has been updated.",
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
    "message": "Sublayer has been updated.",
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
    "message": "Sublayer has been updated.",
    "data": []
}
```
</details>


# Delete Sublayer
## `POST` /dev/layer/delete/sublayer

*Delete an existing sublayer.
`FUTURE` Optionally delete the data associated permanently?

- **userID (Required):** The User ID you wish to gather information for
- **sublayerID (Required):** The sublayerID you wish to delete.

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
{
    "layerID": "layer_20"
}
```

***




# Update Layer Source
## `POST` /dev/layer/update/source

*`WIP` Takes a layerID, gets the source, and updates whichever fields are passed, leaving the value untouched of fields that are not passed.

- **userID (Required):** The User ID of the user who is making the change.
- **layerID (Required):** The layer ID of the layer you would like to update the source info of (NOT THE SOURCE ID)
- **——OPTIONAL——** 
- **type (Optional):** The type of the layer. (Note: Updating this might make the data for the layer source break.) If the data is dynamic using PostGIS, the following values are typical: user, org, global.
- **tiles (Optional):** The tiles should be empty if PostGIS is being used. If static, you can update it using this.
- **maxzoom (Optional):** The maxzoom of the value.

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
    "layerID": "layer_group_16",
    "mapID": 0,
    "groupID": 1,
    "label": "New Layer",
    "canOrgView": true,
    "canOrgEdit": true
}
```

***



### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Layer updating is not yet built.",
    "data": 16
}
```
</details>

### Response:

<details>
<summary>Expand</summary>

```
{
    "success": true,
    "message": "Layer updating is not yet built.",
    "data": 16
}
```
</details>

