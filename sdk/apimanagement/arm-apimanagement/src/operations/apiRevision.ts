/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiRevision } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ApiRevisionContract,
  ApiRevisionListByServiceNextOptionalParams,
  ApiRevisionListByServiceOptionalParams,
  ApiRevisionListByServiceResponse,
  ApiRevisionListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiRevision operations. */
export class ApiRevisionImpl implements ApiRevision {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiRevision class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists all revisions of an API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiRevisionListByServiceOptionalParams
  ): PagedAsyncIterableIterator<ApiRevisionContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
      apiId,
      options
    );
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          options,
          settings
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiRevisionListByServiceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApiRevisionContract[]> {
    let result: ApiRevisionListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        apiId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        apiId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiRevisionListByServiceOptionalParams
  ): AsyncIterableIterator<ApiRevisionContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all revisions of an API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiRevisionListByServiceOptionalParams
  ): Promise<ApiRevisionListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      listByServiceOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    nextLink: string,
    options?: ApiRevisionListByServiceNextOptionalParams
  ): Promise<ApiRevisionListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/revisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiRevisionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiRevisionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.apiId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
