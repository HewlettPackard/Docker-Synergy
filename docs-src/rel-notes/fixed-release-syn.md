# Fixed in this release



## Fixed in Enterprise Containers 2.1





This release also picks up fixes from preceding versions of the Docker-SimpliVity playbooks, as 
outlined in the following sections.


## Fixed in Express Containers 2.1
Sysdig and NFS Provisioner playbooks updated for Kubernetes 1.11 RBAC




## Fixed in Express Containers 2.0
Port 12388 is now opened on UCP nodes to facilitate access to the Kubernetes API from withing the cluster.

When deploying the Splunk Universal Forwarder on Windows worker nodes, port 1514 is now opened on logger VM, as opposed to previously where the playbook incorrectly opened it on the Ansible box.