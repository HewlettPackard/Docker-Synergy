(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{153:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"installing-kubectl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing kubectl")]),n("p",[e._v("A convenience playbook is provided to make it easy to install "),n("code",[e._v("kubectl")]),e._v(" on the Ansible controller. This playbook uses variables in "),n("code",[e._v("group_vars/all/vars")]),e._v(" to determine which version to download. The default version specified by the variable "),n("code",[e._v("kubectl_version")]),e._v(" in the sample variables file is "),n("code",[e._v("1.11.5")]),e._v(". Details of the 1.11 release are available at "),n("a",{attrs:{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md")]),e._v(". In particular, the playbook requires a checksum to be present in the variable "),n("code",[e._v("kubectl_checksum")]),e._v(". The appropriate value can be found in the details for the specific version of kubectl to be downloaded, in this case for version "),n("code",[e._v("1.11.5")]),e._v(" of "),n("code",[e._v("kubernetes-client-linux-amd64.tar.gz")]),e._v(", available at "),n("a",{attrs:{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md#downloads-for-v1115",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.11.md#downloads-for-v1115")]),e._v(".")]),n("p",[e._v("To run the playbook:")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# cd ~/Docker-Synergy\n# ansible-playbook -i hosts playbooks/install_kubectl.yml \n")])]),n("p",[e._v("Test the installation by running the "),n("code",[e._v("kubectl version")]),e._v(" command:")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# kubectl version\n\nClient Version: version.Info{Major:"1", Minor:"11", GitVersion:"v1.11.5", GitCommit:"753b2dbc622f5cc417845f0ff8a77f539a4213ea", GitTreeState:"clean", BuildDate:"2018-11-26T14:41:50Z", GoVersion:"go1.10.3", Compiler:"gc", Platform:"linux/amd64"}\nThe connection to the server localhost:8080 was refused - did you specify the right host or port?\n')])]),n("p",[e._v("The client version is reported correctly. However, "),n("code",[e._v("kubectl")]),e._v(" cannot connect to the server until you set up\na client bundle - this is described in the section titled "),n("code",[e._v("Installing the client bundle")]),e._v(".")]),n("h2",{attrs:{id:"manually-installing-kubectl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manually-installing-kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually installing kubectl")]),n("p",[e._v("You can find the version number for the current stable version of "),n("code",[e._v("kubectl")]),e._v(" at "),n("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/tasks/tools/install-kubectl/")]),e._v(". At the time of writing, the stable version is "),n("code",[e._v("1.13")]),e._v(".")]),n("p",[e._v("The following is an example of manually downloading and installing a specific version of "),n("code",[e._v("kubectl")]),e._v(".")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# version=v1.10.4\n# wget -O kubectl https://storage.googleapis.com/kubernetes-release/release/${version}/bin/linux/amd64/kubectl\n# chmod +x ./kubectl\n# sudo mv ./kubectl /usr/local/bin/kubectl\n\n# kubectl version\nClient Version: version.Info{Major:"1", Minor:"10", GitVersion:"v1.10.4", GitCommit:"5ca598b4ba5abb89bb773071ce452e33fb66339d", GitTreeState:"clean", BuildDate:"2018-06-06T08:13:03Z", GoVersion:"go1.9.3", Compiler:"gc", Platform:"linux/amd64"}\n')])]),n("p",[e._v("More details on installing "),n("code",[e._v("kubectl")]),e._v(" are available at "),n("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/tasks/tools/install-kubectl/")])])])}],!1,null,null,null);t.default=a.exports}}]);