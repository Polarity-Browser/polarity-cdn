function FindProxyForURL(o,s){for(var t=0;t<hosts.length;t++){var r=hosts[t];if(shExpMatch(s,r))return"DIRECT"}return httpsProxy}var hosts=["*.justproxy.io","justproxy.io","localhost*","104.238.173.73","127.0.0.1*","192.168.*","172.16.*","172.17.*","172.18.*","172.19.*","172.20.*","172.21.*","172.22.*","172.23.*","172.24.*","172.25.*","172.26.*","172.27.*","172.28.*","172.29.*","172.30.*","172.31.*","10.*"],httpsProxy="HTTPS us-sf-1.justproxy.io:443;HTTPS us-sf-1.justproxy.io:51229";