# Playbooks and configuration


**Table.** HPE OneView variables

|Variable|File|Description|
|:-------|:---|:----------|
|oneview_config_hostname|group_vars/all/vars|The server hosting HPE OneView|
|oneview_config_username|group_vars/all/vars|HPE OneView user name. Defaults to `Administrator`|
|oneview_config_password|**group_vars/all/vault**|HPE OneView password.|
|oneview\_config\_api\_version|group_vars/all/vars|HPE OneView API version. Defaults to `600`|



When it comes to the provisioning of bare-metal servers, the Ansible playbooks create Server Profiles (SP) based on specified Server Profile Templates (SPT) and assign the server profiles to physical compute modules in the Synergy enclosures. The provisioning of the operating system is done when the server profile is applied using the Image Streamer OSDP specified in the SPT. Once the servers are provisioned, they are powered on by the playbooks.

The playbook responsible for the provisioning of the bare metal servers uses the following information stored in Ansible variables for each worker node:

- **ov_template:** The name of the SPT to use when creating the SP for this compute module
- **ov_ansible_connection_name** and **ov\_ansible\_redundant\_connection\_name:** The names of the network connections in the server profile template that maps to the network where the Ansible controller node resides. Currently redundant connections are supported so you must specify two connections on the Ansible network/VLAN
- **enclosure** and **bay:** The target compute module to provision, specified by the name of the Synergy enclosure where the compute module resides and the bay number of the compute module


Below is an excerpt of a sample inventory file. The enclosure and bay number is specified for each bare-metal server. Because this particular HPE Synergy environment contains compute modules of different hardware types, each worker node entry also specifies the HPE OneView Server Profile Template to use when deploying the OS. 

In this example, both Gen9 and Gen10 compute modules are used and  Linux and Windows worker nodes
are being deployed.

```
[bm_wrk_lnx]
clh-worker04 ip_addr='10.60.59.25/16' enclosure='Rack1-Mid-CN759000BZ' bay=8 ov_template='RedHat760_fcoe_gen9_4_v1.0.3'

clh-worker06 ip_addr='10.60.59.27/16' enclosure='Rack1-Top-CN7515048P' bay=5 ov_template='RedHat760_fcoe_gen9_3_v1.0.3'
 
[bm_wrk_win]
clh-worker05 ip_addr='10.60.59.26/16'  enclosure='Rack1-Top-CN7515048P' bay=2 ov_template='Win2016_fcoe_gen10_3_v1.0.3'
```

Note the difference in the Linux template names for the separate Server Hardware Types of **Gen 9 4** and **Gen 9 3**. This can be seen in the following figure taken from HPE OneView:


![ "HPE OneView Server Hardware Types"][media-oneview-server-hardware-types]

**Figure.** HPE OneView Server Hardware Types


 Common variables for all Windows nodes (VM and bare metal) are specified in the file `group_vars/windows_box.yml`. Windows VM-specific variables are in `group_vars/vm_wrk_win.yml` while Windows bare metal variables are in `group_vars/bm_wrk_win.yml`






[media-oneview-server-hardware-types]:<../media/oneview-server-hardware-types.png> 
