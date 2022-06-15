// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
//import { TracingContext } from "@azure/core-tracing";
import { CosmosHeaders } from "../../queryExecutionContext";
import { ResourceResponse } from "../../request/ResourceResponse";
import { Resource } from "../Resource";
import { Database } from "./Database";
import { DatabaseDefinition } from "./DatabaseDefinition";

/** Response object for Database operations */
export class DatabaseResponse extends ResourceResponse<DatabaseDefinition & Resource> {
  constructor(
    resource: DatabaseDefinition & Resource,
    headers: CosmosHeaders,
    statusCode: number,
    database: Database,
    //tracecontext?: TracingContext,
  ) {
    super(resource, headers, statusCode);
    this.database = database;
    //this.trace = tracecontext.getValue(Symbol("Database.Read.Request.Diagnostics")) as string;
  }
  /** A reference to the {@link Database} that the returned {@link DatabaseDefinition} corresponds to. */
  public readonly database: Database;
}
