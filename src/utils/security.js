/**
 * Utilidades de seguridad para prevenir XSS y validar inputs
 */

/**
 * Sanitiza texto para prevenir XSS
 * Convierte caracteres peligrosos en entidades HTML
 */
export function sanitizeText(text) {
  if (!text || typeof text !== 'string') return ''

  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Valida formato de email
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false

  // Regex estándar para validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Validaciones adicionales
  if (email.length > 254) return false // Longitud máxima según RFC
  if (email.includes('..')) return false // Evitar puntos consecutivos

  return emailRegex.test(email)
}

/**
 * Valida que un texto no contenga scripts o HTML peligroso
 */
export function containsDangerousContent(text) {
  if (!text || typeof text !== 'string') return false

  // Patrones peligrosos comunes
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick, onerror, etc
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ]

  return dangerousPatterns.some(pattern => pattern.test(text))
}

/**
 * Sanitiza y valida nombre de usuario
 */
export function sanitizeName(name) {
  if (!name || typeof name !== 'string') return ''

  // Remover caracteres peligrosos pero mantener letras, números, espacios y acentos
  const cleaned = name
    .trim()
    .replace(/[<>'"]/g, '') // Remover caracteres HTML peligrosos
    .slice(0, 100) // Limitar longitud

  return cleaned
}

/**
 * Sanitiza texto de uso planificado
 */
export function sanitizeUsageText(text) {
  if (!text || typeof text !== 'string') return ''

  // Remover caracteres peligrosos
  const cleaned = text
    .trim()
    .replace(/[<>'"]/g, '')
    .slice(0, 500) // Limitar longitud

  return cleaned
}

/**
 * Valida todos los campos del formulario
 */
export function validateFormData(formData) {
  const errors = []

  // Validar email
  if (!formData.email) {
    errors.push('El email es requerido')
  } else if (!isValidEmail(formData.email)) {
    errors.push('El email no es válido')
  }

  // Validar nombre
  if (!formData.nombre || formData.nombre.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres')
  } else if (containsDangerousContent(formData.nombre)) {
    errors.push('El nombre contiene caracteres no permitidos')
  }

  // Validar uso planificado (opcional, pero si se completa debe tener al menos 10 caracteres)
  if (formData.comoUsaras && formData.comoUsaras.trim().length > 0) {
    if (formData.comoUsaras.trim().length < 10) {
      errors.push('La descripción debe tener al menos 10 caracteres')
    } else if (containsDangerousContent(formData.comoUsaras)) {
      errors.push('La descripción contiene caracteres no permitidos')
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
