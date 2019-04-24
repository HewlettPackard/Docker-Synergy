# Editing the inventory

The inventory is the file named `hosts` in the `~/Docker-Synergy` directory. You need to edit this file to describe the configuration you want to deploy.

The nodes inside the inventory are organized in groups. The groups are defined by brackets and the group names are static so they must not be changed. Other fields (hostnames, specifications, IP addresses…) are edited to match your setup. The groups are as follows:


## Control plane
|Group name |Purpose|
|-----------|-------|
|`[ucp_main]`|A group containing one single node which will be the main UCP node and swarm leader. Do not add more than one node under this group.
|`[ucp]`|A group containing all the UCP nodes, including the main UCP node. Typically you should have either 3 or 5 nodes under this group.
|`[dtr_main]`|A group containing one single node which will be the first DTR node to be installed. Do not add more than one node under this group.
|`[dtr]`|A group containing all the DTR nodes, including the main DTR node. Typically you should have either 3 or 5 nodes under this group.
|`[nfs]`|A group containing one single node which will be the NFS node. Do not add more than one node under this group.
|`[logger]`|A group containing one single node which will be the logger node. Do not add more than one node under this group.




### Load balancers
If you are deploying the new `active-active` load balancers, using floating IPs managed by `keepalived`:

|Group name |Purpose|
|-----------|-------|
|`[loadbalancer]`|A group containing the UCP, DTR and any worker load balancers you are deploying.

If you are using the legacy, standalone load balancers:

|Group name |Purpose|
|-----------|-------|
|`[ucp_lb]`|A group containing one single node which will be the load balancer for the UCP nodes. Do not add more than one node under this group.
|`[dtr_lb]`|A group containing one single node which will be the load balancer for the DTR nodes. Do not add more than one node under this group.
|`[worker_lb]`|A group containing one single node which will be the load balancer for the worker nodes. Do not add more than one node under this group.
|`[lbs]`|A group containing all the legacy standalone load balancers. This group will have 3 nodes, also defined individually in the three groups above.

**Note:** Even if you are using the new `[loadbalancer]` group, you must still declare the legacy group `[lbs]` and its sub-groups in your inventory.

## Worker nodes
Individual groups facilitate the configuration of worker nodes, depending on the OS and whether the nodes are Virtual Machines or bare metal. 


|Group name |Purpose|
|-----------|-------|
|`[vm_wrk_lnx]`|A group containing all the Linux worker nodes on Virtual Machines.|
|`[bm_wrk_lnx]`|A group containing all the bare metal Linux worker nodes.|
|`[vm_wrk_win]`|A group containing all the Windows worker nodes on Virtual Machines.|
|`[bm_wrk_win]`|A group containing all the bare metal Windows worker nodes.|



## Ansible controller

|Group name |Purpose|
|-----------|-------|
|`[local]`|A group containing the local Ansible host. It contains an entry that should not be modified.


## Groups of groups

A number of "groups of groups" simplify the handling of sets of nodes:

### `ctlrplane` group
All the nodes that make up the control plane:
```
[ctlrplane:children]
ucp
dtr
lbs
nfs
loadbalancer
logger
```

### `worker` group
All the Docker worker nodes:

```
[worker:children]
vm_wrk_lnx
vm_wrk_win
bm_wrk_lnx
bm_wrk_win
```

### `bms` group

All the bare metal nodes:

```
[bms:children]
bm_wrk_lnx
bm_wrk_win
```

### `docker` group

All the nodes running Docker:

```
[docker:children]
ucp
dtr
worker
```


### `linux_box` group

All the nodes running Linux:
```
[linux_box:children]
ctlrplane
vm_wrk_lnx
bm_wrk_lnx
```

### `windows_box` group

All the nodes running Windows:

```
[windows_box:children]
bm_wrk_win
vm_wrk_win
```


# Bare metal variables
When deploying bare metal worker nodes, you must specify the name of the Server Profile Template (SPT), together 
with the names of the two connections for your Ansible controller. If you have multiple server types in your HPE Synergy setup, you will need to set the name of the server profile template for each individual bare metal node, typically on the node decalration in the inventory file itself, rather than using a common name in the group file.

## Bare metal Linux variables
Variables specific to bare metal Linux worker nodes are specified in `group_vars/bm_wrk_lnx.yml`

```
ov_template: 'RedHat760_fcoe_v1.0.2'               
ov_ansible_connection_name: 'ansibleA'     
ov_ansible_redundant_connection_name: ansibleB   

disk2: '/dev/mapper/mpatha' 
disk2_part: '/dev/mapper/mpatha1'
orchestrator: kubernetes # or swarm
fcoe_devices: ['ens3f2','ens3f3']
```

## Bare metal Windows variables

Variables specific to bare metal Windows worker nodes are specified in `group_vars/bm_wrk_win.yml`

```
ov_template: 'Windows Worker Node (Gen9)'  
ov_ansible_connection_name: 'Ansible-A'    
ov_ansible_redundant_connection_name: 'Ansible-B'   
```

# Inventory group variables

The following files,  in the `group_vars` folder, contain variable definitions for each group. 


|File name |Purpose|
|-----------|-------|
|`ucp.yml`|Variables defined for all UCP nodes.
|`dtr.yml`|Variables defined for all DTR nodes.
|||
|`nfs.yml`|Variables defined for all NFS nodes.
|`logger.yml`|Variables defined for all logger nodes.
|||
|`loadbalancer.yml`|Variables defined for all nodes in the [`loadbalancer`] group.
|`lbs.yml`|Variables defined for all nodes in the legacy [`lbs`] group.
|||
|`vm_wrk_lnx.yml`|Variables defined for all Linux VM worker nodes.
|`vm_wrk_win.yml`|Variables defined for all Windows VM worker nodes.
|||
|`worker.yml`|Variables defined for all worker nodes.
|`windows_box.yml`|Variables defined for all Windows nodes.
|||
|`vms.yml`|Variables defined for all the VMware Virtual Machines deployed by the solution.
|`bms.yml`|Variables defined for all the bare metal machines deployed by the solution.



These group files facilitate more sophisticated settings, such as additional drives and additional network interfaces. For example, here is the `group_vars/nfs.yml` file.

```
networks:
  - name:  '{{ vm_portgroup }}'
    ip:  "{{ ip_addr | ipaddr('address') }}"
    netmask: "{{ ip_addr | ipaddr('netmask') }}"
    gateway: "{{ gateway }}"
 
disks_specs:
  - size_gb:  '{{ disk1_size }}'
    type: thin
    datastore: "{{ datastores | random }}"
  - size_gb: '{{ disk2_size }}'
    type: thin
    datastore: "{{ datastores | random }}"
  - size_gb: 10
    type: thin
    datastore: "{{ datastores | random }}"
```

In this example, the size of the first two drives is specified using the values of the variables `disk1_size` and `disk2_size` that are declared in the `group_vars/all/vars` file. This maintains compatibility with `hosts` inventories from earlier releases of the playbooks. However, it is possible to provide explicit values, depending on your requirements, for the individual UCP, DTR, worker or NFS VMs. For example, you may want to increase the size of the second disk for the NFS VM as this is used to store the DTR images, so the default value of 500GB may not be sufficient to meet your needs.

In this release, support has been added for configuring a third drive that can be used to hold Kubernetes persistent volume data. The default size (10GB) is set low as the use of the NFS VM for storing persistent volume data is only considered suitable for demo purposes and should not be used in a production environment.

In the following example, the `group_vars/nfs.yml` has been modified to configure the NFS VM with a 50GB boot disk, a 500GB drive for DTR images and an 800GB drive for Kubernetes persistent volumes data.

```
networks:
  - name:  '{{ vm_portgroup }}'
    ip:  "{{ ip_addr | ipaddr('address') }}"
    netmask: "{{ ip_addr | ipaddr('netmask') }}"
    gateway: "{{ gateway }}"
 
disks_specs:
  - size_gb: 50
    type: thin
    datastore: "{{ datastores | random }}"
  - size_gb: 500
    type: thin
    datastore: "{{ datastores | random }}"
  - size_gb: 800
    type: thin
    datastore: "{{ datastores | random }}"
```

Note: The number of drives and the purpose of each drive is determined by the role of the VM and the specific playbooks that uses the information. The first disk is always used as the boot disk, irrespective of VM role, while the purpose of the second or third disk is specific to the role.



# Overriding group variables

If you wish to configure your nodes with different specifications to the ones defined by the group, it is possible to declare the same variables at the node level, overriding the group value. For instance, you could have one of your workers with higher specifications by setting:

In the file `vm_wrk_lnx.yml`:

``` 
cpus: '4'
ram: '65536'
disk2_size: '500'
```

In the `hosts` file:

```
[vm_wrk_lnx] 
worker01 ip_addr='10.0.0.10/16' esxi_host='esxi1.domain.local' 
worker02 ip_addr='10.0.0.11/16' esxi_host='esxi1.domain.local' 
worker03 ip_addr='10.0.0.12/16' esxi_host='esxi1.domain.local' cpus='16' ram'131072' 
```


In the example above, the `worker03` Linux VM node would have 4 times more CPU and double the RAM compared to the rest of the Linux VM worker nodes.

The different variables you can use are described in the table below. They are all mandatory unless otherwise specified.

|Variable|Scope|Description|
|:-------|:----|:----------|
|ip_addr|Node|IP address in CIDR format to be given to a node|
|esxi_host|Node|ESXi host where the node will be deployed. If the cluster is configured with DRS, this option will be overridden|
|cpus|Node/Group|Number of CPUs to assign to a VM or a group of VMs|
|ram|Node/Group|Amount of RAM in MB to assign to a VM or a group of VMs|
|disk2_size|Node/Group|Size of the second disk in GB to attach to a VM or a group of VMs. This variable is only mandatory on Docker nodes (UCP, DTR, worker) and NFS node. It is not required for the logger node or the load balancers.|
