import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin para agregar headers de seguridad
function securityHeadersPlugin() {
  return {
    name: 'security-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Content Security Policy - Previene XSS y inyección de código
        res.setHeader(
          'Content-Security-Policy',
          [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self' data:",
            "connect-src 'self' https://api.ordoapp.cl https://challenges.cloudflare.com",
            "frame-src https://challenges.cloudflare.com",
            "base-uri 'self'",
            "form-action 'self' https://api.ordoapp.cl",
            "frame-ancestors 'none'",
            "upgrade-insecure-requests"
          ].join('; ')
        )

        // Previene clickjacking
        res.setHeader('X-Frame-Options', 'DENY')

        // Previene MIME type sniffing
        res.setHeader('X-Content-Type-Options', 'nosniff')

        // XSS Protection para navegadores antiguos
        res.setHeader('X-XSS-Protection', '1; mode=block')

        // Política de referrer para proteger privacidad
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')

        // Permissions Policy - Limita acceso a APIs del navegador
        res.setHeader(
          'Permissions-Policy',
          'geolocation=(), microphone=(), camera=(), payment=()'
        )

        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        // Aplicar los mismos headers en preview
        res.setHeader(
          'Content-Security-Policy',
          [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self' data:",
            "connect-src 'self' https://api.ordoapp.cl https://challenges.cloudflare.com",
            "frame-src https://challenges.cloudflare.com",
            "base-uri 'self'",
            "form-action 'self' https://api.ordoapp.cl",
            "frame-ancestors 'none'",
            "upgrade-insecure-requests"
          ].join('; ')
        )
        res.setHeader('X-Frame-Options', 'DENY')
        res.setHeader('X-Content-Type-Options', 'nosniff')
        res.setHeader('X-XSS-Protection', '1; mode=block')
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
        res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=()')
        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), securityHeadersPlugin()],
})
