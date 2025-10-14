/* ordoapp-landing\src\App.jsx */
import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { ArrowRight, Shield, Calendar, Bell, CreditCard, PiggyBank, Smartphone, CheckCircle, Lock, Eye, BarChart3, TrendingUp, Users, Clock, ChevronDown, Mail, Zap, Target, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Turnstile } from '@marsidev/react-turnstile'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [isVisible, setIsVisible] = useState({})
  const [activeSlide, setActiveSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [formData, setFormData] = useState({ nombre: '', email: '', comoUsaras: '' })
  const [formStatus, setFormStatus] = useState({ loading: false, message: '', type: '' })
  const [turnstileToken, setTurnstileToken] = useState(null)
  const turnstileRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const screenshots = [
    {
      src: '/screenshots/dashboard.png',
      title: 'Dashboard Principal',
      description: 'Control total de tu liquidez mensual',
      color: 'from-ordo-blue to-blue-600'
    },
    {
      src: '/screenshots/gastos.png',
      title: 'Gestión de Gastos',
      description: 'Control de gastos únicos y recurrentes',
      color: 'from-ordo-green to-green-600'
    },
    {
      src: '/screenshots/suscripciones.png',
      title: 'Suscripciones',
      description: 'Seguimiento inteligente de suscripciones',
      color: 'from-ordo-blue to-blue-600'
    },
    {
      src: '/screenshots/tarjetas.png',
      title: 'Tarjetas de Crédito',
      description: 'Facturación automática y control de consumos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      src: '/screenshots/calendario.png',
      title: 'Calendario Integrado',
      description: 'Visualización unificada de eventos financieros',
      color: 'from-orange-500 to-red-500'
    },
    {
      src: '/screenshots/programacion_notificaciones.png',
      title: 'Alertas Automáticas',
      description: 'Sistema de notificaciones inteligentes',
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  const openLightbox = (screenshot) => {
    setLightboxImage(screenshot)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
    document.body.style.overflow = 'unset'
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSolicitud = async (e) => {
    e.preventDefault()
    setFormStatus({ loading: true, message: '', type: '' })

    // Validar Turnstile
    if (!turnstileToken) {
      setFormStatus({
        loading: false,
        message: 'Por favor, completa la verificación de seguridad.',
        type: 'error'
      })
      return
    }

    try {
      const response = await fetch('https://devapi.ordoapp.cl/public/request-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          nombre_sugerido: formData.nombre,
          uso_planificado: formData.comoUsaras,
          turnstile_token: turnstileToken
        })
      })

      const data = await response.json()

      // Manejar respuesta según el código de estado HTTP
      if (response.ok && data.ok) {
        setFormStatus({
          loading: false,
          message: '¡Solicitud enviada exitosamente!\n\nTu solicitud de acceso ha sido recibida y está en revisión. Te enviaremos un email con las instrucciones de acceso una vez sea aprobada.\n\nTiempo estimado: 24-48 horas.',
          type: 'success'
        })
        setFormData({ nombre: '', email: '', comoUsaras: '' })
        setTurnstileToken(null)
        turnstileRef.current?.reset()
      } else {
        // Mostrar mensaje específico del backend (priorizar detail, message o error)
        let errorMessage = data.detail || data.message || data.error || 'Hubo un error al enviar tu solicitud.'

        setFormStatus({
          loading: false,
          message: errorMessage,
          type: 'error'
        })
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error)
      setFormStatus({
        loading: false,
        message: 'Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.',
        type: 'error'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/ordoapp_logo.svg" alt="OrdoApp" className="h-10" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Características</a>
              <a href="#screenshots" className="text-gray-600 hover:text-gray-900 transition-colors">Screenshots</a>
              <a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacidad</a>
            </nav>
            <a 
              href="https://app.ordoapp.cl" 
              className="bg-ordo-green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              Acceder a la App
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-500 via-ordo-blue to-ordo-green relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Controla tu <span className="text-yellow-300 animate-pulse">liquidez</span> mensual
              <br />
              sin conectar tus <span className="text-green-300">cuentas</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Sistema completo de gestión financiera personal que respeta tu privacidad.
              Gestiona gastos, suscripciones, préstamos y tarjetas con alertas automáticas inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://app.ordoapp.cl"
                className="bg-white text-ordo-blue px-8 py-4 rounded-lg hover:bg-yellow-300 hover:text-blue-900 transition-all font-semibold text-lg flex items-center group shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-sm text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ Sin registro de cuentas bancarias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" data-animate className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 transform hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-10 w-10 text-ordo-green" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Privado</div>
              <div className="text-sm text-gray-500 mt-1">Sin conexión bancaria</div>
            </div>
            <div className="p-6 transform hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-ordo-blue" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Módulos</div>
              <div className="text-sm text-gray-500 mt-1">Sistema completo</div>
            </div>
            <div className="p-6 transform hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <Bell className="h-10 w-10 text-ordo-green" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Alertas</div>
              <div className="text-sm text-gray-500 mt-1">Automáticas</div>
            </div>
            <div className="p-6 transform hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-10 w-10 text-ordo-blue" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5 min</div>
              <div className="text-gray-600 font-medium">Setup</div>
              <div className="text-sm text-gray-500 mt-1">Configuración rápida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" data-animate className="py-16 bg-gradient-to-b from-white via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Módulos completos para gestionar cada aspecto de tus finanzas personales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gestión de Gastos */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-ordo-green/20 hover:border-ordo-green hover:shadow-2xl hover:shadow-green-200 transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-ordo-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                ESENCIAL
              </div>
              <div className="w-12 h-12 bg-ordo-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PiggyBank className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestión de Gastos</h3>
              <p className="text-gray-600 mb-4">
                Control de gastos únicos y recurrentes. Vinculación a tarjetas con cuotas y alertas automáticas.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Gastos únicos o recurrentes</li>
                <li>• Vinculación a tarjetas de crédito</li>
                <li>• Marcar como pagado/no pagado</li>
              </ul>
            </div>

            {/* Suscripciones */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-ordo-blue/20 hover:border-ordo-blue hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                POPULAR
              </div>
              <div className="w-12 h-12 bg-ordo-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Suscripciones Inteligentes</h3>
              <p className="text-gray-600 mb-4">
                Seguimiento de Netflix, Spotify, Microsoft 365. Renovación automática y alertas escalonadas.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Anuales: 7 alertas (30, 15, 7, 5, 3, 1, 0 días)</li>
                <li>• Mensuales: 5 alertas (7, 5, 3, 1, 0 días)</li>
                <li>• Renovación automática</li>
              </ul>
            </div>

            {/* Préstamos */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-ordo-green/20 hover:border-ordo-green hover:shadow-2xl hover:shadow-green-200 transition-all transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-ordo-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Control de Préstamos</h3>
              <p className="text-gray-600 mb-4">
                Gestión completa de préstamos bancarios con control automático de cuotas y cálculo de saldos.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Control de cuotas y pagos</li>
                <li>• Cálculo automático de saldos</li>
                <li>• Alertas de vencimiento</li>
              </ul>
            </div>

            {/* Tarjetas */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-ordo-blue/20 hover:border-ordo-blue hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-ordo-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tarjetas de Crédito</h3>
              <p className="text-gray-600 mb-4">
                Facturación mensual automática, control de consumos y alertas de cierre.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Facturación mensual automática</li>
                <li>• Control de consumos por mes</li>
                <li>• Alertas de cierre de facturación</li>
              </ul>
            </div>

            {/* Calendario */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-ordo-green/20 hover:border-ordo-green hover:shadow-2xl hover:shadow-green-200 transition-all transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-ordo-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calendario Integrado</h3>
              <p className="text-gray-600 mb-4">
                Visualización unificada de eventos financieros con vistas múltiples y alertas integradas.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Vistas: Mes, Semana, Día, Lista</li>
                <li>• Integración con alertas automáticas</li>
                <li>• Eventos personales y financieros</li>
              </ul>
            </div>

            {/* Sistema de Notificaciones */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-ordo-blue/20 hover:border-ordo-blue hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                AUTOMÁTICO
              </div>
              <div className="w-12 h-12 bg-ordo-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Notificaciones Avanzadas</h3>
              <p className="text-gray-600 mb-4">
                Sistema complejo de alertas por email con horarios configurados y estados inteligentes.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Envío automático a las 10:00 AM</li>
                <li>• Estados: pendiente, enviado, pausado</li>
                <li>• Renovaciones automáticas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="screenshots" data-animate className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ordo-blue/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ordo-green/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ve OrdoApp en acción
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una interfaz intuitiva y moderna diseñada para gestionar tus finanzas de forma simple
            </p>
          </div>

          {/* 3D Carousel */}
          <div className="relative perspective-carousel" style={{perspective: '2000px'}}>
            <div className="relative h-[600px] flex items-center justify-center">
              {screenshots.map((screenshot, index) => {
                const offset = index - activeSlide
                const absOffset = Math.abs(offset)

                return (
                  <div
                    key={index}
                    className="absolute w-full max-w-4xl transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `
                        translateX(${offset * 35}%)
                        translateZ(${-absOffset * 300}px)
                        rotateY(${offset * -25}deg)
                        scale(${1 - absOffset * 0.2})
                      `,
                      opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                      zIndex: 10 - absOffset,
                      pointerEvents: absOffset === 0 ? 'auto' : 'none'
                    }}
                    onClick={() => absOffset === 0 && openLightbox(screenshot)}
                  >
                    <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br ${screenshot.color} hover:scale-105 transition-transform duration-300`}>
                      <div className="aspect-video">
                        <img
                          src={screenshot.src}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {absOffset === 0 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 animate-fadeIn">
                          <h3 className="text-3xl font-bold text-white mb-2">{screenshot.title}</h3>
                          <p className="text-white/90 text-lg">{screenshot.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
              aria-label="Captura anterior"
            >
              <ChevronLeft className="h-8 w-8 text-ordo-blue group-hover:text-ordo-green transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
              aria-label="Siguiente captura"
            >
              <ChevronRight className="h-8 w-8 text-ordo-blue group-hover:text-ordo-green transition-colors" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeSlide
                      ? 'w-12 h-3 bg-ordo-blue'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a captura ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Below Carousel */}
          <div className="text-center mt-16">
            <a
              href="https://app.ordoapp.cl"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-ordo-blue to-blue-600 text-white px-8 py-4 rounded-xl hover:from-ordo-green hover:to-green-600 transition-all font-semibold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-110"
            >
              <Smartphone className="h-5 w-5" />
              Acceder a OrdoApp
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" data-animate className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona OrdoApp?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En solo 3 pasos simples, tendrás el control total de tus finanzas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-ordo-blue via-ordo-green to-ordo-blue opacity-20" style={{zIndex: 0}}></div>

            {/* Step 1 */}
            <div className="relative text-center group" style={{zIndex: 1}}>
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute w-24 h-24 bg-ordo-blue/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-ordo-blue to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                  1
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 shadow-lg group-hover:shadow-2xl group-hover:border-ordo-blue transition-all">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-ordo-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ingresa tus datos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Añade tus gastos, suscripciones, préstamos y tarjetas de forma manual y segura
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative text-center group" style={{zIndex: 1}}>
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute w-24 h-24 bg-ordo-green/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-ordo-green to-green-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                  2
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 shadow-lg group-hover:shadow-2xl group-hover:border-ordo-green transition-all">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-ordo-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Configura alertas</h3>
                <p className="text-gray-600 leading-relaxed">
                  El sistema genera automáticamente alertas inteligentes para cada vencimiento
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative text-center group" style={{zIndex: 1}}>
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute w-24 h-24 bg-ordo-blue/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-ordo-blue to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                  3
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 shadow-lg group-hover:shadow-2xl group-hover:border-ordo-blue transition-all">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-ordo-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gestiona con confianza</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recibe notificaciones y mantén el control total de tu liquidez mensual
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" data-animate className="py-16 bg-gradient-to-br from-green-500 via-ordo-green to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Tu privacidad es nuestra prioridad
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
              OrdoApp no requiere conexión a tus cuentas bancarias. Mantienes el control total de tu información financiera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lock className="h-6 w-6 text-ordo-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sin Conexión Bancaria</h3>
              <p className="text-white/80">
                No requiere API bancaria ni acceso a tus cuentas. Tu información permanece privada.
              </p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="h-6 w-6 text-ordo-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Control Manual</h3>
              <p className="text-white/80">
                Tú decides qué información ingresar y cuándo. Control completo sobre tus datos.
              </p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-6 w-6 text-ordo-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Datos Seguros</h3>
              <p className="text-white/80">
                Información almacenada de forma segura sin exponer credenciales bancarias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-animate className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas saber sobre OrdoApp
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-ordo-blue transition-all">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  ¿Por qué OrdoApp no se conecta a mis cuentas bancarias?
                </span>
                <ChevronDown className={`h-5 w-5 text-ordo-blue transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                  Creemos en tu privacidad. No necesitamos acceso a tus cuentas bancarias porque toda la información la ingresas tú manualmente. Esto significa que tus credenciales bancarias nunca están en riesgo y tienes control total sobre qué información compartes.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-ordo-green transition-all">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-green-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  ¿Cómo funcionan las alertas automáticas?
                </span>
                <ChevronDown className={`h-5 w-5 text-ordo-green transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                  Una vez que ingresas tus gastos, suscripciones o préstamos, OrdoApp genera automáticamente un calendario de alertas. Las alertas se envían por email a las 10:00 AM con anticipación según el tipo de evento (7, 5, 3, 1 días antes, etc.). El sistema se renueva automáticamente cada mes.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-ordo-blue transition-all">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  ¿Puedo usar OrdoApp en mi teléfono móvil?
                </span>
                <ChevronDown className={`h-5 w-5 text-ordo-blue transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                  Actualmente, OrdoApp es una aplicación web responsive que funciona en cualquier navegador móvil (computador, tablet o smartphone). Además, estamos desarrollando una aplicación nativa para Android que próximamente estará disponible, ofreciendo una experiencia optimizada para dispositivos móviles.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-ordo-green transition-all">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-green-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  ¿Qué pasa si quiero pausar las notificaciones?
                </span>
                <ChevronDown className={`h-5 w-5 text-ordo-green transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                  Puedes pausar las notificaciones en cualquier momento desde la configuración de cada gasto, suscripción o préstamo. Las alertas quedarán en estado "pausado" hasta que decidas reactivarlas.
                </div>
              )}
            </div>

            {/* FAQ Item 5 - Commented out during development */}
            {/*
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-ordo-blue transition-all">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  ¿Es gratuito?
                </span>
                <ChevronDown className={`h-5 w-5 text-ordo-blue transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                  OrdoApp ofrece acceso completo a todas sus funcionalidades. Consulta en la aplicación para conocer las opciones disponibles y cualquier detalle sobre planes actuales.
                </div>
              )}
            </div>
            */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-ordo-blue to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Comienza a gestionar tus finanzas hoy
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow">
            Sistema completo de gestión financiera que respeta tu privacidad
          </p>
          <a
            href="https://app.ordoapp.cl"
            className="bg-white text-ordo-blue px-8 py-4 rounded-lg hover:bg-yellow-300 hover:text-blue-900 transition-all font-semibold text-lg inline-flex items-center group shadow-2xl hover:shadow-3xl transform hover:scale-110"
          >
            Acceder a OrdoApp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Access Request Form Section */}
      <section id="solicitar-acceso" data-animate className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-ordo-green/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ordo-blue/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicitar Acceso a OrdoApp
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y te contactaremos pronto
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
            <form onSubmit={handleSolicitud} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ordo-blue focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ordo-blue focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="comoUsaras" className="block text-sm font-semibold text-gray-900 mb-2">
                  ¿Cómo planeas usar OrdoApp?
                </label>
                <textarea
                  id="comoUsaras"
                  name="comoUsaras"
                  value={formData.comoUsaras}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tu interés en OrdoApp..."
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ordo-blue focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none text-gray-900"
                />
              </div>

              {/* Cloudflare Turnstile CAPTCHA */}
              <div className="flex justify-center">
                <Turnstile
                  ref={turnstileRef}
                  siteKey="0x4AAAAAAB4vc2jXJFg8m_I3"
                  onSuccess={(token) => setTurnstileToken(token)}
                  onError={() => setTurnstileToken(null)}
                  onExpire={() => setTurnstileToken(null)}
                  options={{
                    theme: "light",
                    size: "normal",
                    language: "es"
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.loading}
                className="w-full bg-gradient-to-r from-ordo-blue to-blue-600 text-white px-8 py-4 rounded-xl hover:from-ordo-green hover:to-green-600 transition-all font-semibold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {formStatus.loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    Enviar Solicitud
                  </>
                )}
              </button>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-50 border-2 border-green-200 text-green-800'
                      : 'bg-red-50 border-2 border-red-200 text-red-800'
                  } animate-fadeIn`}
                >
                  <p className="font-medium text-center whitespace-pre-line">{formStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Temporarily disabled until email domain is ready */}
      {/*
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-ordo-blue to-blue-600 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
            </div>
            <div className="relative z-10 text-center">
              <Mail className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Mantente informado
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Recibe actualizaciones sobre nuevas funcionalidades y consejos para gestionar mejor tus finanzas
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                />
                <button className="bg-white text-ordo-blue px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Suscribirme
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Sin spam. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <img src="/ordoapp_logo.svg" alt="OrdoApp" className="h-10" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Sistema completo de gestión financiera personal que respeta tu privacidad.
                Controla gastos, suscripciones, préstamos y tarjetas sin conectar tus cuentas bancarias.
              </p>
              <div className="flex gap-4">
                <a href="https://app.ordoapp.cl" className="bg-ordo-green hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-medium inline-flex items-center">
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Producto</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Recursos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://app.ordoapp.cl" className="text-gray-400 hover:text-white transition-colors">
                    Acceder a la App
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">
                    Soporte
                  </span>
                </li>
                <li>
                  <span className="text-gray-400">
                    Documentación
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 OrdoApp. Gestión financiera con privacidad.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Términos de servicio
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Política de privacidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all group"
            aria-label="Cerrar imagen"
          >
            <X className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <div className="max-w-7xl max-h-[90vh] mx-auto px-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{lightboxImage.title}</h3>
                <p className="text-white/80 text-lg">{lightboxImage.description}</p>
                <p className="text-white/60 text-sm mt-4">Haz clic fuera de la imagen para cerrar</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App