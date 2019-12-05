## Import GEOJSON to GEOMETRY

**Endpoint**: POST - https://rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layer/import/json

**Description**: Post the JSON you want to upload using this api, and it will convert that to geometry and properties for use with the PG database.

#### Header
```
{
	Authorization: 
	x-amz-date: 20191205T090607Z
	Content-Type: application/x-www-form-urlencoded; charset=utf-8
}
```


#### Body
```
{
}
```

## Get Common Layers

**Endpoint**: GET - https://rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layers/public

**Description**: *DEPRECATED* Returns all of the Public Common layers in the Mapbox Spec. Used purely for reference at this point as public common layers are now stored directly in the client.

#### Header
```
{
	Authorization: 
	x-amz-date: 20191205T090607Z
}
```


#### Body
```

```

## Get User Layers

**Endpoint**: GET - https://rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layers/user?userID=8

**Description**: Returns the user layers & groups for a given userID.

#### Header
```
{
	Authorization: 
	x-amz-date: 20191205T090607Z
}
```


#### Body
```

```

## Create Layer Group

**Endpoint**: POST - https://rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/group/add

**Description**: Create a new Empty layer group with the name specified.

#### Header
```
{
	Authorization: 
	x-amz-date: 20191205T090607Z
	Content-Type: application/x-www-form-urlencoded; charset=utf-8
}
```


#### Body
```
{
}
```

## Create Layer

**Endpoint**: POST - https://rg91b1juf3.execute-api.us-east-1.amazonaws.com/dev/layer/add

**Description**: Create a new Empty layer with the name specified. Once created, you can then import geojson as normal.

#### Header
```
{
	Authorization: 
	x-amz-date: 20191205T090607Z
	Content-Type: text/plain; charset=utf-8
}
```


#### Body
```
userID=4&label=UNCO+Test&sourceType=user&type=line&mapID=1
```

