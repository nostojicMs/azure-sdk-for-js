/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PowerBIDedicated } = require("@azure/arm-powerbidedicated");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Provisions the specified Dedicated capacity based on the configuration specified in the request.
 *
 * @summary Provisions the specified Dedicated capacity based on the configuration specified in the request.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/createCapacity.json
 */
async function createCapacity() {
  const subscriptionId =
    process.env["POWERBIDEDICATED_SUBSCRIPTION_ID"] || "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName = process.env["POWERBIDEDICATED_RESOURCE_GROUP"] || "TestRG";
  const dedicatedCapacityName = "azsdktest";
  const capacityParameters = {
    administration: {
      members: ["azsdktest@microsoft.com", "azsdktest2@microsoft.com"],
    },
    location: "West US",
    sku: { name: "A1", tier: "PBIE_Azure" },
    tags: { testKey: "testValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const result = await client.capacities.beginCreateAndWait(
    resourceGroupName,
    dedicatedCapacityName,
    capacityParameters
  );
  console.log(result);
}

async function main() {
  createCapacity();
}

main().catch(console.error);
