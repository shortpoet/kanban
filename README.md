# kanban

This is an extension of a kanban board featured in [some screencasts](https://vuejs-course.com/screencasts) by [@Lachlan19900](https://twitter.com/Lachlan19900).

It uses Vue 3 for the frontend and PostgreSQL, TypeORM, and Express for the backend.

Can be run using docker.

## usage

- install dependencies

```bash
yarn install
```

- launch rest api

```bash
yarn start:rest
```

- launch rest api

```bash
yarn start:graph
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

- shell into app using docker run

```bash
./docker/app-run-shell.sh
```

- or into running container using docker exec

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
yarn add --dev express express-graphql graphql @types/cors @types/express @vue/test-utils@next class-validator cors ts-node-dev type-graphql vite vue-jest@next @vue/compiler-sfc
yarn add vue@next axios
```

## docker

```bash
# https://gist.github.com/ajdruff/16427061a41ca8c08c05992a6c74f59e
#

#####################
#
# Use this with or without the .gitattributes snippet with this Gist
# create a fixle.sh file, paste this in and run it.
# Why do you want this ? Because Git will see diffs between files shared between Linux and Windows due to differences in line ending handling ( Windows uses CRLF and Unix LF)
# This Gist normalizes handling by forcing everything to use Unix style.
#####################


# Fix Line Endings - Force All Line Endings to LF and Not Windows Default CR or CRLF
# Taken largely from: https://help.github.com/articles/dealing-with-line-endings/
# With the exception that we are forcing LF instead of converting to windows style.


#Set LF as your line ending default.
git config --global core.eol lf

#Set autocrlf to false to stop converting between windows style (CRLF) and Unix style (LF)
git config --global core.autocrlf false


#Save your current files in Git, so that none of your work is lost.
git add . -u
git commit -m "Saving files before refreshing line endings"



#Remove the index and force Git to rescan the working directory.
rm .git/index


#Rewrite the Git index to pick up all the new line endings.
git reset


#Show the rewritten, normalized files.

git status


#Add all your changed files back, and prepare them for a commit. This is your chance to inspect which files, if any, were unchanged.

git add -u
# It is perfectly safe to see a lot of messages here that read
# "warning: CRLF will be replaced by LF in file."


#Rewrite the .gitattributes file.
git add .gitattributes


#Commit the changes to your repository.

git commit -m "Normalize all the line endings"
```

- docker links

  - <https://hub.docker.com/_/postgres>
  - <https://docs.docker.com/engine/examples/postgresql_service/>
  - <https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea>
  - <https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198>
  - <https://nodejs.org/en/docs/guides/nodejs-docker-webapp/>
  - <http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/>
  - <https://dev.to/rangle/docker-for-frontend-devs-custom-docker-images-for-development-1afc>
  - <https://medium.com/@kale.miller96/how-to-mount-your-current-working-directory-to-your-docker-container-in-windows-74e47fa104d7>
  - <https://www.jonathan-petitcolas.com/2017/01/26/yarn-npm-install-within-docker-container.html>
  - <https://mherman.org/blog/dockerizing-a-vue-app/>
  - <https://medium.com/better-programming/docker-for-front-end-developers-c758a44e622f>
  - <http://blog.code4hire.com/2018/06/define-named-volume-with-host-mount-in-the-docker-compose-file/>
  - <https://www.freecodecamp.org/news/a-beginners-guide-to-docker-how-to-create-a-client-server-side-with-docker-compose-12c8cf0ae0aa/>
  - <https://stackoverflow.com/questions/30063907/using-docker-compose-how-to-execute-multiple-commands>
  - <https://blog.atulr.com/docker-local-environment/#:~:text=%F0%9F%95%B6%20Docker%20based%20local%20development,all%20out%20as%20one%20package.>
  - <https://www.smashingmagazine.com/2016/04/stop-installing-your-webdev-environment-locally-with-docker/>
  - <https://auth0.com/blog/use-docker-to-create-a-node-development-environment/>
  - <https://medium.com/rate-engineering/using-docker-containers-as-development-machines-4de8199fc662>
  - <https://www.docker.com/blog/how-to-setup-your-local-node-js-development-environment-using-docker/>
  - <https://dev.to/enkaypeter/how-to-deploy-a-vue-application-on-cloud-run-3efl>
  - <https://www.openshift.com/blog/deploy-vuejs-applications-on-openshift>
  - <https://blog.logrocket.com/how-to-auto-deploy-a-vue-application-using-gitlab-ci-cd-on-ubuntu/>
  - <https://www.freecodecamp.org/news/how-you-can-do-continuous-delivery-with-vue-docker-and-azure-2f1e31fff832/>
  - <https://jonathanmh.com/deploying-a-vue-js-single-page-app-including-router-with-docker/>
  - <https://developer.ibm.com/recipes/tutorials/a-best-practice-in-dockerizing-vue-js-application/>
  - <https://medium.com/dirtyjs/how-to-deploy-vue-js-app-in-one-line-with-docker-digital-ocean-2338f03d406a>
  - <https://devspace.cloud/blog/2019/09/30/deploy-vue-js-to-kubernetes>
  - <https://cli.vuejs.org/guide/deployment.html#docker-nginx>

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

- <https://github.com/lmiller1990/graphql-rest-vue>

- postgres

  - user that creates has privileges
  - <https://marcyes.com/2016/0922-messing-with-postgresql-users-and-permissions/>
  - <https://kb.objectrocket.com/postgresql/how-to-run-an-sql-file-in-postgres-846>
  - <https://www.postgresqltutorial.com/postgresql-drop-database/>
  - <https://stackoverflow.com/questions/46773363/granted-all-privileges-on-my-postgres-table-but-still-am-getting-a-permission>
  - <https://serverfault.com/questions/198002/postgresql-what-does-grant-all-privileges-on-database-do> (sequences and tables)
  - <https://stackoverflow.com/questions/41637505/how-to-persist-data-in-a-dockerized-postgres-database-using-volumes>
  - <https://notathoughtexperiment.me/blog/how-to-connect-to-postgres-in-docker-container/>
  - <https://gist.github.com/onjin/2dd3cc52ef79069de1faa2dfd456c945>

  - typeorm
    - <https://typeorm.io/#/>
    - <https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md#getting-values-using-querybuilder>
    - <https://github.com/vitejs/vite>
    - <https://typegraphql.com/docs>
    - <https://www.apollographql.com/docs/tutorial/resolvers/>

```psql
\c kanban
\set ON_ERROR_STOP on
\i create_schema.psql
```

## postgres commands

! make sure to end all commands with semi-colon !

show all tables

```postgresql
\dt
```

show all tables verbose

```postgresql
\dt+
```

## typeorm

<https://stackoverflow.com/questions/54998520/multiple-join-with-typeorm>
