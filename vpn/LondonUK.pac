function FindProxyForURL(o,n){for(var T=0;T<hosts.length;T++){var t=hosts[T];if(shExpMatch(n,t))return"DIRECT"}return httpsProxy}var hosts=["*.justproxy.io","justproxy.io","localhost*","104.238.173.73","127.0.0.1*","192.168.*","172.16.*","172.17.*","172.18.*","172.19.*","172.20.*","172.21.*","172.22.*","172.23.*","172.24.*","172.25.*","172.26.*","172.27.*","172.28.*","172.29.*","172.30.*","172.31.*","10.*"],httpsProxy="HTTPS gb-london-8.justproxy.io:443;HTTPS gb-london-0.justproxy.io:443;HTTPS gb-london-7.justproxy.io:51229;HTTPS gb-london-6.justproxy.io:443;HTTPS gb-london-4.justproxy.io:51229;HTTPS gb-london-7.justproxy.io:443;HTTPS gb-london-0.justproxy.io:51229;HTTPS gb-london-1.justproxy.io:443;HTTPS gb-london-2.justproxy.io:51229;HTTPS gb-london-4.justproxy.io:443;HTTPS gb-london-3.justproxy.io:51229;HTTPS gb-london-9.justproxy.io:443;HTTPS gb-london-5.justproxy.io:443;HTTPS gb-london-2.justproxy.io:443;HTTPS gb-london-8.justproxy.io:51229;HTTPS gb-london-6.justproxy.io:51229;HTTPS gb-london-9.justproxy.io:51229;HTTPS gb-london-1.justproxy.io:51229;HTTPS gb-london-5.justproxy.io:51229;HTTPS gb-london-3.justproxy.io:443";