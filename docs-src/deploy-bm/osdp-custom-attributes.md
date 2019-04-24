# OS Deployment Plan Custom Attributes


## RHEL OS Deployment Plan

Currently, the code responsible for the provisioning of server profiles expects the OS Deployment Plans to expose two and 
only two custom attributes named 'NIC1' and 'NIC2'. This means the server profiles templates using the OSBP will only 
see the NIC1 and NIC2 attributes as shown in the figure below, which illustrates the OS Deployment section of the `RedHat760_fcoe_gen9_4_v1.0.3` server profile template.

![ "Server Profile Template - OS Deployment"][media-bm-osbp-nic1-nic2]

**Figure.** Server Profile Template - OS Deployment


The IPV4 configuration should be configured using "User-specified" because the
 playbooks will assign the IP addresses from the data in the `hosts` inventory file.  
 All other attributes are populated automatically.


It is possible to specify additional custom attributes in the OS Deployment Plan and the underlying OS Build Plan but these attributes should be hard-coded to the desired values and should not be made visible on deployment.

For example, the Red Hat OS Deployment Plan includes four custom attributes used by the underlying OS Build Plan that are not exposed by the OS Deployment Plan.

- **`NewRootPassword:`** This attribute is used to configure the password for the root account. 
- **`NewUser`** and **`NewUserPassword:`** These two custom attributes are used to configure an additional user.
- **`ssh:`** The underlying OS Build Plan specifies that SSH is enabled since this is required for Ansible to work.

Again, these non-visible custom attributes are all hard-coded to specific values in the OS Build Plan, which effectively means any compute module deployed using this OS Deployment Plan will have these custom attributes set to these hard-coded values.


![ "Deployment Plan attributes"][media-bm-osdp-nic1-nic2]

**Figure.** Deployment Plan attributes


## Windows 2016 OS Deployment Plan


The following figure shows the Windows 2016 OS Deployment Plan shipping with this solution where only the NIC1 and NIC2 attributes are exposed but additional custom attributes are present and used to configure the Windows OS during deployment.  Among other things, the password for the administrative user, the desired Power Plan, Remote Desktop settings, and the Windows Product Key are specified using custom attributes.  



![ "Windows 2016 Deployment Plan attributes"][media-bm-win-deployment-plan]

**Figure.** Windows 2016 Deployment Plan attributes


### Windows Proxy Server Configuration

This Deployment Plan includes the ability to configure a Proxy server if needed.  There are four custom attributes related to proxy server configuration:


|Custom attribute name| Purpose|Default value|
|---------------------|--------|-------------|
|EnableProxy|Controls whether the remaining proxy-related custom attributes are applied to the server during OS deployment|false|
|ProxyServerAddress|The hostname or IP address of the proxy server|none|
|ProxyServerPort|The numeric port number used by the proxy server|none|
|ProxyServerSkipForAddresses|Hostnames or IP addresses that are excluded from the proxy server|none|

By default the `EnableProxy` custom attribute is set to "false" which causes the other three proxy-related custom attributes to be ignored.  However, all of these custom attributes require a string value be configured (i.e. they cannot be left blank), which is why the remaining proxy attributes are set to "none".  In environments where a proxy server is required to reach the Internet, the `EnableProxy` attribute must be set to "true" and the `ProxyServerAddress`, `ProxyServerPort`, and `ProxyServerSkipForAddresses` attributes should be configured with their appropriate values.


For more information about custom attributes and the type of attributes available, see the  
[HPE Synergy Image Streamer 4.1 User's Guide](https://support.hpe.com/hpsc/doc/public/display?docId=emr_na-a00039930en_us&docLocale=en_US).





[media-bm-osbp-nic1-nic2]:<../media/bm-osbp-nic1-nic2.png> 
[media-bm-osdp-nic1-nic2]:<../media/bm-osdp-nic1-nic2.png> 
[media-bm-win-deployment-plan]:<../media/bm-win-deployment-plan.png>
