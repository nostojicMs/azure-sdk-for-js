/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Unregisters the given container from your Recovery Services Vault. This is an asynchronous operation. To determine
whether the backend service has finished processing the request, call Get Container Operation Result API.
 *
 * @summary Unregisters the given container from your Recovery Services Vault. This is an asynchronous operation. To determine
whether the backend service has finished processing the request, call Get Container Operation Result API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-12-01/examples/AzureWorkload/ProtectionContainers_Unregister.json
 */
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");

async function unregisterProtectionContainer() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "testVault";
  const resourceGroupName = "testRg";
  const fabricName = "Azure";
  const containerName = "storagecontainer;Storage;test-rg;teststorage";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionContainers.unregister(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName
  );
  console.log(result);
}

unregisterProtectionContainer().catch(console.error);
