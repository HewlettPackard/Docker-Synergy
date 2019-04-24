# Using NFS VM when deploying NFS provisioner for Kubernetes

## Prerequisites

-   Configure the variables described in the section `Kubernetes Persistent Volume configuration`
-   Install the `kubectl` binary on your Ansible box
-   Install the UCP Client bundle for the `admin` user
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`



## Configurating NFS VM for post-deployment verification

In this example, it is assumed that the relevant variables are configured as follows:

|Variable|Value|
|:-------|:----|
|nfs_provisioner_namespace|`nfsstorage`|
|nfs_provisioner_role|`nfs-provisioner-runner-vm`|
|nfs_provisioner_serviceaccount|`nfs-provisioner`|
|nfs_provisioner_name|`hpe.com/nfs-vm`|
|nfs_provisioner_storage_class_name|`nfs-vm`|
|nfs_provisioner_server_share|`/k8s`|
|nfs_mount_options|`'rw,sync,actimeo=0'`|


In this instance, the variable `nfs_external_server` is commented out, resulting in the NFS VM being used, rather
than any external server.

**Note:** When using an external NFS server such as the one hosted by 3PAR, you need to create the file shares manually as shown in the previous section. If you are using the NFS VM, the file share is created automatically when running `site.yml` by the playbook `playbooks/install_nfs_server.yml`. If you wish to change the
file share after initial deployment, you must update the variable `nfs_provisioner_server_share` and then re-run the playbook `playbooks/install_nfs_server.yml`.


## Running the playbook

Once the prerequisites are satisfied, run the appropriate playbook on your Ansible node:

```
# cd ~/Docker-Synergy
# ansible-playbook -i hosts playbooks/nfs-provisioner.yml --vault-password-file .vault_pass
```

Running the command `kubectl get sc` will show the storage class named `nfs-vm`:

```
# kubectl get sc

NAME      PROVISIONER   AGE
nfs-vm     hpe.com/nfs-vm     5m
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

