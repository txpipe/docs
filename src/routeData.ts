import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// NOTE: This is to support oura documentation versioning
const versionRegexp = /^(v\d+)/; // Matches "v1", "v2", etc. -

export const onRequest = defineRouteMiddleware(async (context, next) => {
  await next();

  // Get the current page's entry and pagination data from Starlight
  const { entry, pagination } = context.locals.starlightRoute;

  // Extract the top-level docs section from the current page's ID
  // e.g. for "guides/start" this would return "guides"
  const parts = entry.id.split('/');
  let currentDocs = parts[0];
  if (versionRegexp.test(parts[1])) {
    currentDocs += '/' + parts[1];
  }
  // Remove the "previous" pagination link if it points to a different docs section
  if (pagination.prev && !pagination.prev.href.includes(currentDocs)) {
    pagination.prev = undefined;
  }
  // Remove the "next" pagination link if it points to a different docs section
  if (pagination.next && !pagination.next.href.includes(currentDocs)) {
    pagination.next = undefined;
  }
});
