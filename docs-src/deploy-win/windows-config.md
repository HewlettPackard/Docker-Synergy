# Windows configuration

Window-related variables are shown in Table 15. Variables for all Windows nodes (VM and bare metal) are in the file `group_vars/windows_box.yml`. Windows VM-specific variables are in `group_vars/vm_wrk_win.yml` while Windows bare metal variables are in `group_vars/bm_wrk_win.yml`


**Table 15.** Common Windows variables

|Variable|File|Description|
|:-------|:---|:----------|
|win_username|group_vars/windows_box.yml|Windows user name. The default is `Administrator` |
|win_password|**group_vars/all/vault**|The password for the Windows account.|
|windows_update|group_vars/windows_box.yml|Variable used to determine if Windows updates are automatically downloaded when installing Docker on Windows worker nodes (in the `playbooks/install_docker.yml`). Defaults to `true`.|
|docker_ee_version\_windows|group_vars/windows_box.yml|It is important that the version of the Docker engine running on your Windows worker nodes is the same as that running on RHEL in the rest of your cluster. You should use this variable to explicitly match up the versions. For Docker 2.1, the recommended value is `'18.09'`. If you do not explicitly set this value, you may end up with an incompatible newer version running on your Windows workers.|
|||
|windows_docker_drive|group_vars/windows_box.yml| `'D'`|
|windows_docker_directory|group_vars/windows_box.yml|`'D:\\DockerData'`|
|windows_docker_volume_label|group_vars/windows_box.yml|`'DockerVol'`|
|windows_tz|**group_vars/windows_box.yml**|`'Pacific Standard Time'`<br>This is different from the `windows_timezone` variable. It is important that this value matches the timezone used by UCP servers for certificate validation. See  https://msdn.microsoft.com/en-us/library/ms912391.aspx.|
|||
|windows_winrm_script|group_vars/windows_box.yml|Variable used to determine where the `winrm` Powershell script will be downloaded from. This script needs to be made available locally as described in the following section.|


## Configure remoting for Ansible

The playbooks for deploying Windows workers rely on a Powershell script for remote access from the Ansible machine. The script `ConfigureRemotingForAnsible.ps1` is available online on GitHub
at https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1. 

You need to make this script available locally on the Fedora 29 Ansible controller:

1.  Download the script:

    ```
    wget https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1
    ```

2.  Deploy a local HTTP server, enabling port 80, for example:

    ```
    firewall-cmd --permanent --add-port 80/tcp --zone=public
    firewall-cmd --permanent --change-interface=ens192 --zone=public
    firewall-cmd --reload

    dnf install httpd
    systemctl enable httpd
    systemctl start httpd
    ```

3.  Copy the downloaded script to the web server:

    ```
    cp ConfigureRemotingForAnsible.ps1 /var/www/html
    ```

4.  Configure the variable to point at the local web server, using the name or the IP address of the Ansible controller, for example,

    ```
    windows_winrm_script: 'http://10.60.59.230/ConfigureRemotingForAnsible.ps1'
    ```



**Table.** Windows VM variables

|Variable|File|Description|
|:-------|:---|:----------|
|win_vm_template|**group_vars/vm_wrk_win.yml**|Name of the Windows 2016 VM Template to use. Note that this is the name from a vCenter perspective, not the hostname.|
|windows_vdvs_ps|**group_vars/vm_wrk_win.yml**|Variable used to download the PowerShell script that is used to install vDVS for Windows. For example, `https://raw.githubusercontent.com/vmware/vsphere-storage-for-docker/master/install-vdvs.ps1` |
|windows_vdvs_path|**group_vars/vm_wrk_win.yml**|Variable used to download vSphere Docker Volume Service software. This variable is combined with `windows_vdvs_version` (below) to generate a URL of the form `<windows_vdvs_path>_<windows_vdvs_version>.zip` to download the software. For example, to download version 0.21, set `windows_vdvs_path` equal to `https://vmware.bintray.com/vDVS/vsphere-storage-for-docker_windows` and `windows_vdvs_version` equal to `0.21` |
|windows_vdvs_version|**group_vars/vm_wrk_win.yml**|Combined with `windows_vdvs_path`, this variable is used to generate the URL for downloading the software.|
|windows_vdvs_directory|**group_vars/vm_wrk_win.yml**|Variable used to determine where vDVS software will be unzipped and installed from. The default is `C:\Users\Administrator\Downloads`|
|windows\_timezone|**group_vars/vm_wrk_win.yml**|Defaults to `15`. Valid values are available at https://msdn.microsoft.com/en-us/library/ms912391.aspx|




## Advanced Windows variables
 In general, it should not be necessary to modify the following advanced variables, but they are documented in Table 16 for the sake of completeness.

**Table 16.** Advanced Windows variables

|Variable|File|Description|
|:-------|:---|:----------|
|ansible\_user|**group_vars/windows_box.yml**|Defaults to the Windows user account `win_username` |
|ansible\_password|**group_vars/windows_box.yml**|Defaults to the Windows user password `win_password` as specified in `group_vars/all/vault`|
|ansible\_port|**group_vars/windows_box.yml**|5986|
|ansible\_connection|**group_vars/windows_box.yml**|winrm|
|ansible\_winrm_server_cert_validation|**group_vars/windows_box.yml**|Defaults to `ignore`|
|ansible\_winrm_operation_timeout_sec|**group_vars/windows_box.yml**|Defaults to `250`|
|ansible\_winrm_read_timeout_sec|**group_vars/windows_box.yml**|Defaults to `300`|





