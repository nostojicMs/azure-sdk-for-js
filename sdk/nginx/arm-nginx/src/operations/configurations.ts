/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Configurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NginxManagementClient } from "../nginxManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  NginxConfiguration,
  ConfigurationsListNextOptionalParams,
  ConfigurationsListOptionalParams,
  ConfigurationsListResponse,
  ConfigurationsGetOptionalParams,
  ConfigurationsGetResponse,
  ConfigurationsCreateOrUpdateOptionalParams,
  ConfigurationsCreateOrUpdateResponse,
  ConfigurationsDeleteOptionalParams,
  ConfigurationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Configurations operations. */
export class ConfigurationsImpl implements Configurations {
  private readonly client: NginxManagementClient;

  /**
   * Initialize a new instance of the class Configurations class.
   * @param client Reference to the service client
   */
  constructor(client: NginxManagementClient) {
    this.client = client;
  }

  /**
   * List the Nginx configuration of given Nginx deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    deploymentName: string,
    options?: ConfigurationsListOptionalParams
  ): PagedAsyncIterableIterator<NginxConfiguration> {
    const iter = this.listPagingAll(resourceGroupName, deploymentName, options);
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
          deploymentName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    deploymentName: string,
    options?: ConfigurationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NginxConfiguration[]> {
    let result: ConfigurationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, deploymentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        deploymentName,
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
    deploymentName: string,
    options?: ConfigurationsListOptionalParams
  ): AsyncIterableIterator<NginxConfiguration> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the Nginx configuration of given Nginx deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    deploymentName: string,
    options?: ConfigurationsListOptionalParams
  ): Promise<ConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      listOperationSpec
    );
  }

  /**
   * Get the Nginx configuration of given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of Nginx conf
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsGetOptionalParams
  ): Promise<ConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, configurationName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the Nginx configuration for given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of Nginx conf
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConfigurationsCreateOrUpdateResponse>,
      ConfigurationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConfigurationsCreateOrUpdateResponse> => {
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
      { resourceGroupName, deploymentName, configurationName, options },
      createOrUpdateOperationSpec
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
   * Create or update the Nginx configuration for given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of Nginx conf
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsCreateOrUpdateOptionalParams
  ): Promise<ConfigurationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      deploymentName,
      configurationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Reset the Nginx configuration of given Nginx deployment to default
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of Nginx conf
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, deploymentName, configurationName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Reset the Nginx configuration of given Nginx deployment to default
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param configurationName The name of configuration, only 'default' is supported value due to the
   *                          singleton of Nginx conf
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    configurationName: string,
    options?: ConfigurationsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      deploymentName,
      configurationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: ConfigurationsListNextOptionalParams
  ): Promise<ConfigurationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/configurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxConfigurationListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/configurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxConfiguration
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/configurations/{configurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NginxConfiguration
    },
    201: {
      bodyMapper: Mappers.NginxConfiguration
    },
    202: {
      bodyMapper: Mappers.NginxConfiguration
    },
    204: {
      bodyMapper: Mappers.NginxConfiguration
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/configurations/{configurationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxConfigurationListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
