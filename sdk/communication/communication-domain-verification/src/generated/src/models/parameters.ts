/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  CreateDomainOwnershipVerificationChallengeRequest as CreateDomainOwnershipVerificationChallengeRequestMapper,
  DomainOwnershipVerificationRequest as DomainOwnershipVerificationRequestMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const domain: OperationParameter = {
  parameterPath: "domain",
  mapper: CreateDomainOwnershipVerificationChallengeRequestMapper
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-09-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const domain1: OperationParameter = {
  parameterPath: "domain",
  mapper: DomainOwnershipVerificationRequestMapper
};

export const challengeType: OperationParameter = {
  parameterPath: "challengeType",
  mapper: DomainOwnershipVerificationRequestMapper
};
