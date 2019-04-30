# Docker configuration

All Docker-related variables are mandatory unless otherwise stated and are described in the following table.

|Variable|File|Description|
|:-------|:---|:----------|
|docker_ee_url|**group_vars/all/vault**|Note: This is a private link to your Docker EE subscription. The value for `docker_ee_url` is the URL documented at the following address: [https://docs.docker.com/engine/installation/linux/docker-ee/rhel/](https://docs.docker.com/engine/installation/linux/docker-ee/rhel/).|
|docker_ee_reponame|group_vars/all/vars|Specifies the repo to use. For Docker EE 2.1, this variable should be set to the value `stable-18.09`|
|docker_ee_version|group_vars/all/vars|Optional. Can be used to download an exact version of Docker EE from the repo specified in `docker_ee_reponame`| 
|rhel_version|group_vars/all/vars|For the Docker installation, this sets the version of your RHEL OS, such as `7.6`. The playbooks were tested with RHEL 7.6.|
|dtr_version|group_vars/all/vars|Version of the Docker DTR you wish to install. You can use a numeric version or `latest` for the most recent one. The playbooks were tested with 2.6.4|
|ucp_version|group_vars/all/vars|Version of the Docker UCP you wish to install. You can use a numeric version or `latest` for the most recent one. The playbooks were tested with UCP 3.1.4.|
|images_folder|group_vars/all/vars|Directory in the NFS server that will be mounted in the DTR nodes and that will host your Docker images.|
|license_file|group_vars/all/vars|Full path to your Docker EE license file on your Ansible host. The license file is available from the Docker Store|
|ucp_username|group_vars/all/vars|Username of the administrator user for UCP and DTR, typically `admin`.|
|ucp_password|**group_vars/all/vault**|The password for the `ucp_username` account.|
|docker_storage_driver|group_vars/all/vars|Storage driver for Docker nodes. The only accepted value is `overlay2` (Previously, `devicemapper` was supported but this has been deprecated as it is no longer supported by Docker on RHEL 7.5 and 7.6)|

To see how to use customer-supplied certificates with UCP and DTR, see Appendix B.

## Storing DTR images on external NFS server

Using a combination of `images_folder` and `nfs_external_server` variables, you can host your DTR images
on an NFS server. If the variable `nfs_external_server` is unset or commented out, the NFS VM is used by default.

When using an external NFS server such as the one hosted by 3PAR, you need to create the file share matching the name stored in `images_folder` manually, as 
shown in the section `Using HPE 3PAR when deploying NFS provisioner for Kubernetes`. If you are using the NFS VM, the file share is created automatically by the playbooks.



