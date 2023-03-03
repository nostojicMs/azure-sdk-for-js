/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  BackupPoliciesListOptionalParams,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch
scoped results.
 *
 * @summary Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch
scoped results.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-01-01/examples/AzureIaasVm/BackupPolicies_List.json
 */
async function listProtectionPoliciesWithBackupManagementTypeFilterAsAzureIaasVM() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const filter = "backupManagementType eq 'AzureIaasVM'";
  const options: BackupPoliciesListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.backupPolicies.list(
    vaultName,
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch
scoped results.
 *
 * @summary Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch
scoped results.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-01-01/examples/AzureIaasVm/V2Policy/v2-List-Policies.json
 */
async function listProtectionPoliciesWithBackupManagementTypeFilterAsAzureIaasVMWithBothV1AndV2Policies() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const filter = "backupManagementType eq 'AzureIaasVM'";
  const options: BackupPoliciesListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.backupPolicies.list(
    vaultName,
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch
scoped results.
 *
 * @summary Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch
scoped results.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-01-01/examples/AzureWorkload/BackupPolicies_List.json
 */
async function listProtectionPoliciesWithBackupManagementTypeFilterAsAzureWorkload() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const filter = "backupManagementType eq 'AzureWorkload'";
  const options: BackupPoliciesListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.backupPolicies.list(
    vaultName,
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listProtectionPoliciesWithBackupManagementTypeFilterAsAzureIaasVM();
  listProtectionPoliciesWithBackupManagementTypeFilterAsAzureIaasVMWithBothV1AndV2Policies();
  listProtectionPoliciesWithBackupManagementTypeFilterAsAzureWorkload();
}

main().catch(console.error);
