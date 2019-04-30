# Deploying Sysdig monitoring on Docker Swarm

## Sysdig configuration for Docker swarm

The following table defines the variables used for configuring the Sysdig deployment on Docker swarm.


|Variable|File|Description|
|:-------|:---|:----------|
|sysdig_access_key|**group_vars/all/vault**|After the activation of your account on the Sysdig portal, you will be provided with your access key which will be used by the playbooks to install the agent on each UCP, DTR and Linux worker node, as well as the NFS, logger and load balancer VMs.|
|sysdig_agent|group_vars/all/vars|Specifies the URL to the Sysdig Linux native install agent, for example, `https://s3.amazonaws.com/download.draios.com/stable/install-agent`|
|sysdig_tags|group_vars/all/vars|Tagging your hosts is highly recommended. Tags allow you to sort the nodes of your infrastructure into custom groups in Sysdig Monitor. Specify location, role, and owner in the format: `'location:City,role:Enterprise CaaS,owner:Customer Name'`|



## Running the playbook

The playbook `playbooks/install_sysdig.yml` is used to automate the configuration of the SaaS setup. By default, this playbook is commented out in `site.yml` and must be explicitly enabled. An access key variable must be set in the `group_vars/all/vault` file as detailed in the section `Sysdig configuration for Docker swarm`.

```
# cd Docker-Synergy
# ansible-playbook -i hosts playbooks/install_sysdig.yml --vault-password-file .vault_pass

```

Using the Sysdig software as a solution (SaaS) website [https://app.sysdigcloud.com](https://app.sysdigcloud.com), you are able to view, analyze and inspect various different dashboards.
