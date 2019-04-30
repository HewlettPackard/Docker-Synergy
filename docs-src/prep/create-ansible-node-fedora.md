# Create the Ansible node on Fedora

The Docker Synergy playbooks rely on the  [Ansible Modules for HPE OneView](https://github.com/HewlettPackard/oneview-ansible) project when deploying bare metal resources. 
As a result, there is a requirement to run a newer version of Python than is available by default on RHEL. 
In this release of the Docker Synergy solution, it is required to deploy your Ansible contoller on Fedora, to take advantage of the built-in support for Python 3.


## Create Fedora VM

Create a Virtual Machine with the following characteristics:

- **Guest OS:** Red Hat Fedora Server 29 (64-bit)
- **Disk:** 50G (thin provisioning)
- **CPU:** 2
- **RAM:** 4 GB
- **Ethernet Adapter:** VMXNET 3, connected to your Ansible or management network

Install Fedora Server 29 using the appropriate ISO image for the distro (x86 64 bit) and in 
the `Software Selection` section, choose:

- **Base Environment:** Fedora Server Edition
- **Add-Ons for Selected Environment:** Guest Agent

Select your language, keyboard, and timezone settings and re-boot when the installation finishes.

Configure your networking and check your connectivity before moving on to the next section. If you  are 
operating behind a proxy, configure DNF by editing `/etc/dnf/dnf.conf`, as outlined 
[here](https://www.cyberciti.biz/faq/how-to-use-dnf-command-with-a-proxy-server-on-fedora/).


## Install Ansible and required modules

Login the root account and run the following commands:

```
dnf update -y
dnf install -y git ansible python3-netaddr python3-requests python3-pyvmomi python3-pip python3-winrm
 
cd /usr/bin
ln -s python3.7 python

 
# install the python HPE OneView SDK
cd
git clone https://github.com/HewlettPackard/python-hpOneView.git
cd python-hpOneView/
pip3 install .

 
# Install the Oneview Ansible Modules
cd
git clone https://github.com/HewlettPackard/oneview-ansible.git
 
# Configure Ansible
cat <<EOF >>~/.bashrc
export ANSIBLE_LIBRARY=/root/oneview-ansible/library
export ANSIBLE_MODULE_UTILS=/root/oneview-ansible/library/module_utils
EOF
source ~/.bashrc
```