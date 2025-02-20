import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware(context => {
  // Get the current page's entry and pagination data from Starlight
  const { entry, pagination } = context.locals.starlightRoute;

  // Extract the top-level docs section from the current page's ID
  // e.g. for "guides/start" this would return "guides"
  const currentDocs = entry.id.split('/')[0];

  // Remove the "previous" pagination link if it points to a different docs section
  if (pagination.prev && !pagination.prev.href.includes(currentDocs)) {
    pagination.prev = undefined;
  }
  // Remove the "next" pagination link if it points to a different docs section
  if (pagination.next && !pagination.next.href.includes(currentDocs)) {
    pagination.next = undefined;
  }
});
