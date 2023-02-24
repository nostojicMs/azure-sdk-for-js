/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VerifyDomainOwnershipPostOptionalParams,
  VerifyDomainOwnershipPostResponse
} from "../models";

/** Interface representing a VerifyDomainOwnership. */
export interface VerifyDomainOwnership {
  /**
   * Verify domain by testing the challenge for given domain
   * @param domain Verified Domain
   * @param options The options parameters.
   */
  post(
    domain: string,
    options?: VerifyDomainOwnershipPostOptionalParams
  ): Promise<VerifyDomainOwnershipPostResponse>;
}
