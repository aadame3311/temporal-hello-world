import { condition, defineSignal, proxyActivities, setHandler } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { greet, goodbye, orderFood } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

const orderFoodSignal = defineSignal('orderFood');

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  let orderedFood: boolean = false;

  const greeting = await greet(name);

  console.log(greeting);

  setHandler(orderFoodSignal, async () => {
    const result = await orderFood();
    orderedFood = true;

    console.log(result);
  });

  await condition(() => orderedFood, '10s');

  const farewell = await goodbye(name);

  console.log(farewell);

  return farewell;
}
