# Create the Ansible node on RHEL

The Ansible node will act as the driver to automate the provisioning of the environment and it is essential that it is properly installed.

1.  Create a Virtual Machine and install RHEL 7. select `Infrastructure Server` as the base environment and the `Guests Agents` add-on during the installation.

2.  Log in to the `root` account and create an SSH key pair. Do not protect the key with a passphrase (unless you want to use `ssh-agent`).

    ```
    # ssh-keygen
    ```

3.  Configure the following yum repositories, `rhel-7-server-rpms` and `rhel-7-server-extras-rpms` as explained in `Configure the yum repositories`. The "extras" repo can be enabled as follows:

    ```
    # subscription-manager repos --enable=rhel-7-server-extras-rpms
    ```

4.  Configure the EPEL repository. For more information, see: [http://fedoraproject.org/wiki/EPEL](http://fedoraproject.org/wiki/EPEL). Note that `yum-config-manager` comes with the Infrastructure Server base environment. If you did not select this environment, you will have to install the `yum-utils` package.

    ```
    # rpm -ivh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm 
    # yum-config-manager --enable rhel-7-server-extras-rpms
    ```

5.  Install Ansible 2.7 or higher.

    ```
    # yum install ansible
    ```

6.  Install the following packages which are a mandatory requirement for the playbooks to function as expected. (Update `pip` if requested).

    ```
    # yum install python-pyvmomi python-netaddr python2-jmespath python-pip gcc python-devel openssl-devel git 
    # pip install --upgrade pip 
    # pip install cryptography 
    # pip install pysphere 
    # pip install --ignore-installed "pywinrm>=0.2.2"
    ```


