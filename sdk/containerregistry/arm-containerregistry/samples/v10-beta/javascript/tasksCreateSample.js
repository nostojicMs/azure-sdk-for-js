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
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a task for a container registry with the specified parameters.
 *
 * @summary Creates a task for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/TasksCreate.json
 */
async function tasksCreate() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const taskName = "mytTask";
  const taskCreateParameters = {
    agentConfiguration: { cpu: 2 },
    identity: { type: "SystemAssigned" },
    isSystemTask: false,
    location: "eastus",
    logTemplate: "acr/tasks:{{.Run.OS}}",
    platform: { architecture: "amd64", os: "Linux" },
    status: "Enabled",
    step: {
      type: "Docker",
      arguments: [
        { name: "mytestargument", isSecret: false, value: "mytestvalue" },
        {
          name: "mysecrettestargument",
          isSecret: true,
          value: "mysecrettestvalue",
        },
      ],
      contextPath: "src",
      dockerFilePath: "src/DockerFile",
      imageNames: ["azurerest:testtag"],
      isPushEnabled: true,
      noCache: false,
    },
    tags: { testkey: "value" },
    trigger: {
      baseImageTrigger: {
        name: "myBaseImageTrigger",
        baseImageTriggerType: "Runtime",
        updateTriggerEndpoint: "https://user:pass@mycicd.webhook.com?token=foo",
        updateTriggerPayloadType: "Token",
      },
      sourceTriggers: [
        {
          name: "mySourceTrigger",
          sourceRepository: {
            branch: "master",
            repositoryUrl: "https://github.com/Azure/azure-rest-api-specs",
            sourceControlAuthProperties: { token: "xxxxx", tokenType: "PAT" },
            sourceControlType: "Github",
          },
          sourceTriggerEvents: ["commit"],
        },
      ],
      timerTriggers: [{ name: "myTimerTrigger", schedule: "30 9 * * 1-5" }],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.tasks.beginCreateAndWait(
    resourceGroupName,
    registryName,
    taskName,
    taskCreateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a task for a container registry with the specified parameters.
 *
 * @summary Creates a task for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/TasksCreate_QuickTask.json
 */
async function tasksCreateQuickTask() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const taskName = "quicktask";
  const taskCreateParameters = {
    identity: {},
    isSystemTask: true,
    location: "eastus",
    logTemplate: "acr/tasks:{{.Run.OS}}",
    status: "Enabled",
    tags: { testkey: "value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.tasks.beginCreateAndWait(
    resourceGroupName,
    registryName,
    taskName,
    taskCreateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a task for a container registry with the specified parameters.
 *
 * @summary Creates a task for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/ManagedIdentity/TasksCreate_WithSystemAndUserIdentities.json
 */
async function tasksCreateWithSystemAndUserIdentities() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const taskName = "mytTask";
  const taskCreateParameters = {
    agentConfiguration: { cpu: 2 },
    identity: {
      type: "SystemAssigned, UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/f9d7ebedAdbd4cb4B973Aaf82c136138/resourcegroups/myResourceGroup1/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity2":
          {},
      },
    },
    isSystemTask: false,
    location: "eastus",
    logTemplate: undefined,
    platform: { architecture: "amd64", os: "Linux" },
    status: "Enabled",
    step: {
      type: "Docker",
      arguments: [
        { name: "mytestargument", isSecret: false, value: "mytestvalue" },
        {
          name: "mysecrettestargument",
          isSecret: true,
          value: "mysecrettestvalue",
        },
      ],
      contextPath: "src",
      dockerFilePath: "src/DockerFile",
      imageNames: ["azurerest:testtag"],
      isPushEnabled: true,
      noCache: false,
    },
    tags: { testkey: "value" },
    trigger: {
      baseImageTrigger: {
        name: "myBaseImageTrigger",
        baseImageTriggerType: "Runtime",
        updateTriggerEndpoint: "https://user:pass@mycicd.webhook.com?token=foo",
        updateTriggerPayloadType: "Default",
      },
      sourceTriggers: [
        {
          name: "mySourceTrigger",
          sourceRepository: {
            branch: "master",
            repositoryUrl: "https://github.com/Azure/azure-rest-api-specs",
            sourceControlAuthProperties: { token: "xxxxx", tokenType: "PAT" },
            sourceControlType: "Github",
          },
          sourceTriggerEvents: ["commit"],
        },
      ],
      timerTriggers: [{ name: "myTimerTrigger", schedule: "30 9 * * 1-5" }],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.tasks.beginCreateAndWait(
    resourceGroupName,
    registryName,
    taskName,
    taskCreateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a task for a container registry with the specified parameters.
 *
 * @summary Creates a task for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/ManagedIdentity/TasksCreate_WithUserIdentities.json
 */
async function tasksCreateWithUserIdentities() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const taskName = "mytTask";
  const taskCreateParameters = {
    agentConfiguration: { cpu: 2 },
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/f9d7ebedAdbd4cb4B973Aaf82c136138/resourcegroups/myResourceGroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity1":
          {},
        "/subscriptions/f9d7ebedAdbd4cb4B973Aaf82c136138/resourcegroups/myResourceGroup1/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity2":
          {},
      },
    },
    isSystemTask: false,
    location: "eastus",
    logTemplate: undefined,
    platform: { architecture: "amd64", os: "Linux" },
    status: "Enabled",
    step: {
      type: "Docker",
      arguments: [
        { name: "mytestargument", isSecret: false, value: "mytestvalue" },
        {
          name: "mysecrettestargument",
          isSecret: true,
          value: "mysecrettestvalue",
        },
      ],
      contextPath: "src",
      dockerFilePath: "src/DockerFile",
      imageNames: ["azurerest:testtag"],
      isPushEnabled: true,
      noCache: false,
    },
    tags: { testkey: "value" },
    trigger: {
      baseImageTrigger: {
        name: "myBaseImageTrigger",
        baseImageTriggerType: "Runtime",
        updateTriggerEndpoint: "https://user:pass@mycicd.webhook.com?token=foo",
        updateTriggerPayloadType: "Default",
      },
      sourceTriggers: [
        {
          name: "mySourceTrigger",
          sourceRepository: {
            branch: "master",
            repositoryUrl: "https://github.com/Azure/azure-rest-api-specs",
            sourceControlAuthProperties: { token: "xxxxx", tokenType: "PAT" },
            sourceControlType: "Github",
          },
          sourceTriggerEvents: ["commit"],
        },
      ],
      timerTriggers: [{ name: "myTimerTrigger", schedule: "30 9 * * 1-5" }],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.tasks.beginCreateAndWait(
    resourceGroupName,
    registryName,
    taskName,
    taskCreateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a task for a container registry with the specified parameters.
 *
 * @summary Creates a task for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/ManagedIdentity/TasksCreate_WithSystemIdentity.json
 */
async function tasksCreateWithUserIdentitiesWithSystemIdentity() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const taskName = "mytTask";
  const taskCreateParameters = {
    agentConfiguration: { cpu: 2 },
    identity: { type: "SystemAssigned" },
    isSystemTask: false,
    location: "eastus",
    logTemplate: undefined,
    platform: { architecture: "amd64", os: "Linux" },
    status: "Enabled",
    step: {
      type: "Docker",
      arguments: [
        { name: "mytestargument", isSecret: false, value: "mytestvalue" },
        {
          name: "mysecrettestargument",
          isSecret: true,
          value: "mysecrettestvalue",
        },
      ],
      contextPath: "src",
      dockerFilePath: "src/DockerFile",
      imageNames: ["azurerest:testtag"],
      isPushEnabled: true,
      noCache: false,
    },
    tags: { testkey: "value" },
    trigger: {
      baseImageTrigger: {
        name: "myBaseImageTrigger",
        baseImageTriggerType: "Runtime",
      },
      sourceTriggers: [
        {
          name: "mySourceTrigger",
          sourceRepository: {
            branch: "master",
            repositoryUrl: "https://github.com/Azure/azure-rest-api-specs",
            sourceControlAuthProperties: { token: "xxxxx", tokenType: "PAT" },
            sourceControlType: "Github",
          },
          sourceTriggerEvents: ["commit"],
        },
      ],
      timerTriggers: [{ name: "myTimerTrigger", schedule: "30 9 * * 1-5" }],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.tasks.beginCreateAndWait(
    resourceGroupName,
    registryName,
    taskName,
    taskCreateParameters
  );
  console.log(result);
}

async function main() {
  tasksCreate();
  tasksCreateQuickTask();
  tasksCreateWithSystemAndUserIdentities();
  tasksCreateWithUserIdentities();
  tasksCreateWithUserIdentitiesWithSystemIdentity();
}

main().catch(console.error);
