import { redirect } from 'next/navigation'

export default function VerifyPage({
  searchParams,
}: {
  searchParams: { code?: string }
}) {
  if (searchParams?.code) {
    redirect(`/api/verify?code=${searchParams.code}`)
  }

  redirect('/error')
}
