# ZeuZ GitHub Action - Deploy preset
[![Test action](https://github.com/sazid/zeuz-actions-deploy-preset/actions/workflows/test.yml/badge.svg)](https://github.com/sazid/zeuz-actions-deploy-preset/actions/workflows/test.yml)

## Usage

```yaml
uses: sazid/zeuz-actions-deploy-preset@v1.0
with:
  zeuz_preset_webhook: ${{ secrets.ZEUZ_PRESET_WEBHOOK }}
  zeuz_api_key: ${{ secrets.ZEUZ_API_KEY }}
  zeuz_node_id: ${{ vars.ZEUZ_NODE_ID }}
  zeuz_objective: ${{ vars.ZEUZ_OBJECTIVE }}
  zeuz_version: ${{ vars.ZEUZ_VERSION }}
  zeuz_runtime_parameters: ${{ vars.ZEUZ_RUNTIME_PARAMETERS }}
```

**We highly recommend to put the api key and preset webhook in GitHub secrets**.

See the [actions tab](https://github.com/sazid/zeuz-actions-deploy-preset/actions) for runs of this action! :rocket:
