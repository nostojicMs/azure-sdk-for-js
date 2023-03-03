/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageImportExport } from "@azure/arm-storageimportexport";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns the BitLocker Keys for all drives in the specified job.
 *
 * @summary Returns the BitLocker Keys for all drives in the specified job.
 * x-ms-original-file: specification/storageimportexport/resource-manager/Microsoft.ImportExport/preview/2021-01-01/examples/ListBitLockerKeys.json
 */
async function listBitLockerKeysForDrivesInAJob() {
  const subscriptionId =
    process.env["STORAGEIMPORTEXPORT_SUBSCRIPTION_ID"] ||
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const jobName = "myJob";
  const resourceGroupName =
    process.env["STORAGEIMPORTEXPORT_RESOURCE_GROUP"] || "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new StorageImportExport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.bitLockerKeys.list(
    jobName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listBitLockerKeysForDrivesInAJob();
}

main().catch(console.error);
