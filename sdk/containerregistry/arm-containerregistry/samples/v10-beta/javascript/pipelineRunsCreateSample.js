/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a pipeline run for a container registry with the specified parameters
 *
 * @summary Creates a pipeline run for a container registry with the specified parameters
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/PipelineRunCreate_Export.json
 */
async function pipelineRunCreateExport() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const pipelineRunName = "myPipelineRun";
  const pipelineRunCreateParameters = {
    request: {
      artifacts: [
        "sourceRepository/hello-world",
        "sourceRepository2@sha256:00000000000000000000000000000000000",
      ],
      pipelineResourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/exportPipelines/myExportPipeline",
      target: { name: "myblob.tar.gz", type: "AzureStorageBlob" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.pipelineRuns.beginCreateAndWait(
    resourceGroupName,
    registryName,
    pipelineRunName,
    pipelineRunCreateParameters
  );
  console.log(result);
}

pipelineRunCreateExport().catch(console.error);

/**
 * This sample demonstrates how to Creates a pipeline run for a container registry with the specified parameters
 *
 * @summary Creates a pipeline run for a container registry with the specified parameters
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/PipelineRunCreate_Import.json
 */
async function pipelineRunCreateImport() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const pipelineRunName = "myPipelineRun";
  const pipelineRunCreateParameters = {
    forceUpdateTag: "2020-03-04T17:23:21.9261521+00:00",
    request: {
      catalogDigest: "sha256@",
      pipelineResourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/importPipelines/myImportPipeline",
      source: { name: "myblob.tar.gz", type: "AzureStorageBlob" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.pipelineRuns.beginCreateAndWait(
    resourceGroupName,
    registryName,
    pipelineRunName,
    pipelineRunCreateParameters
  );
  console.log(result);
}

pipelineRunCreateImport().catch(console.error);
