# Deploying Sysdig monitoring on Kubernetes

## Sysdig configuration for Kubernetes

The following table defines the variables used for configuring the Sysdig deployment on Kubernetes.


|Variable|File|Description|
|:-------|:---|:----------|
|sysdig_collector|group_vars/all/vars|The URL for the Sysdig SaaS, by default, `'collector.sysdigcloud.com'`|
|sysdig_collector_port|group_vars/all/vars|The port used by the agent, by default,  `'6666'`|
|sysdig_access_key|**group_vars/all/vault**|After the activation of your account on the Sysdig portal, you will be provided with your access key which will be used by the playbooks to install the agent on each UCP, DTR and Linux Kubernetes worker node.|
|k8s_cluster|group_vars/all/vars|This should match the cluster name - this is displayed when you configure the client bundle|
|sysdig_tags|group_vars/all/vars|Tagging your hosts is highly recommended. Tags allow you to sort the nodes of your infrastructure into custom groups in Sysdig Monitor. Specify location, role, and owner in the format: `'location:City,role:Enterprise CaaS,owner:Customer Name'`|

## Prerequisites

-   Install the `kubectl` binary on your Ansible box
-   Install the UCP Client bundle for the `admin` user
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`
-   Ensure that you have configured the required variables, as described in the section `Sysdig configuration for Kubernetes`. For example, you add the relevant variables in the `group_vars/all/vars` file.

```
    sysdig_collector: 'collector.sysdigcloud.com'
    sysdig_collector_port: '6666'
    sysdig_tags: 'location:Enter city,role:Enter role,owner:Customer name'
    k8s_cluster: 'ucp_hpe2-ucp.cloudra.local'
```

You should add the access key to the encrypted `group_vars/all/vault` using the command `ansible-vault edit group_vars/all/vault`.

```
sysdig_access_key: '10****97-9160-****-9061-84bfd0f****0'    
```


## Running the playbook

```
# cd Docker-Synergy
# ansible-playbook -i hosts playbooks/sysdig-k8s-rbac.yml --vault-password-file .vault_pass
```

Using the Sysdig software as a solution (SaaS) website [https://app.sysdigcloud.com](https://app.sysdigcloud.com), you are able to view, analyze and inspect various different dashboards. Initially, you will just see the monitoring information for the infrastructure itself. Deploy a sample application, as detailed in the section `Kubernetes guestbook example with Redis`, and use the Sysdig solution to analyze the different facets of the deployed application.