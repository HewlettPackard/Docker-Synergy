<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<meta name="copyright" content="(C) Copyright 2018" />
<meta name="DC.rights.owner" content="(C) Copyright 2018" />
<meta name="DC.Type" content="topic" />
<meta name="DC.Title" content="Release Notes" />
<meta name="DC.Format" content="XHTML" />
<meta name="DC.Identifier" content="release-notes-mvi2" />
<link rel="stylesheet" type="text/css" href="commonltr.css" />
</head>
<body>
<div class="nested0" aria-labelledby="ariaid-title1" id="release-notes-mvi2">
<h1 class="title topictitle1" id="ariaid-title1">Release Notes</h1>

<div class="body">
 

  
</div>

<div class="topic nested1" aria-labelledby="ariaid-title2" id="new-features-mvi2">
<h2 class="title topictitle2" id="ariaid-title2">New features</h2>

<div class="body">

<div class="section"><h3 class="title sectiontitle">Docker EE 2.0 and Kubernetes</h3>
 

<p class="p">Docker Enterprise Edition (EE) 2.0 is the only platform that manages and secures applications on Kubernetes 
  in multi-Linux, multi-OS and multi-cloud customer environments. With Docker EE 2.0, you get simplified workflows for the day-to-day management of a Kubernetes environment 
  while still having access to native Kubernetes APIs, CLIs, and interfaces.</p>
  
 
<hr /><div class="note note"><span class="notetitle"><b>Note:</b></span> Docker EE 2.0 installs Kubernetes version 1.8. In this release, Docker Universal Control Plane (UCP) uses its own role-based acccess control (RBAC) system which is not compatible with Kubernetes RBAC.</div><hr />
  

<p class="p">For more information on Docker EE 2.0, see 
  <a class="xref" href="https://blog.docker.com/2018/04/announcing-docker-enterprise-edition-2-0/" target="_blank">https://blog.docker.com/2018/04/announcing-docker-enterprise-edition-2-0/</a>
  and <a class="xref" href="https://www.docker.com/products/docker-enterprise" target="_blank">https://www.docker.com/products/docker-enterprise</a>.

</p>


<p class="p">A sample Kubernetes application has been documented in the section <a class="xref" href="README.md#k8s-example-guestbook">Kubernetes guestbook example with Redis</a> to facilitate verification of 
  the deployed playbooks and configuration. This example is also useful for exploring the new Kubernetes-specific features in 
  the latest Splunk and Sysidg offerings.

</p>

  
<hr /><div class="note note"><span class="notetitle"><b>Note:</b></span> The verion of <code class="ph codeph">kubectl</code> used to access the Kubernetes cluster needs to be 1.10 or below. The current release
of <code class="ph codeph">kubectl</code> is not compatible with the version of Kubernetes (1.8) shipped with Docker EE 2.0.
See the section <a class="xref" href="README.md#install-kubectl">Installing kubectl</a>.
</div><hr />
  
</div>

  
<div class="section"><h3 class="title sectiontitle">Splunk 7.1.2 and Kubernetes</h3>
  


<p class="p">This minor update to Splunk Enterprise supports monitoring of Kubernetes logs and metrics. Kubernetes metadata is collected by 
  a universal forwarder implemented as a <code class="ph codeph">Deployment</code> (with just one replica), while logs are collected by a 
  universal forwarder running on each Kubernetes node using a <code class="ph codeph">DaemonSet</code>. The integration 
  leverages the open-source Splunk IT Monitoring and Troubleshooting project at
  <a class="xref" href="https://github.com/splunk/docker-itmonitoring" target="_blank">https://github.com/splunk/docker-itmonitoring</a>.  

</p>


<p class="p">This update also includes new versions of Splunk software components - see the section on installing
  the <strong class="ph b">Splunk App for Windows Infrastructure</strong> and its dependencies 
  <a class="xref" href="README.md#splunk-pre-deploy__splunk-mvi2-versions">here</a>.</p>
  
  
</div>
  
  
<div class="section"><h3 class="title sectiontitle">Sysdig and Kubernetes</h3>
  
  
<p class="p">Sysdig now supports the monitoring of Kubernetes clusters and the playbooks have been updated to make use of this new functionality.
See the section <a class="xref" href="README.md#deploying-sysdig-k8s">Deploying Sysdig monitoring on Kubernetes</a> for more information. 
</p>
  
  
</div>
  

<div class="section"><h3 class="title sectiontitle">Prometheus and Grafana</h3>

  
<p class="p">Prometheus has been updated to version <code class="ph codeph">v2.3.2</code> while Grafana is now at version <code class="ph codeph">5.2.3</code></p>
  
  
<hr /><div class="note note"><span class="notetitle"><b>Note:</b></span> Prometheus and Grafana do not currently support monitoring Kubernetes worker nodes in this solution and so can only be
used in conjunction with Docker swarm deployments.</div><hr />
  
</div>

</div>

</div>
<div class="topic nested1" aria-labelledby="ariaid-title3" id="changes-mvi2">
<h2 class="title topictitle2" id="ariaid-title3">Changes from previous release</h2>

<div class="body">


<div class="section"><h3 class="title sectiontitle">Software updates</h3>
  
    
<ul class="ul">
<li class="li">Docker EE changed to version 2.0 (UCP version 3.0.4, DTR version 2.5.3). The recommended  RAM requirement for UCP has been increased to 16GB for production systems.  </li>

<li class="li">Splunk Enterprise version changed from 7.0.2 to 7.1.2. You must download and install version 7.1.2 of the relevant Splunk Universal Forwarder(s)  
    as described in <a class="xref" href="README.md#splunk-pre-deploy">Splunk prerequisites</a>.</li>
  
<li class="li">RHEL 7.5</li>

<li class="li">Prometheus v2.3.2</li>

<li class="li">Grafana 5.2.3</li>

</ul>

    
</div>

    
<div class="section"><h3 class="title sectiontitle">Playbook updates</h3>
  
 
<p class="p">An overview of all the playbooks is available <a class="xref" href="README.md#playbooks-overview">here</a>. This section outlines the changes 
    from the previous release of the playbooks.</p>

    
<p class="p">New playbooks:</p>
 
    
<ul class="ul">
<li class="li"><code class="ph codeph">playbooks/k8s-nfs-provisioner.yml</code> - see <a class="xref" href="README.md#k8s-persistent-volume-config">Kubernetes Persistent Volume configuration</a> and <a class="xref" href="README.md#k8s-nfs-provisioner">Deploying the NFS provisioner for Kubernetes</a></li>

<li class="li"><code class="ph codeph">playbooks/resize_syspart.yml</code> resizes the logical volume that holds the <code class="ph codeph">/</code> partition of the Linux VMs to use all the space available on the drive.
     </li>

</ul>


<p class="p">Modified playbooks:</p>

<ul class="ul">
<li class="li"><code class="ph codeph">playbooks/create_vms.yml</code></li>

<li class="li"><code class="ph codeph">playbooks/install_nfs_server.yml</code></li>
    
</ul>
    
    
<p class="p">Renamed/Removed playbooks:</p>
    
        
<ul class="ul">
<li class="li"><code class="ph codeph">playbooks/monitoring.yml</code> replaced by <code class="ph codeph">playbooks/splunk_uf.yml</code></li>
  
<li class="li"><code class="ph codeph">playbooks/monitoring_win.yml</code> replaced by <code class="ph codeph">playbooks/splunk_uf_win.yml</code></li>
    
<li class="li"><code class="ph codeph">templates/monitoring</code> folder renamed to <code class="ph codeph">templates/splunk</code></li>
  
</ul>
  
    
</div>

  
<div class="section"><h3 class="title sectiontitle">Configuration updates</h3>
  

<p class="p">New variables and configuration files have been introduced in this release.</p>

<ul class="ul">
<li class="li"><code class="ph codeph">splunk_uf_password</code> variable in <code class="ph codeph">group_vars/vault</code> - see <a class="xref" href="README.md#splunk-pre-deploy">Splunk prerequisites</a></li>
  
<li class="li"><code class="ph codeph">orchestrator</code> variable in <code class="ph codeph">vm_hosts</code> - see <a class="xref" href="README.md#orchestrator-config">Orchestrator configuration</a></li>
  
<li class="li"><code class="ph codeph">k8s_pod_cidr</code> variable in <code class="ph codeph">group_vars/vars</code> - see <a class="xref" href="README.md#k8s-config">Kubernetes configuration</a></li>
 
<li class="li">Additional configuration files for each group in the inventory including <code class="ph codeph">group_vars/vms.yml</code>,
<code class="ph codeph">group_vars/ucp.yml</code>, <code class="ph codeph">group_vars/dtr.yml</code>, <code class="ph codeph">group_vars/worker.yml</code> 
    and <code class="ph codeph">group_vars/nfs.yml</code> - see <a class="xref" href="README.md#inventory-group-variables">Inventory group variables</a>.
</li>

</ul>


</div>

  
</div>

</div>
<div class="topic nested1" aria-labelledby="ariaid-title4" id="fixed-mvi2">
<h2 class="title topictitle2" id="ariaid-title4">Fixed in this release</h2>

<div class="body">
<div class="section"><h3 class="title sectiontitle">Partition occupies all free space on boot drive</h3>
  
  
<p class="p">In the previous release, when a disk size of 100GB was requested for the boot drive, the drive was configured accordingly in the VM but the size of the <code class="ph codeph">/</code> partition was determined by the template. 
  The <code class="ph codeph">/</code> partition is now resized to occupy all the free space of the boot drive. This fix has only been implemented for Linux VMs.
</p>


</div>

  
</div>

</div>
<div class="topic nested1" aria-labelledby="ariaid-title5" id="known-issues-mvi2">
<h2 class="title topictitle2" id="ariaid-title5">Known issues</h2>

<div class="body">

<p class="p">An issue has been seen during the execution of the playbook <code class="ph codeph">playboooks/config_networking.yml</code> when using RHEL 7.4. </p>


<pre class="pre codeblock"><code>TASK [Change hostname with FQDN]
fatal: [&lt;hostname&gt;]: UNREACHABLE! =&gt; {"changed": false, "msg": "Failed to connect to the host via ssh: ssh: connect to host &lt;hostname&gt; port 22: No route to host\r\n", "unreachable": true}
</code></pre>
 
 
<p class="p">This error indicates that the configuration of the network interface of the virtual machine was not successful. </p>
 
    
<p class="p">This error was seen with the VM running version <code class="ph codeph">10.1.5.59732</code> (build-5055683) of the VMware tools and Red Hat 7.4.
It was not reproduced  with version <code class="ph codeph">10.1.10.63510</code> (build-6082533) of the VMware tools plus Red Hat 7.5.
As a result, we recommend that you update your Linux template to Red Hat 7.5 which will also upgrade the VMware tools if they were installed.</p>
    
    
</div>

</div>
</div>
</body>
</html>