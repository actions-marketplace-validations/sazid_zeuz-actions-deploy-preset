const core = require('@actions/core');
const axios = require('axios').default;

function info(msg) {
  try {
    if (typeof msg == 'string') {
      core.info(msg);
    } else {
      core.info(JSON.stringify(msg));
    }
  } catch {
    core.info(msg);
  }
}

async function run() {
  try {
    // required inputs
    const webhook = core.getInput('zeuz_preset_webhook').trim();
    const nodeId = core.getInput('zeuz_node_id').trim();
    const objective = core.getInput('zeuz_objective').trim();
    const version = core.getInput('zeuz_version').trim();
    const runtimeParameters = JSON.parse(core.getInput('zeuz_runtime_parameters'));

    info(`Webhook: ${webhook}`);
    info(`Node ID regex pattern: ${nodeId}`);
    info(`Objective: ${objective}`);
    info(`Version: ${version}`);
    info(`Runtime parameters: ${JSON.stringify(runtimeParameters)}`);

    try {
      const runId = await axios.post(webhook, {
        "nodeId": nodeId,
        "objective": objective,
        "version": version,
        "runtimeParameters": runtimeParameters,
      });

      info(`Successfully deployed, run id: ${runId}`);
      core.setOutput("run_id", runId);
    } catch (error) {
      core.setFailed(`Deployment failed, error: ${error}`);
      return;
    }
  } catch (error) {
    info(error.stack)
    core.setFailed(error.message);
  }
}

run();
