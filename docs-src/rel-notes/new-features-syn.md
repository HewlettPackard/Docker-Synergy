# New features

This release of the Docker-Synergy playbooks deploys Docker EE 2.1, featuring Kubernetes 1.11.

## Enterprise Containers 2.1

- Bare metal deployment of worker nodes on both Linux and Windows

## Features inherited from Express Containers 2.1

The following features were first added in the Docker-SimpliVity playbooks and have n=been migrated to the Docker-Synergy release.

- **Prometheus/Grafana on Kubernetes:** The playbooks now set up  a full monitoring stack for the deployed  Kubernetes infrastructure using Prometheus Operator. They install `kube-state-metrics` and `node-exporter` components, as well as supporting Kubelet and Apiserver metrics. Sample dashboards for Grafana are installed to help you monitor your Kubernetes infrastructure.

- **Docker UCP metrics for Kubernetes:** A separate, standalone Prometheus/Grafana deployment is provided to support visualization of UCP metrics. This will be integrated into the full stack deployment in a future release.

-  **Sysdig for Kubernetes:** The Sysdig deployment has been updated to use Kubernetes  1.11 RBAC and config maps for sensitive data.

- **NFS Provisioner for Kubernetes:** The NFS Provisioner has been updated to use Kubernetes 1.11 RBAC.

- **WordPress and MySQL using NFS Provisioner:** Playbooks are provided to validate the NFS Provisioner, featuring a WordPress and MySQL deployment with persistent storage.

- **kubectl:** A convenience playbook is provided to download and install `kubectl`.

- **Client bundle:** A convenience playbook is available to download and configure the client bundle from UCP.

- **Helm charts:** Playbooks for downloading, installing and configuring Helm are provided, with the use of sample charts for validation purposes.



