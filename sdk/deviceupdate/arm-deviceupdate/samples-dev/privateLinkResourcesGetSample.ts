/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DeviceUpdate } from "@azure/arm-deviceupdate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get the specified private link resource associated with the device update account.
 *
 * @summary Get the specified private link resource associated with the device update account.
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/preview/2022-04-01-preview/examples/PrivateLinkResources/PrivateLinkResources_Get.json
 */
async function privateLinkResourcesGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "test-rg";
  const accountName = "contoso";
  const groupId = "adu";
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const result = await client.privateLinkResources.get(
    resourceGroupName,
    accountName,
    groupId
  );
  console.log(result);
}

privateLinkResourcesGet().catch(console.error);
