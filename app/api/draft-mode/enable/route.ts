import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { client } from '@/sanity/lib/client'

const token = process.env.SANITY_API_READ_TOKEN

export async function GET(request: Request) {
  if (!token) {
    return new Response('Missing SANITY_API_READ_TOKEN', { status: 401 })
  }

  // Create a client with token for validation
  const clientWithToken = client.withConfig({
    token,
    useCdn: false,
  })

  // Validate the preview URL secret
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url
  )

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  // Enable draft mode
  const draft = await draftMode()
  draft.enable()

  // Redirect to the preview URL
  redirect(redirectTo)
}
