import { createClient } from 'next-sanity'
import { draftMode } from 'next/headers'

import { apiVersion, dataset, projectId } from '../env'

const token = process.env.SANITY_API_READ_TOKEN

// Get the Studio URL - defaults to Sanity's hosted Studio domain if not specified
function getStudioUrl(): string {
  // If explicitly set via environment variable, use that
  if (process.env.NEXT_PUBLIC_SANITY_STUDIO_URL) {
    return process.env.NEXT_PUBLIC_SANITY_STUDIO_URL
  }
  
  // Otherwise, default to Sanity's hosted Studio URL format
  // Format: https://{projectId}.sanity.studio
  return `https://${projectId}.sanity.studio`
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  perspective: 'published',
  stega: {
    enabled: false,
  },
})

// Client for draft mode
export async function getDraftClient() {
  const draft = await draftMode()
  const isDraftMode = draft.isEnabled
  
  if (isDraftMode && token) {
    return client.withConfig({
      token,
      useCdn: false,
      perspective: 'previewDrafts',
      stega: {
        enabled: true,
        studioUrl: getStudioUrl(),
        logger: console,
      },
    })
  }
  
  return client
}
