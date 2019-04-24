# Hardware


Table 4 lists the hardware components that are utilized in this Reference Configuration.

**Table 4.** Hardware

|**Component**|**Purpose**|
|-------------|-----------|
|HPE Synergy 12000 Frame|Rack enclosure for compute, storage, and network hardware|
|HPE Synergy 480 Gen10 Compute Modules|Hosts for running ESX servers that support UCP, DTR, worker and other nodes in the solution|
|HPE 3PAR StoreServ 8200|Provides the storage for the virtual machines and the Docker backups|
|HPE StoreOnce|High performance backup system|


## HPE Synergy
HPE Synergy, the first platform built from the ground up for composable infrastructure, empowers IT to create and deliver new value instantly and continuously. This single infrastructure reduces operational complexity for traditional workloads and increases operational velocity for the new breed of applications and services. Through a single interface, HPE Synergy composes compute, storage and fabric pools into any configuration for any application. It also enables a broad range of applications from bare metal to virtual machines to containers, and operational models like hybrid cloud and DevOps. HPE Synergy enables IT to rapidly react to new business demands.

HPE Synergy Frames contain a management appliance called the HPE Synergy Composer which hosts HPE OneView. HPE Synergy Composer manages the composable infrastructure and delivers:

- Fluid pools of resources, where a single infrastructure of compute, storage and fabric boots up ready for workloads and demonstrates self-assimilating capacity.
- Software-defined intelligence, with a single interface that precisely composes logical infrastructures at near-instant speeds; and demonstrates template-driven, frictionless operations.
- Unified API access, which enables simple line-of-code programming of every infrastructure element; easily automates IT operational processes; and effortlessly automates applications through infrastructure deployment.

## Server requirements
The minimum platform requirement for this configuration, shown in Figure 2, is a 3 node HPE Synergy 480 Gen10 deployment with 1 node in each Synergy frame and

- 384 GB DDR4-2133 RAM
- 2 Intel® Xeon® CPU Gold 6130 2.10GHz x 16 core
- Single ESXi cluster with the control plane and the Docker workers spread out on all 3 nodes

The solution has also been tested on a 6 node HPE Synergy environment, with 2 nodes in each frame. In this setup, the extra 3 nodes are dedicated to Docker worker nodes. The 6 node deployment is depicted graphically in Figure 3 with the following suggested requirements for each node.

- 128 GB DDR4-2133 RAM
- 2 Intel® Xeon® CPU Gold 6130 2.10GHz x 16 core
- Single ESXi cluster with the control plane on 3 nodes and the Docker workers spread on the other 3 nodes.


## Storage requirements
An HPE 3PAR array is required for ESXi datastore. This solution makes use of an HPE 3PAR StoreServ 8200 populated with:

- 8x 480GB SSD for the vSphere cluster datastore
- 8x 1.8TB HDD for the backup datastore

You should create a large virtual volume on the HPE 3PAR StoreServ to host the virtual machines and another large virtual volume for Docker backups. Create datastores on your vSphere cluster using these virtual volumes. If desired, you can create separate HPE 3PAR StoreServ virtual volumes and attach them to all vSphere cluster hosts for backing up Docker persistent volumes. It is recommended that you configure the volumes that are used for virtual machine deployments on the SSD. Storage for backups can be configured on the HDDs.

Table 5 provides an overview of how the storage requirements for various components are addressed in this solution.

**Table 5.** Storage overview

|**Storage requirement**|**Provided by**|**Storage resource**|
|:-------------|:-----------|:-----------|
|VMs|vSphere|HPE 3PAR|
|Persistent storage for stateful containers running under Docker swarm orchestrator|vSphere Docker Volume plugin|HPE 3PAR|
|Persistent storage for K8S - production|K8s NFS provisioner configured for 3PAR|HPE 3PAR Virtual File Server|
|Storage for K8S - non-production|K8s NFS provisioner configured for NFS VM|NFS VM|
|Persistent storage backup|Clone using vSphere Docker Volume plugin|HPE 3PAR|
|UCP, DTR backup|backup.sh utility script or individual backup playbooks|Ansible VM|
|Backup to HPE StoreOnce|HPE RMC|HPE StoreOnce|
|Restore from HPE StoreOnce|HPE RMC|HPE 3PAR|

