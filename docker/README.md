# Local Keycloak Instance

This directory contains the following files:

* `docker-compose.yml`: Sample local keycloak service
* `kaboom-export.json`: Sample keycloak realm full export file also including users

## How to run local keycloak

```bash
docker compose up
```

## How to import local keycloak realm config

Simply mount the `*.json` realm export file to a volume in the docker container. See [docker-compose.yml](docker-compose.yml) for more details.

## How to export local keycloak realm config

1. SSH into the running docker container and run this command:

    ```bash
    /opt/keycloak/bin/kc.sh export --realm <myrealm> --file <myrealm.json> --users realm_file
    ```

    Replace `<myrealm>` and `<myrealm.json>` with the appropiate values.

2. Exit the docker terminal.
3. From your developer server terminal, run this command:

    ```bash
    docker cp <insert-container-name-here>:/tmp/myrealm.json ./myrealm.json
    ```