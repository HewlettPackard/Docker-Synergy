# Configuration updates


## Enterprise Containers 2.1

The configuration files for Enterprise Containers 2.1 have been significantly reorganized and extended.
The `vars` and `vault` files have been moved 
down a level into the sub-folder named 
`all`, so the resultant names are now `group_vars/all/vars` and `group_vars/all/vault`. 
Similarly, the required `backups` file is now located at `group_vars/all/backups`.


A number of new groups have been added to the inventory, together with the corresponding configuration files:

- `vm_wrk_lnx` containing all the Linux worker nodes (Virtual Machines)	 
- `bm_wrk_lnx` containing all the Linux worker nodes (Bare Metal servers)	 
- `vm_wrk_win` containing all the Windows worker nodes (Virtual Machines)	 
- `bm_wrk_win` containing all the Windows worker nodes (Bare Metal Machines)


Group variables that were previously present in the inventory file have been moved to their own standalone
files. For more details on configuration changes, see the section `Editing the inventory`.


## Express Containers 2.1

New variables and configuration files introduced in release 2.1 of Docker-SimpliVity:

- `backup_passphrase` variable in `group_vars/all/vault` - a dummy value is provided in the sample vault file   
- `nfs_provisioner_namespace` variable in `group_vars/all/vars` - default value is `nfsstorage`
- `nfs_provisioner_serviceaccount` variable in `group_vars/all/vars` - default value is `nfs-provisioner`
- `sysdig_collector` variable in `group_vars/all/vars` - default value is `collector.sysdigcloud.com`
- `sysdig_collector_port` variable in `group_vars/all/vars` - default value is `6666`
- `kubectl_version` variable in `group_vars/all/vars` - default value is `1.11.5`
- `kubectl_checksum` variable in `group_vars/all/vars` - default value is checksum for version `1.11.5`
- `helm_version` variable in `group_vars/all/vars` - default value is `2.12.3`
- `helm_checksum`variable in `group_vars/all/vars` - default value is checksum for version `2.12.3`

## Express Containers 2.0

New variables and configuration files introduced in release 2.0 of Docker-SimpliVity:

-   `docker_ee_reponame` variable in `group_vars/all/vars` replaces `docker_ee_version` 
-   `docker_ee_version_windows` variable in `group_vars/all/vars` 
-   `docker_storage_driver` variable in `group_vars/all/vars` 
-   `windows_update` variable in `group_vars/all/vars` 
-   `windows_winrm_script` variable in `group_vars/all/vars` 

