---
layout: post
title: Monitoring cloud-native applications with Docker CaaS on HPE Synergy
author: gabrielmcg
---

This post explores why monitoring cloud-native applications is complicated and the various monitoring tools 
integrated in the solution, including Sysdig, Prometheus/Grafana and Splunk Enterprise.


## Why is Monitoring important and difficult?

Monitoring has many distinct goals, for example, producing management dashboards,  generating threshold-based alerts to 
prompt human or automated intervention,  or enabling root cause, performance and trend analysis. Orchestration and DevOps 
processes simplify the day-zero deployment of container-based applications and support the ongoing management of reliable, 
distributed systems. However, they also make monitoring more difficult.  New layers of complexity are introduced that make 
it harder for developers and ops engineers to gain visibility into running applications and to determine how they might 
mitigate issues that arise. 

Monitoring metrics can be produced by the application code itself and by any 3rd party software, running as distributed 
microservices.  In addition, the infrastructure generates significant data about the containers, the servers they run on 
and the orchestrator itself.  Together with the higher density and dynamic nature of containers, traditional monitoring 
software can struggle with the volume and granularity of data produced and the constant churn in the systems involved.
A new generation of software has evolved to monitor containers and microservices, while some legacy offerings have been 
adapted to handle these new requirements. This reference configuration supports a number of monitoring solutions, both 
open-source and commercial, that are geared towards cloud-native applications.



## Monitoring support in the solution

### Sysdig
Hewlett Packard Enterprise has teamed up with Sysdig to offer a fully featured, 90-day trial version of Sysdig Monitor 
and Secure as part of the HPE Reference Configuration for Docker Containers as a Service on HPE Synergy Composable 
Infrastructure. For more details on how to sign up, see the GitHub repository at https://github.com/HewlettPackard/Docker-Synergy. 
The Sysdig Agent runs in a container on each Linux VM in the solution and can infer both the physical and 
the logical structure of the applications deployed on your cloud. This allows Sysdig Monitor, running as 
software as a service (SaaS) , to provide rich visibility from an infrastructure-centric point of view  
for the operations engineer and from an application-centric point of view for the software developer.

### Prometheus/Grafana
Prometheus is a hugely popular, open-source time-series database for collecting and querying monitoring data, and 
is typically used in conjunction with Grafana for data visualization.   You can instrument your application code 
to generate custom metrics, while there are custom exporters for common 3rd party software. cAdvisor generates 
container metrics, node-exporter reports on the underlying servers while Kubernetes itself produces metrics on 
how it is performing. All this data can be gathered and queried in Prometheus for rules-based alerting and to 
produce management dashboards in Grafana.

### Splunk
Splunk Enterprise allows you to aggregate and analyze data from any source, both structured or un-structured, using 
machine leaning to provide insight into patterns and trends and to help you make faster, better-informed 
business decisions. This solution deploys a fully-featured (but capacity-restricted) demo version of Splunk Enterprise 
that has been updated to support Kubernetes, while also facilitating integration with existing installations of 
Splunk Enterprise that your company may already have.
