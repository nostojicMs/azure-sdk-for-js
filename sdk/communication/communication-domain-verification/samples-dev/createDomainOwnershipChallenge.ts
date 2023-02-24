// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the use of a DomainVerificationClient to create domain ownership challenge and verify domain ownership.
 */

import {
  DomainVerificationClient,
} from "@azure-tools/communication-domain-verification";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  console.log("\n== Create Domain Ownership Challenge ==\n");

  // You will need to set this environment variable or edit the following values
  const connectionString =
    process.env.COMMUNICATION_SAMPLES_CONNECTION_STRING ||
    "endpoint=https://resourceName.communication.azure.net/;accessKey=test-key";

  const client = new DomainVerificationClient(connectionString);

  const result = await client.createDomainOwnershipChallenge("contoso.com");

  console.log("The value of challenge is:", result.value);
  console.log("Details:", result);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
