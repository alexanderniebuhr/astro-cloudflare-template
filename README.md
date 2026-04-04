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

