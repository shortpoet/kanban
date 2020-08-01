# setup

```bash
git init
yarn init
yarn add --dev typeorm reflect-metadata @types/node pg
yarn global add typeorm
typeorm init --database postgres
yarn add --dev jest typescript
yarn add --dev ts-jest @types/jest
yarn ts-jest config:init

```

## postgres (windows setup)

<https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL.htm>

```bash
psql -U userName
```

```sql
CREATE DATABASE kanban WITH ENCODING 'UTF8' LC_COLLATE='English_United States' LC_CTYPE='English_United States';
```

from create script in pgAdmin

```sql
CREATE DATABASE kanban
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

<https://marcyes.com/2016/0922-messing-with-postgresql-users-and-permissions/>
<https://kb.objectrocket.com/postgresql/how-to-run-an-sql-file-in-postgres-846>
<https://www.postgresqltutorial.com/postgresql-drop-database/>
<https://stackoverflow.com/questions/46773363/granted-all-privileges-on-my-postgres-table-but-still-am-getting-a-permission>
<https://serverfault.com/questions/198002/postgresql-what-does-grant-all-privileges-on-database-do> (sequences and tables)

- user that creates has privileges

```psql
\c kanban
\set ON_ERROR_STOP on
\i create_schema.psql
```
