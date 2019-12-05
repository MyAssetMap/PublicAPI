# Test Endpoint
## `GET` /

*Used to simply test if your authentication is successful into the endpoint using AWS4 for the tile server.*

### Request:

+ Headers:
    + `Cookie`: __cfduid=db77040e70be3e593c82faf94b711aba01575542139

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
	"message":"Welcome to the My Asset Map Tile Server",
	"error":"",
	"statusCode":200
}
```
***


# List Layers
## `GET` /v1/list_layers

*Used to list all layers that are possible to grab. The schema for this is: `layer_{MAP ID}_{DATA TYPE}`*

### Request:

+ Headers:
    + `Cookie`: __cfduid=db77040e70be3e593c82faf94b711aba01575542139

+ Url Params:
    –

+ Body:
    –

***


### Response:

+ Status: **200**

+ Body:
```
[
    {
        "f_table_catalog": "myassetmapv2_layers",
        "f_table_schema": "public",
        "f_table_name": "layer_1_lottingareas",
        "f_geometry_column": "geom",
        "coord_dimension": 2,
        "srid": 0,
        "type": "GEOMETRY"
    },
    {
        "f_table_catalog": "myassetmapv2_layers",
        "f_table_schema": "public",
        "f_table_name": "layer_1_global",
        "f_geometry_column": "geom",
        "coord_dimension": 2,
        "srid": 0,
        "type": "GEOMETRY"
    },
    {
        "f_table_catalog": "myassetmapv2_layers",
        "f_table_schema": "public",
        "f_table_name": "layer_1_user",
        "f_geometry_column": "geom",
        "coord_dimension": 2,
        "srid": 0,
        "type": "GEOMETRY"
    }
]
```
***


# Get MVT Tile
## `GET` /v1/mvt/%7Blayer_name%7D/%7Bz%7D/%7Bx%7D/%7By%7D

*Returns a mvt file for the given Z, X, Y and tile. Also uses the filter to gather only the information needed.

- **Z (Required):** The Z scaling of the file.
- **X (Required):** The X position of the file.
- **Y (Required):** The Y position of the file.
- **layerID (Required):** The Layer ID you wish to gather information for.
*

### Request:

+ Headers:
    + `Cookie`: __cfduid=db77040e70be3e593c82faf94b711aba01575542139

+ Url Params:
    –

+ Body:
    –

***


### Response:

+ Status: **400**

+ Body:
```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "params.z should be integer, params.x should be integer, params.y should be integer"
}
```
***


