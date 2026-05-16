/** JSON-LD в документ: без модуля schema-org, через Unhead. */
export function useJsonLd(schema: Record<string, unknown>) {
  useHead({
    script: [
      {
        key: 'page-json-ld',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
        tagPriority: 'critical'
      }
    ]
  })
}
