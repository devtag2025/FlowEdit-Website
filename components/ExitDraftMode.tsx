'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function ExitDraftMode() {
  const pathname = usePathname()

  const handleExitDraftMode = () => {
    // Redirect to disable draft mode with current path as redirect
    const redirectTo = pathname || '/'
    window.location.href = `/api/draft-mode/disable?redirect=${encodeURIComponent(redirectTo)}`
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <Button
        onClick={handleExitDraftMode}
        variant="destructive"
        size="sm"
        className="shadow-lg hover:shadow-xl transition-shadow"
      >
        <X className="size-4" />
        Exit Draft Mode
      </Button>
    </div>
  )
}
