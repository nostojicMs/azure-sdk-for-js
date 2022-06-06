/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Students } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EducationManagementClient } from "../educationManagementClient";
import {
  StudentDetails,
  StudentsListNextOptionalParams,
  StudentsListOptionalParams,
  StudentsListResponse,
  StudentsGetOptionalParams,
  StudentsGetResponse,
  StudentsDeleteOptionalParams,
  StudentsCreateOrUpdateOptionalParams,
  StudentsCreateOrUpdateResponse,
  StudentsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Students operations. */
export class StudentsImpl implements Students {
  private readonly client: EducationManagementClient;

  /**
   * Initialize a new instance of the class Students class.
   * @param client Reference to the service client
   */
  constructor(client: EducationManagementClient) {
    this.client = client;
  }

  /**
   * Get a list of details about students that are associated with the specified lab.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param options The options parameters.
   */
  public list(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: StudentsListOptionalParams
  ): PagedAsyncIterableIterator<StudentDetails> {
    const iter = this.listPagingAll(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          billingAccountName,
          billingProfileName,
          invoiceSectionName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: StudentsListOptionalParams
  ): AsyncIterableIterator<StudentDetails[]> {
    let result = await this._list(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: StudentsListOptionalParams
  ): AsyncIterableIterator<StudentDetails> {
    for await (const page of this.listPagingPage(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of details about students that are associated with the specified lab.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param options The options parameters.
   */
  private _list(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: StudentsListOptionalParams
  ): Promise<StudentsListResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      listOperationSpec
    );
  }

  /**
   * Get the details for a specific student in the specified lab by student alias
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param studentAlias Student alias.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    studentAlias: string,
    options?: StudentsGetOptionalParams
  ): Promise<StudentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        studentAlias,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Delete the specified student based on the student alias.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param studentAlias Student alias.
   * @param options The options parameters.
   */
  delete(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    studentAlias: string,
    options?: StudentsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        studentAlias,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Create and add a new student to the specified lab or update the details of an existing student in a
   * lab. Note the student must have a valid tenant to accept the lab after they have been added to lab.
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param studentAlias Student alias.
   * @param parameters Request parameters that are provided to update student properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    studentAlias: string,
    parameters: StudentDetails,
    options?: StudentsCreateOrUpdateOptionalParams
  ): Promise<StudentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        studentAlias,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * ListNext
   * @param billingAccountName Billing account name.
   * @param billingProfileName Billing profile name.
   * @param invoiceSectionName Invoice section name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    nextLink: string,
    options?: StudentsListNextOptionalParams
  ): Promise<StudentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/students",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StudentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.includeDeleted],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/students/{studentAlias}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StudentDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.studentAlias
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/students/{studentAlias}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.studentAlias
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Education/labs/default/students/{studentAlias}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StudentDetails
    },
    201: {
      bodyMapper: Mappers.StudentDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.studentAlias
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StudentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseBody
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.includeDeleted],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.nextLink,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
