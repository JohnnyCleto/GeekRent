import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({

  plugins:[react()],

  server:{

    allowedHosts:[

      'natural-expression-production-2e65.up.railway.app'

    ]

  }

})
