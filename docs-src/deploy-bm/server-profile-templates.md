 # OneView Server Profile Templates

 The server profile template must meet the following criteria

- The template must specify an Image Streamer Deployment Plan and the deployment plan must match the constraints explained 
in the section `OS Deployment Plan Custom Attributes`.
- There must be at least one data drive in addition to the boot device provided by the Image Streamer. The playbooks supports local drives as well as drives configured from a Synergy D3940 storage module or LUNs from an HPE 3PAR array.
- There must be two Ethernet connections mapped to the Ethernet network used by the Ansible controller node.