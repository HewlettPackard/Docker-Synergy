# This playbook will Restore DTR

ansible-playbook  -i hosts --limit=dtr,nfs,worker_lb restore.yml
