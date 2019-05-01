(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{343:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("All Docker-related variables are mandatory unless otherwise stated and are described in the following table.")]),t._v(" "),s("table",[t._m(1),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("docker_ee_url")]),t._v(" "),t._m(2),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Note: This is a private link to your Docker EE subscription. The value for "),s("code",[t._v("docker_ee_url")]),t._v(" is the URL documented at the following address: "),s("a",{attrs:{href:"https://docs.docker.com/engine/installation/linux/docker-ee/rhel/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/installation/linux/docker-ee/rhel/"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)])]),t._v(" "),s("p",[t._v("To see how to use customer-supplied certificates with UCP and DTR, see Appendix B.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docker-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Variable")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("File")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("group_vars/all/vault")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("docker_ee_reponame")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Specifies the repo to use. For Docker EE 2.1, this variable should be set to the value "),e("code",[this._v("stable-18.09")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("docker_ee_version")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Optional. Can be used to download an exact version of Docker EE from the repo specified in "),e("code",[this._v("docker_ee_reponame")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("rhel_version")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("For the Docker installation, this sets the version of your RHEL OS, such as "),e("code",[this._v("7.6")]),this._v(". The playbooks were tested with RHEL 7.6.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("dtr_version")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Version of the Docker DTR you wish to install. You can use a numeric version or "),e("code",[this._v("latest")]),this._v(" for the most recent one. The playbooks were tested with 2.6.4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("ucp_version")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Version of the Docker UCP you wish to install. You can use a numeric version or "),e("code",[this._v("latest")]),this._v(" for the most recent one. The playbooks were tested with UCP 3.1.4.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("images_folder")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Directory in the NFS server that will be mounted in the DTR nodes and that will host your Docker images.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("license_file")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Full path to your Docker EE license file on your Ansible host. The license file is available from the Docker Store")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("ucp_username")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("group_vars/all/vars")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Username of the administrator user for UCP and DTR, typically "),e("code",[this._v("admin")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("ucp_password")]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("group_vars/all/vault")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The password for the "),e("code",[this._v("ucp_username")]),this._v(" account.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("docker_storage_driver")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Storage driver for Docker nodes. The only accepted value is "),s("code",[t._v("overlay2")]),t._v(" (Previously, "),s("code",[t._v("devicemapper")]),t._v(" was supported but this has been deprecated as it is no longer supported by Docker on RHEL 7.5 and 7.6)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"storing-dtr-images-on-external-nfs-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storing-dtr-images-on-external-nfs-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Storing DTR images on external NFS server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Using a combination of "),e("code",[this._v("images_folder")]),this._v(" and "),e("code",[this._v("nfs_external_server")]),this._v(" variables, you can host your DTR images\non an NFS server. If the variable "),e("code",[this._v("nfs_external_server")]),this._v(" is unset or commented out, the NFS VM is used by default.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When using an external NFS server such as the one hosted by 3PAR, you need to create the file share matching the name stored in "),e("code",[this._v("images_folder")]),this._v(" manually, as\nshown in the section "),e("code",[this._v("Using HPE 3PAR when deploying NFS provisioner for Kubernetes")]),this._v(". If you are using the NFS VM, the file share is created automatically by the playbooks.")])}],!1,null,null,null);e.default=r.exports}}]);