// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";

import * as Generated from "./generated/src/operatorConnect/models/";
import * as Public from "./";

export function toConsentResponse(consent: Generated.Consent): Public.Consent {
  return {
    companyName: consent.companyName!,
    consentedBy: consent.consentedBy as Public.Contact,
    consentedCountries: consent.consentedCountries!,
    consentedOn: consent.consentedOn!,
    contacts: consent.contacts as Public.Contact[],
    lastModifiedBy: consent.lastModifiedBy as Public.Contact,
    lastModifiedOn: consent.lastModifiedOn!,
    operatorId: consent.operatorId!,
    status: consent.status as Public.ConsentStatus,
  };
}
export function toOperatorResponse(operator: Generated.Operator): Public.Operator {
  return {
    operatorId: operator.operatorId!,
    acquiredNumbersCount: operator.acquiredNumbersCount!,
    friendlyName: operator.friendlyName!,
    landingPage: operator.landingPage!,
    logoThumbnailUri: operator.logoThumbnailUri!,
    logoUri: operator.logoUri!,
    offerings: operator.offerings as Public.OperatorOffering[],
  };
}

export function toConsentResponseIterator(
  iterator: PagedAsyncIterableIterator<
    Generated.Consent,
    Generated.Consent[],
    PageSettings
  >
): PagedAsyncIterableIterator<Public.Consent, Public.Consent[], PageSettings> {
  const iter = getIterator(iterator, toConsentResponse);
  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    byPage: (settings?: PageSettings) =>
      getNextPage(settings, iterator, toConsentResponse),
    next: () => iter.next(),
  };
}

export function toOperatorsResponseIterator(
  iterator: PagedAsyncIterableIterator<
    Generated.Operator,
    Generated.Operator[],
    PageSettings
  >
): PagedAsyncIterableIterator<Public.Operator, Public.Operator[], PageSettings> {
  const iter = getIterator(iterator, toOperatorResponse);
  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    byPage: (settings?: PageSettings) =>
      getNextPage(settings, iterator, toOperatorResponse),
    next: () => iter.next(),
  };
}

async function* getIterator<TResult, TOrig>(
  iterator: PagedAsyncIterableIterator<TOrig, TOrig[], PageSettings>,
  convert: (orig: TOrig) => TResult
): AsyncIterableIterator<TResult> {
  for await (const item of iterator) {
    yield convert(item);
  }
}

async function* getNextPage<TResult, TOrig>(
  settings: PageSettings | undefined,
  iterator: PagedAsyncIterableIterator<TOrig, TOrig[], PageSettings>,
  convert: (orig: TOrig) => TResult
): AsyncIterableIterator<TResult[]> {
  for await (const page of iterator.byPage(settings)) {
    yield page.map((item) => convert(item));
  }
}
