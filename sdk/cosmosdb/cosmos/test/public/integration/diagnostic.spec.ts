// // Copyright (c) Microsoft Corporation.
// // Licensed under the MIT license.

// import { createSpan } from "./utils/tracing";
// import { tracingClient } from "./utils/tracing";

// // Copyright (c) Microsoft Corporation.
// // Licensed under the MIT license.
// import { ClientContext } from "../../ClientContext";
// import { createDatabaseUri, getIdFromLink, getPathFromLink, ResourceType } from "../../common";
// import { CosmosClient } from "../../CosmosClient";
// import { RequestOptions } from "../../request";
// import { DatabaseDefinition } from "./DatabaseDefinition";
// import { DatabaseResponse } from "./DatabaseResponse";
// import { defaultLogger } from "../../common/logger";


// describe("database.readOffer", function () {
//   describe("without offer", async function () {
//  /** Read the definition of the given Database. */
//   public async read(options?: RequestOptions): Promise<DatabaseResponse> {
//     const path = getPathFromLink(this.url);
//     const id = getIdFromLink(this.url);
//     const response = await this.clientContext.read<DatabaseDefinition>({
//       path,
//       resourceType: ResourceType.database,
//       resourceId: id,
//       options,
//     });
//     return tracingClient.withSpan("Database.Read.Request.Diagnostics", options, (diagoptions)  => {
//       defaultLogger.info(diagoptions);
// return new DatabaseResponse(response.result, response.headers, response.code, this);
//     }
//   }
// });
// });
