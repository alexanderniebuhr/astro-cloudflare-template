## TODO:

1. update all `CHANGEME` texts
2. pin all deps to latest versions instead of `*`
3. Add `src/pages`
4. run `mise i`, `pn i`, `pn update-browserslist-db latest`, `pn run types`, `pn run check`, `pn run deploy`

## commands

Install all dev tools
```shell
mise i
```

Install all deps if not done by `mise`
```shell
pn i
```

Update browserlist
```shell
pn update-browserslist-db latest
```

Deploy to cloudflare
```zsh
pnpm run deploy
```


## Cloudflare Settings
Cloudflare Dasboard Notes (moden,fast,etc.)

- Workers Plan `Paid`, Zone Plan `Free`
- Remove all DNS records other than your woker one
- Enable DNSSEC https://developers.cloudflare.com/dns/dnssec/
- Configure email based on your usage cloudflare /dns/settings/wizard
- Enable SSL/TLS Full (Strict)
- Enable HSTS 6months, includeSubdomains, preload, sniff 
- Minimum TLS 1.2
- Disable Opportunistic Encryption
- Enable TLS 1.3
- Disable Automatic HTTPS Rewrite
- Tweak security to your liking /security/settings
- Enable Speedbrain
- Enable Early Hints
- Disable RocketLoader
- Enable HTTP/2 & HTTP/2 to Origin & HTTP/3
- Enable 0-RTT Connection Resumption
- Enable SmartShield with Smart Tiered Cache, Cache Reserve, ConnectionReuse
- Set Browser Cache TTL Respect Existing Headers
- Enable Crawler Hints
- Enable Always Online
- Enable Add security headers
- Disable WebSockets
- Enable IPv6 Compatibility
- Enable IP Geolocation
- Disable Pseudo IPv4
- Enable Network Error Logging
- Enable Onion Routing
- 

Questions?

Analytics? E.g. /analytics/web/overview or /speed/rum
