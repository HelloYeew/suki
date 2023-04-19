# Open ports in Amazon Linux

Install `iptables-services` package:

```shell
sudo yum install iptables-services -y
systemctl enable iptables
systemctl start iptables
```

Open port:

```shell
# Opening the incoming port.
iptables -I INPUT -p tcp --dport <port> -j ACCEPT
# The command above is for opening the outgoing port.
iptables -I OUTPUT -p tcp --sport <port> -j ACCEPT
```

Save the rules:

```shell
sudo service iptables save
```

