# HPE Synergy solution overview 

The HPE Reference Configuration for Docker Containers as a Service on HPE Synergy Composable Infrastructure consists of a set of Ansible playbooks that run on top of a VMware virtualization platform on HPE Synergy and HPE 3PAR storage hardware. The solution allows you to configure a flexible OS environment (with both RHEL and Windows workers) providing built-in high availability (HA), container monitoring and security, and backup and restore functionality. This solution assumes that you have already set up your HPE Synergy hardware, that you have installed your VMware virtualization platform and have configured HPE 3PAR for storage.

![ "Solution overview"][media-overview-graphic-syn-png]

**Figure 1.** Solution overview

[Figure 1](syn-solution-overview.md#overview-graphic) provides an overview of the steps used to deploy the solution. Deploying your hardware and HPE Synergy is specific to your environment and is not covered here. This document shows you how to:

-   Prepare the VM templates
-   Create the Ansible host
-   Configure the Ansible parameters
-   Run the Ansible playbooks

Once you are up and running, you should regularly backup the system using the scripts provided as part of this solution.


[media-overview-graphic-syn-png]:<../media/overview-graphic-syn.png> "Figure 1. Solution overview"