# Enable remote connections to PostgreSQL

Normally PostgreSQL only accepts connections from the local machine. To enable remote connections, you need to edit the configuration file.

## Modify the PostgreSQL configuration file

The location of the configuration file depends on the version of PostgreSQL. For example, in PostgreSQL 12, the configuration file is located at `/etc/postgresql/12/main/postgresql.conf`.

Note : In Amazon Linux or CentOS, the file location is `/var/lib/pgsql/data/postgresql.conf`.

Open the configuration file:

```shell
sudo nano /etc/postgresql/<postgresql-version>/main/postgresql.conf
```

Uncomment the line `listen_addresses` and change the value to `*`:

```shell
# From #listen_addresses = 'localhost' to
listen_addresses = '*'
```

Restart the PostgreSQL service:

```shell
sudo systemctl restart postgresql
```

## Allow remote connections to PostgreSQL

Open the `pg_hba.conf` file:

```shell
sudo nano /etc/postgresql/<postgresql-version>/main/pg_hba.conf
# or from Amazon Linux or CentOS
sudo nano /var/lib/pgsql/data/pg_hba.conf
```

Find the line:

```
# IPv4 local connections: 
host    all             all             127.0.0.1/32            md5 
```

Modify it to:

```
# IPv4 local connections:
host    all             all             0.0.0.0/0            md5 
```

Note : In PostgreSQL 15 maybe using 'ident' instead of 'md5'.

Restart the PostgreSQL service:

```shell
sudo systemctl restart postgresql
```

## Still can't connect to PostgreSQL?

Please don't forget to allow port 5432 in the firewall
