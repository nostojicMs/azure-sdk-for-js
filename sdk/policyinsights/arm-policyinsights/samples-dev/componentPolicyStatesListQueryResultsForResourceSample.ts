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
  ComponentPolicyStatesListQueryResultsForResourceOptionalParams,
  PolicyInsightsClient
} from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Queries component policy states for the resource.
 *
 * @summary Queries component policy states for the resource.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-04-01/examples/ComponentPolicyStates_QueryResourceScopeFilterByComponentId.json
 */
async function queryLatestComponentPolicyComplianceStateAtResourceScopeFilteredByGivenComponentId() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/fff10b27-fff3-fff5-fff8-fffbe01e86a5/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/Vaults/myKVName";
  const componentPolicyStatesResource = "latest";
  const filter = "componentId eq cert-RSA-cert-3";
  const options: ComponentPolicyStatesListQueryResultsForResourceOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.componentPolicyStates.listQueryResultsForResource(
    resourceId,
    componentPolicyStatesResource,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Queries component policy states for the resource.
 *
 * @summary Queries component policy states for the resource.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-04-01/examples/ComponentPolicyStates_QueryResourceScopeGroupByComponentTypeWithAggregate.json
 */
async function queryLatestComponentPolicyComplianceStateCountGroupedByComponentTypeAtResourceScopeFilteredByGivenAssignment() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/e78961ba-36fe-4739-9212-e3031b4c8db7/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/Vaults/myKVName";
  const componentPolicyStatesResource = "latest";
  const filter =
    "policyAssignmentId eq '/subscriptions/e78961ba-36fe-4739-9212-e3031b4c8db7/providers/microsoft.authorization/policyassignments/560050f83dbb4a24974323f8'";
  const apply =
    "groupby((componentType,complianceState),aggregate($count as count))";
  const options: ComponentPolicyStatesListQueryResultsForResourceOptionalParams = {
    filter,
    apply
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.componentPolicyStates.listQueryResultsForResource(
    resourceId,
    componentPolicyStatesResource,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Queries component policy states for the resource.
 *
 * @summary Queries component policy states for the resource.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-04-01/examples/ComponentPolicyStates_QueryNestedResourceScope.json
 */
async function queryLatestComponentPolicyStatesAtNestedResourceScope() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/fff10b27-fff3-fff5-fff8-fffbe01e86a5/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/vaults/myVault";
  const componentPolicyStatesResource = "latest";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.componentPolicyStates.listQueryResultsForResource(
    resourceId,
    componentPolicyStatesResource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Queries component policy states for the resource.
 *
 * @summary Queries component policy states for the resource.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-04-01/examples/ComponentPolicyStates_QueryResourceScope.json
 */
async function queryLatestComponentPolicyStatesAtResourceScope() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/fff10b27-fff3-fff5-fff8-fffbe01e86a5/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/Vaults/myKVName";
  const componentPolicyStatesResource = "latest";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.componentPolicyStates.listQueryResultsForResource(
    resourceId,
    componentPolicyStatesResource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Queries component policy states for the resource.
 *
 * @summary Queries component policy states for the resource.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-04-01/examples/ComponentPolicyStates_QueryResourceScopeExpandPolicyEvaluationDetails.json
 */
async function queryLatestComponentPolicyStatesAtResourceScopeAndExpandPolicyEvaluationDetails() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/fff10b27-fff3-fff5-fff8-fffbe01e86a5/resourceGroups/myResourceGroup/providers/Microsoft.ContainerService/managedClusters/myCluster";
  const componentPolicyStatesResource = "latest";
  const filter =
    "componentType eq 'pod' AND componentId eq 'default/test-pod' AND componentName eq 'test-pod'";
  const expand = "PolicyEvaluationDetails";
  const options: ComponentPolicyStatesListQueryResultsForResourceOptionalParams = {
    filter,
    expand
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.componentPolicyStates.listQueryResultsForResource(
    resourceId,
    componentPolicyStatesResource,
    options
  );
  console.log(result);
}

async function main() {
  queryLatestComponentPolicyComplianceStateAtResourceScopeFilteredByGivenComponentId();
  queryLatestComponentPolicyComplianceStateCountGroupedByComponentTypeAtResourceScopeFilteredByGivenAssignment();
  queryLatestComponentPolicyStatesAtNestedResourceScope();
  queryLatestComponentPolicyStatesAtResourceScope();
  queryLatestComponentPolicyStatesAtResourceScopeAndExpandPolicyEvaluationDetails();
}

main().catch(console.error);
