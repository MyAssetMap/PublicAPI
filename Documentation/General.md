# Test Endpoint
## `GET` /dev/

*Used to simply test if your authentication is successful into the endpoint using AWS4.*

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
    "message": "Welcome to the MY ASSET MAP endpoint v1.0"
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Welcome to the MY ASSET MAP endpoint v1.0"
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Welcome to the MY ASSET MAP endpoint v1.0"
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Welcome to the MY ASSET MAP endpoint v1.0"
}
```
***
### Response:

+ Status: **403**

+ Body:
```
{
    "message": "Signature expired: 20191205T142350Z is now earlier than 20191205T211850Z (20191205T212350Z - 5 min.)"
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "success": true,
    "message": "Welcome to the MY ASSET MAP endpoint v1.0"
}
```
***


# Test DB
## `GET` /dev/db

*Used to simply test if your authentication is successful into the endpoint using AWS4.*

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
    "message": "DatabaseInfo.",
    "data": [
        {
            "schemaname": "public",
            "tablename": "LayerGroup",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "LayerSource",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "Layer",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "my_new_topo",
            "tablename": "node",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_statistic",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_type",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "my_new_topo",
            "tablename": "face",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_policy",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_authid",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "Map",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "SuperUser",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "Account",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "AccountUser",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "User",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "Addon",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "AddonAccount",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "UserPreference",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "UserMapPermission",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_user_mapping",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_subscription",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_attribute",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_proc",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_class",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_attrdef",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_constraint",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_inherits",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_index",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_operator",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_opfamily",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_opclass",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_am",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_amop",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_amproc",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_language",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_largeobject_metadata",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_aggregate",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_statistic_ext",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_rewrite",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_trigger",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_event_trigger",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_description",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_cast",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_enum",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_namespace",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_conversion",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_depend",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_database",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_db_role_setting",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_tablespace",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_pltemplate",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_auth_members",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_shdepend",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_shdescription",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_config",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_config_map",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_dict",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_parser",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_template",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_extension",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_foreign_data_wrapper",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_foreign_server",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_foreign_table",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_replication_origin",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_default_acl",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_init_privs",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_seclabel",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_shseclabel",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_collation",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_partitioned_table",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_range",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_transform",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_sequence",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_publication",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_publication_rel",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_subscription_rel",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_largeobject",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_parts",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_languages",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_features",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_implementation_info",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_packages",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_sizing",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_sizing_profiles",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "my_new_topo",
            "tablename": "edge_data",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "my_new_topo",
            "tablename": "relation",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "locations",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        }
    ]
}
```
***
### Response:

+ Status: **403**

+ Body:
```
{
    "message": "Signature expired: 20191205T142255Z is now earlier than 20191205T211756Z (20191205T212256Z - 5 min.)"
}
```
***
### Response:

+ Status: **403**

+ Body:
```
{
    "message": "Signature expired: 20191205T142141Z is now earlier than 20191205T211641Z (20191205T212141Z - 5 min.)"
}
```
***


# Test PostGIS DB
## `GET` /dev/postgis

*Used to simply test if your authentication is successful into the endpoint using AWS4.*

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
    "message": "DatabaseInfo.",
    "data": [
        {
            "schemaname": "tiger",
            "tablename": "edges",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "spatial_ref_sys",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "cousub",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_statistic",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_type",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "addrfeat",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "geocode_settings",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "geocode_settings_default",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_policy",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_authid",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "direction_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "secondary_unit_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "state_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "street_type_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "place_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "county_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "countysub_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "zip_lookup_all",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "zip_lookup_base",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "zip_lookup",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "county",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "state",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_user_mapping",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_subscription",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_attribute",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_proc",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_class",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_attrdef",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_constraint",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_inherits",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_index",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_operator",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_opfamily",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_opclass",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_am",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_amop",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_amproc",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_language",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_largeobject_metadata",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_aggregate",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_statistic_ext",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_rewrite",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_trigger",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_event_trigger",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_description",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_cast",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_enum",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_namespace",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_conversion",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_depend",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_database",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_db_role_setting",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_tablespace",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_pltemplate",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_auth_members",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_shdepend",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_shdescription",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_config",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_config_map",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_dict",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_parser",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_ts_template",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_extension",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_foreign_data_wrapper",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_foreign_server",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_foreign_table",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_replication_origin",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_default_acl",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_init_privs",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_seclabel",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_shseclabel",
            "tableowner": "rdsadmin",
            "tablespace": "pg_global",
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_collation",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_partitioned_table",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_range",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_transform",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_sequence",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_publication",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_publication_rel",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_subscription_rel",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "place",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "pg_catalog",
            "tablename": "pg_largeobject",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_parts",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_languages",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_features",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_implementation_info",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_packages",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_sizing",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "information_schema",
            "tablename": "sql_sizing_profiles",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": false,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "zip_state",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "zip_state_loc",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "faces",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "featnames",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "addr",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "zcta5",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "loader_platform",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "loader_variables",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "loader_lookuptables",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "tract",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "tabblock",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "bg",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "pagc_gaz",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "pagc_lex",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "tiger",
            "tablename": "pagc_rules",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "topology",
            "tablename": "topology",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "topology",
            "tablename": "layer",
            "tableowner": "rdsadmin",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": true,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "layer_1_user",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "layer_1_lottingareas",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        },
        {
            "schemaname": "public",
            "tablename": "layer_1_global",
            "tableowner": "Javier_root",
            "tablespace": null,
            "hasindexes": true,
            "hasrules": false,
            "hastriggers": false,
            "rowsecurity": false
        }
    ]
}
```
***
### Response:

+ Status: **403**

+ Body:
```
{
    "message": "The request signature we calculated does not match the signature you provided. Check your AWS Secret Access Key and signing method. Consult the service documentation for details.\n\nThe Canonical String for this request should have been\n'GET\n/dev/postgis\n\nhost:rg91b1juf3.execute-api.us-east-1.amazonaws.com\nx-amz-date:20191205T212328Z\n\nhost;x-amz-date\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'\n\nThe String-to-Sign should have been\n'AWS4-HMAC-SHA256\n20191205T212328Z\n20191205/us-east-1/execute-api/aws4_request\n8a5bbda075fb13fff0bebdaae5c620560ee04bb6f94136fede995225701082fa'\n"
}
```
***


