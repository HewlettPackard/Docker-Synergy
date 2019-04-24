# Installing kubectl


A convenience playbook is provided to make it easy to install `kubectl` on the Ansible controller. This playbook uses variables in `group_vars/all/vars` to determine which version to download. The default version specified by the variable `kubectl_version` in the sample variables file is `1.11.5`. Details of the 1.11 release are available at [https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md). In particular, the playbook requires a checksum to be present in the variable `kubectl_checksum`. The appropriate value can be found in the details for the specific version of kubectl to be downloaded, in this case for version `1.11.5` of `kubernetes-client-linux-amd64.tar.gz`, available at [https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md#downloads-for-v1115](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md#downloads-for-v1115).


To run the playbook:

```
# cd ~/Docker-Synergy
# ansible-playbook -i hosts playbooks/install_kubectl.yml 
```


Test the installation by running the `kubectl version` command:

```
# kubectl version

Client Version: version.Info{Major:"1", Minor:"11", GitVersion:"v1.11.5", GitCommit:"753b2dbc622f5cc417845f0ff8a77f539a4213ea", GitTreeState:"clean", BuildDate:"2018-11-26T14:41:50Z", GoVersion:"go1.10.3", Compiler:"gc", Platform:"linux/amd64"}
The connection to the server localhost:8080 was refused - did you specify the right host or port?
```

The client version is reported correctly. However, `kubectl` cannot connect to the server until you set up 
a client bundle - this is described in the section titled `Installing the client bundle`.


## Manually installing kubectl


You can find the version number for the current stable version of `kubectl` at [https://kubernetes.io/docs/tasks/tools/install-kubectl/](https://kubernetes.io/docs/tasks/tools/install-kubectl/). At the time of writing, the stable version is `1.13`.

The following is an example of manually downloading and installing a specific version of `kubectl`.

```
# version=v1.10.4
# wget -O kubectl https://storage.googleapis.com/kubernetes-release/release/${version}/bin/linux/amd64/kubectl
# chmod +x ./kubectl
# sudo mv ./kubectl /usr/local/bin/kubectl

# kubectl version
Client Version: version.Info{Major:"1", Minor:"10", GitVersion:"v1.10.4", GitCommit:"5ca598b4ba5abb89bb773071ce452e33fb66339d", GitTreeState:"clean", BuildDate:"2018-06-06T08:13:03Z", GoVersion:"go1.9.3", Compiler:"gc", Platform:"linux/amd64"}
```

More details on installing `kubectl` are available at [https://kubernetes.io/docs/tasks/tools/install-kubectl/](https://kubernetes.io/docs/tasks/tools/install-kubectl/) 
