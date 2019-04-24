# Introduction to playbooks

The Ansible playbooks are available to download at [https://github.com/HewlettPackard/Docker-Synergy](https://github.com/HewlettPackard/Docker-Synergy). Once you have cloned the repository, change directory to `/root/Docker-Synergy`.

You can use the playbook `site.yml` as the day 0 playbook to deploy the solution. It is simply a wrapper around a number of required and optional playbooks that allow you to configure the deployment to your needs.

To start a deployment, use the following command:

```
# ansible-playbook -i hosts site.yml --vault-password-file .vault_pass
```

The playbooks should run for approximately 35-40 minutes for the default deployment with 3 UCP, 3 DTR and 3 Linux VM worker nodes (depending on your server specifications and the size of your environment).