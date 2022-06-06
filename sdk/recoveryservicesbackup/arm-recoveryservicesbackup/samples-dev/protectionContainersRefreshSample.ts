/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Discovers all the containers in the subscription that can be backed up to Recovery Services Vault. This is an
asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.
 *
 * @summary Discovers all the containers in the subscription that can be backed up to Recovery Services Vault. This is an
asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2022-03-01/examples/Common/RefreshContainers.json
 */
async function triggerAzureVMDiscovery() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName = "SwaggerTestRg";
  const fabricName = "Azure";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionContainers.refresh(
    vaultName,
    resourceGroupName,
    fabricName
  );
  console.log(result);
}

triggerAzureVMDiscovery().catch(console.error);
