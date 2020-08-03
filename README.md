# kanban

This is an extension of a kanban board featured in [some screencasts](https://vuejs-course.com/screencasts) [by](https://twitter.com/Lachlan19900).

It uses Vue 3 for the frontend and PostgreSQL, TypeORM, and Express for the backend.

Can be run using docker.

## usage

- install dependencies

```bash
yarn install
```

- launch app

```bash
yarn start
```

- run tests

```bash
yarn test
```

- setup docker containers using compose

```bash
./docker/build.sh
```

- run docker containers

```bash
docker-compose up
```

- take down containers and wipe docker volumes

```bash
./docker/wipe.sh
```

- shell into database

```bash
./docker/db-shell.sh
```

- run tests in container

```bash
./docker/app-run-test.sh
```

- shell into app

  - using docker run

```bash
./docker/app-run-shell.sh
```

or into running container using docker exec

```bash
./docker/app-shell.sh
```

## setup

```bash
git init
yarn init
yarn add --dev typeorm reflect-metadata @types/node pg
yarn global add typeorm
typeorm init --database postgres
yarn add --dev jest typescript
yarn add --dev ts-jest @types/jest
yarn ts-jest config:init
yarn add --dev express express-graphql graphql @types/cors @types/express @vue/test-utils class-validator cors ts-node-dev type-graphql vite vue-jest
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
<https://notathoughtexperiment.me/blog/how-to-connect-to-postgres-in-docker-container/>
<https://hub.docker.com/_/postgres>
<https://docs.docker.com/engine/examples/postgresql_service/>
<https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea>
<https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198>
<https://nodejs.org/en/docs/guides/nodejs-docker-webapp/>
<http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/>

- user that creates has privileges

```psql
\c kanban
\set ON_ERROR_STOP on
\i create_schema.psql
```

## postgres commands

show all tables

```postgresql
\dt
```

show all tables verbose

```postgresql
\dt+
```
