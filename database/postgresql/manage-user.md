# Manage user in PostgreSQL

Get in the PostgreSQL console:

```shell
sudo -u postgres psql
```

Create user:

```shell
# Create database if don't exist
CREATE DATABASE <database_name>;
CREATE USER <username> WITH PASSWORD '<password>';
```

Grant privileges:

```shell
GRANT ALL PRIVILEGES ON DATABASE <database_name> TO <username>;
```

