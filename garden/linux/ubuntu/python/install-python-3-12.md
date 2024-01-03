# Install Python 3.12 on Ubuntu

Add repository

```shell
sudo add-apt-repository ppa:deadsnakes/ppa
```

Update the package list

```shell
sudo apt update
```

Install Python 3.12

```shell
sudo apt install python3.12
```

Install pip

```shell
curl -sS https://bootstrap.pypa.io/get-pip.py | python3.12
```

Set Python 3.11 as default

```shell
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.12 1
python --version
```

Install support package

```shell
sudo apt install python3.12-dev python3.12-venv python3.12-distutils python3.12-gdbm python3.12-tk python3.12-lib2to3
```

- When create virtual environment, use `python3.12 -m venv <venv_name>` instead of `python -m venv <venv_name>`.
- On using pip, use `python3.12 -m pip <command>` instead of `python -m pip <command>`.
