# Why?

We forked he React repository in order to inject some functionalities in the dev tools.

# Installation


## Dependencies

```sh
# YARN
brew install yarn

# PYTHON
brew install python

# JAVA
brew install openjdk@11
sudo ln -sfn $(brew --prefix openjdk@11)/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
export PATH=$JAVA_HOME/bin:$PATH
```

You should see the following logs

```sh
yarn --version
# 1.22.22

python3 --version 
# Python 3.9.6

pip3 --version 
# pip 24.2 from /opt/homebrew/lib/python3.13/site-packages/pip (python 3.13)

java -version
# openjdk version "11.0.24" 2024-07-16
# OpenJDK Runtime Environment Homebrew (build 11.0.24+0)
# OpenJDK 64-Bit Server VM Homebrew (build 11.0.24+0, mixed mode)
```

## Repository

```sh
yarn install
```

# Deployment

`yarn marblism:deploy`