# Convenience playbooks

- `playbooks/install_kubectl.yml` downloads and installs `kubectl` on the Ansible controller.
- `playbooks/install_client_bundle.yml` installs and configures the UCP bundle on the Ansible controller.
- `playbooks/install_helm.yml` downloads and installs `helm` on the Ansible controller.
- `playbooks/clean_all.yml` powers off and deletes all VMs in your inventory.
- `playbooks/distribute_keys.yml` distributes public keys between all nodes, to allow each node to password-less log in to every other node. As this is not essential and can be regarded as a security risk (a worker node probably should not be able to log in to a UCP node, for instance), this playbook is not included by default in `site.yml`.