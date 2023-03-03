/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the autoscale settings for a subscription
 *
 * @summary Lists the autoscale settings for a subscription
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-10-01/examples/listAutoscaleSettingBySubscription.json
 */
async function listAutoscaleSettingsBySubs() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "b67f7fec-69fc-4974-9099-a26bd6ffeda3";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.autoscaleSettings.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAutoscaleSettingsBySubs();
}

main().catch(console.error);
