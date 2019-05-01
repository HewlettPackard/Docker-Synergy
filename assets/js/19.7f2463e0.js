(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{192:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"playbooks-and-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-and-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Playbooks and configuration")]),r("p",[r("strong",[e._v("Table.")]),e._v(" HPE OneView variables")]),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),r("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("oneview_config_hostname")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("The server hosting HPE OneView")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("oneview_config_username")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE OneView user name. Defaults to "),r("code",[e._v("Administrator")])])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("oneview_config_password")]),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("group_vars/all/vault")])]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE OneView password.")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("oneview_config_api_version")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE OneView API version. Defaults to "),r("code",[e._v("600")])])])])]),r("p",[e._v("When it comes to the provisioning of bare-metal servers, the Ansible playbooks create Server Profiles (SP) based on specified Server Profile Templates (SPT) and assign the server profiles to physical compute modules in the Synergy enclosures. The provisioning of the operating system is done when the server profile is applied using the Image Streamer OSDP specified in the SPT. Once the servers are provisioned, they are powered on by the playbooks.")]),r("p",[e._v("The playbook responsible for the provisioning of the bare metal servers uses the following information stored in Ansible variables for each worker node:")]),r("ul",[r("li",[r("strong",[e._v("ov_template:")]),e._v(" The name of the SPT to use when creating the SP for this compute module")]),r("li",[r("strong",[e._v("ov_ansible_connection_name")]),e._v(" and "),r("strong",[e._v("ov_ansible_redundant_connection_name:")]),e._v(" The names of the network connections in the server profile template that maps to the network where the Ansible controller node resides. Currently redundant connections are supported so you must specify two connections on the Ansible network/VLAN")]),r("li",[r("strong",[e._v("enclosure")]),e._v(" and "),r("strong",[e._v("bay:")]),e._v(" The target compute module to provision, specified by the name of the Synergy enclosure where the compute module resides and the bay number of the compute module")])]),r("p",[e._v("Below is an excerpt of a sample inventory file. The enclosure and bay number is specified for each bare-metal server. Because this particular HPE Synergy environment contains compute modules of different hardware types, each worker node entry also specifies the HPE OneView Server Profile Template to use when deploying the OS.")]),r("p",[e._v("In this example, both Gen9 and Gen10 compute modules are used and  Linux and Windows worker nodes\nare being deployed.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[bm_wrk_lnx]\nclh-worker04 ip_addr='10.60.59.25/16' enclosure='Rack1-Mid-CN759000BZ' bay=8 ov_template='RedHat760_fcoe_gen9_4_v1.0.3'\n\nclh-worker06 ip_addr='10.60.59.27/16' enclosure='Rack1-Top-CN7515048P' bay=5 ov_template='RedHat760_fcoe_gen9_3_v1.0.3'\n \n[bm_wrk_win]\nclh-worker05 ip_addr='10.60.59.26/16'  enclosure='Rack1-Top-CN7515048P' bay=2 ov_template='Win2016_fcoe_gen10_3_v1.0.3'\n")])]),r("p",[e._v("Note the difference in the Linux template names for the separate Server Hardware Types of "),r("strong",[e._v("Gen 9 4")]),e._v(" and "),r("strong",[e._v("Gen 9 3")]),e._v(". This can be seen in the following figure taken from HPE OneView:")]),r("p",[r("img",{attrs:{src:n(46),alt:' "HPE OneView Server Hardware Types"'}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" HPE OneView Server Hardware Types")]),r("p",[e._v("Common variables for all Windows nodes (VM and bare metal) are specified in the file "),r("code",[e._v("group_vars/windows_box.yml")]),e._v(". Windows VM-specific variables are in "),r("code",[e._v("group_vars/vm_wrk_win.yml")]),e._v(" while Windows bare metal variables are in "),r("code",[e._v("group_vars/bm_wrk_win.yml")])])])}],a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.default=o.exports},46:function(e,t,n){e.exports=n.p+"assets/img/oneview-server-hardware-types.fac74b88.png"}}]);