# Ansible configuration

1.  On the Ansible node, retrieve the latest version of the playbooks using Git.

    ```
    # git clone https://github.com/HewlettPackard/Docker-Synergy.git
    ```

2.  Change to the directory that you just cloned:

    ```
    # cd ~/Docker-Synergy
    ```


**Note:** All subsequent file names are relative to the `Docker-Synergy` directory. For example `hosts` is located in the top-level `~/Docker-Synergy` while `group_vars/all/vars` corresponds to `~/Docker-Synergy/groups_vars/all/vars`.

You now need to prepare the configuration to match your own environment, prior to deploying Docker EE and the rest of the nodes. To do so, you will need to modify a number of files including:

-   `site.yml`, the main entry point for the playbooks.
-   `hosts`, the inventory file.

You also need to create and populate a number of files:

-   `group_vars/all/vars`, the group variables file.
-   `group_vars/all/vault`, containing sensitive information that needs to be protected.
-   `group_vars/all/backups`, containing backup-related variables.

For the latter group, a set of sample files has been provided to help you get started:

-   `group_vars/all/vars.sample`, a sample group variables file.
-   `group_vars/all/vault.sample`, a sample vault file.
-   `group_vars/all/backups.sample`, a sample backup configuration file.


You should work from the `root` account for the configuration steps and also later on when you run the playbooks.
