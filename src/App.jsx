/* ordoapp-landing\src\App.jsx */
import React from 'react'
import './App.css'
import { ArrowRight, Shield, Calendar, Bell, CreditCard, PiggyBank, Smartphone, CheckCircle, Lock, Eye, BarChart3 } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-ordo-blue">Ordo</span>
                <span className="text-ordo-green">App</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Características</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900">Beneficios</a>
              <a href="#privacy" className="text-gray-600 hover:text-gray-900">Privacidad</a>
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

      {/* Features Grid */}
      <section id="features" className="py-16 bg-gradient-to-b from-white via-blue-50 to-green-50">
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
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-ordo-green/20 hover:border-ordo-green hover:shadow-2xl hover:shadow-green-200 transition-all transform hover:-translate-y-2 group">
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
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-ordo-blue/20 hover:border-ordo-blue hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-2 group">
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
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-ordo-blue/20 hover:border-ordo-blue hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-2 group">
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

      {/* Privacy Section */}
      <section id="privacy" className="py-16 bg-gradient-to-br from-green-500 via-ordo-green to-emerald-600 relative overflow-hidden">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-ordo-blue">Ordo</span>
              <span className="text-ordo-green">App</span>
            </div>
            <p className="text-gray-400 mb-6">
              Sistema de gestión financiera personal
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 OrdoApp. Gestión financiera con privacidad.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App