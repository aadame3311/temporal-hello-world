import { connectToTemporal } from './client';

(async function orderFood() {
  const client = await connectToTemporal();

  client.workflow.signalWithStart('example', {
    taskQueue: 'hello-world',
    workflowId: 'workflow-hello-world',
    signal: 'orderFood',
    signalArgs: [],
  });
})();
