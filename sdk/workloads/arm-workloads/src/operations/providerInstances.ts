/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProviderInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WorkloadsClient } from "../workloadsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ProviderInstance,
  ProviderInstancesListNextOptionalParams,
  ProviderInstancesListOptionalParams,
  ProviderInstancesListResponse,
  ProviderInstancesGetOptionalParams,
  ProviderInstancesGetResponse,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesCreateResponse,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesDeleteResponse,
  ProviderInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProviderInstances operations. */
export class ProviderInstancesImpl implements ProviderInstances {
  private readonly client: WorkloadsClient;

  /**
   * Initialize a new instance of the class ProviderInstances class.
   * @param client Reference to the service client
   */
  constructor(client: WorkloadsClient) {
    this.client = client;
  }

  /**
   * Gets a list of provider instances in the specified SAP monitor. The operations returns various
   * properties of each provider instances.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    monitorName: string,
    options?: ProviderInstancesListOptionalParams
  ): PagedAsyncIterableIterator<ProviderInstance> {
    const iter = this.listPagingAll(resourceGroupName, monitorName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          monitorName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    monitorName: string,
    options?: ProviderInstancesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProviderInstance[]> {
    let result: ProviderInstancesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, monitorName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        monitorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    monitorName: string,
    options?: ProviderInstancesListOptionalParams
  ): AsyncIterableIterator<ProviderInstance> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      monitorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of provider instances in the specified SAP monitor. The operations returns various
   * properties of each provider instances.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    monitorName: string,
    options?: ProviderInstancesListOptionalParams
  ): Promise<ProviderInstancesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, options },
      listOperationSpec
    );
  }

  /**
   * Gets properties of a provider instance for the specified subscription, resource group, SAP monitor
   * name, and resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesGetOptionalParams
  ): Promise<ProviderInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, providerInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a provider instance for the specified subscription, resource group, SAP monitor name, and
   * resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param providerInstanceParameter Request body representing a provider instance
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    providerInstanceParameter: ProviderInstance,
    options?: ProviderInstancesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProviderInstancesCreateResponse>,
      ProviderInstancesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProviderInstancesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        monitorName,
        providerInstanceName,
        providerInstanceParameter,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a provider instance for the specified subscription, resource group, SAP monitor name, and
   * resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param providerInstanceParameter Request body representing a provider instance
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    providerInstanceParameter: ProviderInstance,
    options?: ProviderInstancesCreateOptionalParams
  ): Promise<ProviderInstancesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      monitorName,
      providerInstanceName,
      providerInstanceParameter,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and
   * resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProviderInstancesDeleteResponse>,
      ProviderInstancesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProviderInstancesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, monitorName, providerInstanceName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and
   * resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesDeleteOptionalParams
  ): Promise<ProviderInstancesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      monitorName,
      providerInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    monitorName: string,
    nextLink: string,
    options?: ProviderInstancesListNextOptionalParams
  ): Promise<ProviderInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName,
    Parameters.providerInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstance
    },
    201: {
      bodyMapper: Mappers.ProviderInstance
    },
    202: {
      bodyMapper: Mappers.ProviderInstance
    },
    204: {
      bodyMapper: Mappers.ProviderInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.providerInstanceParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName,
    Parameters.providerInstanceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResult
    },
    201: {
      bodyMapper: Mappers.OperationStatusResult
    },
    202: {
      bodyMapper: Mappers.OperationStatusResult
    },
    204: {
      bodyMapper: Mappers.OperationStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName,
    Parameters.providerInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
