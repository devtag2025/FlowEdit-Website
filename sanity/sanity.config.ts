import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'

import {apiVersion, dataset, projectId} from './env'
import {schema} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Flowedit',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        initial: process.env.NEXT_PUBLIC_SANITY_PREVIEW_URL || 'https://flowedit.video',
        preview: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool({defaultApiVersion: apiVersion}),
    media(),
  ],
})

