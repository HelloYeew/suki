# 403 forbidden on Django's static files

Means nginx don't have permission to access the file. You can fix it by changing the permission of the file.

```bash
chmod 701 user_home
# or
chmod 755 user_home
```