# Using HPE 3PAR when deploying NFS provisioner for Kubernetes

## Prerequisites

-   Configure the variables described in the section `Kubernetes Persistent Volume configuration`
-   Install the `kubectl` binary on your Ansible box
-   Install the UCP Client bundle for the `admin` user
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`




## Setting up HPE 3PAR
The following section outlines the steps you need to follow in order to configure a Virtual File Server and a share for use by the Kubernetes NFS provisioner.

Log in to the HPE 3PAR StoreServ Management console and perform the following tasks.

**Create a virtual file server (VFS):**

1. In the `General` section, specify a name, in this instance `hpe_vfs3par`

    !["Figure.  Create Virtual File Server - General"][media-3par-create-vfs-png]

    **Figure.**  Create Virtual File Server - General

2. In the Storage Allocation Settings section, set the Provisioning to Thin Provisioned, select an appropriate CPG, in this instance FC_r1, and set the size, for example, 1 terabyte.

    !["Figure.  Create Virtual File Server - Storage Allocation Settings"][media-3par-create-vfs-storage-png]

    **Figure.**  Create Virtual File Server - Storage Allocation Settings

3. Add a virtual IP address

    !["Figure.  Create Virtual File Server - Add Virtual IP Address"][media-3par-create-vfs-vip-png]

    **Figure.**  Create Virtual File Server - Add Virtual IP Address


These steps result in a Virtual File Server:

!["Figure.  Virtual File Server"][media-3par-create-vfs-complete-png]

**Figure.**  Virtual File Server

**Create a File Store:**

1. In the General section, specify a name, in this instance `HPE_filestore3par`, and select the Virtual File Server that you just created.

    !["Figure.  Create File Store - General"][media-3par-create-filestore-png]

    **Figure.**  Create File Store - General

2. Use the default Security settings:
    !["Figure.  Create File Store - Security"][media-3par-create-filestore-security-png]

    **Figure.**  Create File Store - Security

These steps result in the File Store shown below:

!["Figure.  File Store"][media-3par-create-filestore-complete-png]

**Figure.**  File Store


**Create a File Share:**

1. In the General section of the Create File Share dialog, set the share type to NFS Share and set a share name, for example, `hpe_fileshare3par`.

    !["Figure.  Create File Share - General"][media-3par-create-fileshare-png]

    **Figure.**  Create File Share - General


2. In the Share Path section, select the virtual file server and file store that you created earlier and set the sub-directory to `k8s`.

    !["Figure.  Create File Share - Share Path"][media-3par-create-fileshare-sharepath-k8s-png]

    **Figure.**  Create File Share - Share Path

3. In the Additional Settings section, set the Permission to Read/Write allowed and the Privilege to root squashing is off (no root squash):

    !["Figure.  Create File Share - Additional Settings"][media-3par-create-fileshare-additional-png]

    **Figure.**  Create File Share - Additional Settings


The overview for the created File Share is shown below and contains the information you need to specify the configuration variables.

!["Figure.  File Share"][media-3par-create-fileshare-complete-k8s-png]

**Figure.**  File Share



## Configurating NFS on HPE 3PAR for post-deployment verification

In this example, it is assumed that the relevant variables are configured as follows:

|Variable|Value|
|:-------|:----|
|nfs_provisioner_namespace|`nfsstorage`|
|nfs_provisioner_role|`nfs-provisioner-runner-3par`|
|nfs_provisioner_serviceaccount|`nfs-provisioner`|
|nfs_provisioner_name|`hpe.com/nfs-3par`|
|nfs_provisioner_storage_class_name|`nfs-3par`|
|nfs_external_server|`hpe_vfs3par.cloudra.local`|
|nfs_provisioner_server_share|`/hpe_vfs3par/hpe_vfs3par/hpe_filestore3par/k8s`|
|nfs_mount_options|`'rw,sync,actimeo=0'`|

## Running the playbook

Once the appropriate configuration has been establised, run the playbook:

```
# cd ~/Docker-Synergy
# ansible-playbook -i hosts playbooks/nfs-provisioner.yml --vault-password-file .vault_pass
```

Running the command `kubectl get sc` will show the storage class named `nfs-3par`:
```
# kubectl get sc

NAME       PROVISIONER        AGE
nfs-3par   hpe.com/nfs-3par   5m

```


The playbook has a built-in test to validate the provisioining. A pod is deployed to write some test content:

```
templates/nfs-provisioner/nfs-provisioner-writer-pod.yml.j2

kind: Pod
apiVersion: v1
metadata:
  name: writer-pod
spec:
  containers:
  - name: writer-pod
    image: gcr.io/google_containers/busybox:1.24
    command:
      - "/bin/sh"
    args:
      - "-c"
      - "echo '{{ TestMessage }}' >/mnt/bar.txt && while [ 1 ] ; do sleep 2 ; done "
    volumeMounts:
      - name: nfs-pvc
        mountPath: "/mnt"
  restartPolicy: "Never"
  volumes:
    - name: nfs-pvc
      persistentVolumeClaim:
        claimName: test-claim
```

This pod is then deleted, and a new pod is deployed to check that the test content has been persisted after the
writer pod went away.

```
templates/nfs-provisioner/nfs-provisioner-reader-pod.yml.j2

kind: Pod
apiVersion: v1
metadata:
  name: reader-pod
spec:
  containers:
  - name: reader-pod
    image: gcr.io/google_containers/busybox:1.24
    command:
      - "/bin/sh"
    args:
      - "-c"
      - "cat /mnt/bar.txt  && while [ 1 ] ; do sleep 1 ; done "
    volumeMounts:
      - name: nfs-pvc
        mountPath: "/mnt"
  restartPolicy: "Never"
  volumes:
    - name: nfs-pvc
      persistentVolumeClaim:
        claimName: test-claim
```


You should see the following output if the provisioning succeeds:

```
ok: [localhost] => {
    "msg": "Successfully tested NFS persistent storage"
}
```


[media-3par-create-vfs-png]:<../media/3par-create-vfs.png> "Figure. Create Virtual File Server - General"
[media-3par-create-vfs-storage-png]:<../media/3par-create-vfs-storage.png> "Figure. Create Virtual File Server - Storage Allocation Settings" 
[media-3par-create-vfs-vip-png]:<../media/3par-create-vfs-vip.png> "Figure. Create Virtual File Server - Add Virtual IP Address"
[media-3par-create-vfs-complete-png]:<../media/3par-create-vfs-complete.png> "Figure. Virtual File Server"


[media-3par-create-filestore-png]:<../media/3par-create-filestore.png> "Figure. Create File Store - General"
[media-3par-create-filestore-security-png]:<../media/3par-create-filestore-security.png> "Figure. Create File Store - Security"
[media-3par-create-filestore-complete-png]:<../media/3par-create-filestore-complete.png> "Figure. File Store"

[media-3par-create-fileshare-png]:<../media/3par-create-fileshare.png> "Figure. Create File Share - General"
[media-3par-create-fileshare-sharepath-k8s-png]:<../media/3par-create-fileshare-sharepath-k8s.png> "Figure. Create File Share - Share Path"
[media-3par-create-fileshare-additional-png]:<../media/3par-create-fileshare-additional.png> "Figure. Create File Share - Additional Settings"
[media-3par-create-fileshare-complete-k8s-png]:<../media/3par-create-fileshare-complete-k8s.png> "Figure. File Share"