import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Database, UserX, Clock, ChevronRight } from 'lucide-react'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/">
                <img src="/ordoapp_logo.svg" alt="OrdoApp" className="h-10" />
              </Link>
            </div>
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
      <section className="py-16 bg-gradient-to-br from-ordo-green via-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Política de Privacidad
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Tu privacidad es nuestra prioridad absoluta
          </p>
          <p className="text-sm text-white/80 mt-4">
            Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 text-ordo-green mr-3" />
              Introducción
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp es una aplicación <strong>multitenant</strong> de gestión financiera personal que respeta profundamente la privacidad de sus usuarios. A diferencia de otras aplicaciones financieras, <strong>no solicitamos ni requerimos conexión a tus cuentas bancarias</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas OrdoApp.
            </p>
          </div>

          {/* Arquitectura Multitenant */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 text-ordo-blue mr-3" />
              Arquitectura Multitenant y Aislamiento de Datos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp utiliza una <strong>arquitectura multitenant</strong>, lo que significa que múltiples organizaciones utilizan la misma infraestructura de aplicación, pero sus datos están completamente separados y aislados.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-4 border-l-4 border-ordo-blue">
              <h3 className="font-semibold text-gray-900 mb-2">¿Qué significa esto para tu privacidad?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cada organización (usuario o empresa) tiene su propio espacio aislado de datos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ninguna organización puede acceder a los datos de otra organización</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Los datos financieros nunca se comparten entre diferentes organizaciones</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>El equipo de OrdoApp NO tiene acceso a los datos específicos de tu organización</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Información que Recopilamos */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 text-ordo-green mr-3" />
              Información que Recopilamos
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1. Información de Registro</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Para crear tu cuenta en OrdoApp, recopilamos:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Nombre de usuario</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Dirección de correo electrónico</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Contraseña (almacenada de forma encriptada)</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Nombre de la organización</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Información Financiera que Ingresas Manualmente</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Como usuario de OrdoApp, tú decides qué información financiera ingresar, que puede incluir:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Gastos únicos y recurrentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Suscripciones (Netflix, Spotify, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Préstamos y sus cuotas</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Información de tarjetas de crédito (nombre, últimos 4 dígitos, fecha de vencimiento)</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-green mr-2">•</span>
                <span>Eventos personales y notificaciones manuales</span>
              </li>
            </ul>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-ordo-green">
              <p className="text-gray-700 leading-relaxed">
                <strong>Importante:</strong> OrdoApp <strong>nunca solicita información completa de tarjetas</strong> (número completo, CVV) ni acceso a cuentas bancarias. Todo el ingreso de información es manual y controlado por ti.
              </p>
            </div>
          </div>

          {/* Encriptación de Datos */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 text-ordo-blue mr-3" />
              Encriptación y Seguridad de Datos
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Estado Actual de Encriptación</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Actualmente, las siguientes tablas de la base de datos están <strong>completamente encriptadas</strong>:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Lock className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Tabla de Usuarios:</strong> Información de autenticación y datos de perfil</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Tabla de Vales:</strong> Información relacionada con vales y beneficios</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expansión de Encriptación Próximamente</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estamos trabajando activamente para expandir la encriptación a <strong>todos los datos sensibles y personales</strong>, incluyendo:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Información de gastos y transacciones</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Datos de tarjetas de crédito (ya limitados a últimos 4 dígitos)</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Información de préstamos y suscripciones</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Eventos personales y notificaciones</span>
              </li>
            </ul>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-ordo-blue">
              <p className="text-gray-700 leading-relaxed">
                <strong>Compromiso:</strong> En los próximos meses, implementaremos encriptación end-to-end en todos los módulos que almacenan información financiera personal.
              </p>
            </div>
          </div>

          {/* Uso de la Información */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 text-ordo-green mr-3" />
              Cómo Usamos tu Información
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos la información recopilada únicamente para:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Proporcionar y mantener el servicio de OrdoApp</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Gestionar tu cuenta y organización</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Enviar notificaciones y recordatorios por email (entre 9-10 AM)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Mejorar y optimizar la funcionalidad de la aplicación</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Proporcionar soporte técnico cuando lo solicites</span>
              </li>
            </ul>
            <div className="bg-green-50 rounded-lg p-4 mt-6 border-l-4 border-ordo-green">
              <p className="text-gray-700 leading-relaxed">
                <strong>Nunca vendemos, alquilamos o compartimos tu información personal con terceros</strong> para fines de marketing o publicitarios.
              </p>
            </div>
          </div>

          {/* Eliminación de Datos */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserX className="h-6 w-6 text-red-500 mr-3" />
              Eliminación de Datos al Desactivar tu Cuenta
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En OrdoApp, respetamos tu derecho a la privacidad incluso después de que decidas dejar de usar la aplicación.
            </p>
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3">Política de Eliminación Automática</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando un administrador de una organización decide eliminar su cuenta o desactivar la organización:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Todos los datos de la organización se eliminan inmediatamente</strong> de nuestros servidores</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>No realizamos ninguna revisión previa</strong> de los datos antes de eliminarlos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>No conservamos copias</strong> de tus datos financieros después de la eliminación</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>La eliminación es <strong>permanente e irreversible</strong></span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Razón:</strong> Tus datos financieros son personales y privados. No necesitamos ni queremos retenerlos una vez que decides abandonar OrdoApp.
              </p>
            </div>
          </div>

          {/* No Acceso del Equipo */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 text-ordo-green mr-3" />
              El Equipo de OrdoApp NO Accede a tus Datos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Una de nuestras promesas fundamentales de privacidad:
            </p>
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-ordo-green">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>El equipo de desarrollo y administración de OrdoApp <strong>NO tiene acceso</strong> a los datos específicos de tu organización</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>No revisamos, analizamos ni monitoreamos tu información financiera personal</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Solo accedemos a datos agregados y anónimos para mejorar el rendimiento de la aplicación</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>En caso de soporte técnico, solo accedemos con tu permiso explícito y de forma limitada</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cookies y Tecnologías de Seguimiento */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies y Tecnologías de Seguimiento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp utiliza cookies y tecnologías similares únicamente para:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <span className="text-ordo-blue mr-2">•</span>
                <span>Mantener tu sesión iniciada de forma segura</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-blue mr-2">•</span>
                <span>Recordar tus preferencias de interfaz</span>
              </li>
              <li className="flex items-start">
                <span className="text-ordo-blue mr-2">•</span>
                <span>Proporcionar seguridad contra ataques (CSRF, XSS)</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>No utilizamos cookies de terceros para publicidad o seguimiento</strong> fuera de la aplicación.
            </p>
          </div>

          {/* Compartir Información con Terceros */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compartir Información con Terceros</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp <strong>no comparte tu información personal</strong> con terceros, excepto en los siguientes casos limitados:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Proveedores de servicios esenciales:</strong> Servicios de hosting, envío de emails (notificaciones), que operan bajo estrictos acuerdos de confidencialidad</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Requerimientos legales:</strong> Solo si estamos obligados por ley o para proteger nuestros derechos legales</span>
              </li>
            </ul>
          </div>

          {/* Tus Derechos */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tus Derechos de Privacidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Como usuario de OrdoApp, tienes los siguientes derechos:
            </p>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Acceso:</strong> Puedes acceder y descargar toda tu información en cualquier momento desde la aplicación</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Rectificación:</strong> Puedes editar y actualizar tu información cuando lo desees</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Eliminación:</strong> Puedes eliminar tu cuenta y todos tus datos en cualquier momento</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Portabilidad:</strong> Puedes exportar tus datos en formatos estándar</span>
              </li>
            </ul>
          </div>

          {/* Cambios a la Política */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cambios a esta Política de Privacidad</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos de cualquier cambio significativo por email o mediante un aviso destacado en la aplicación. Te recomendamos revisar esta política periódicamente.
            </p>
          </div>

          {/* Contacto */}
          <div className="bg-gradient-to-br from-ordo-green to-green-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">¿Preguntas sobre tu Privacidad?</h2>
            <p className="mb-4 leading-relaxed">
              Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el manejo de tus datos personales, no dudes en contactarnos.
            </p>
            <p className="mb-2">
              <strong>Email:</strong> privacidad@ordoapp.cl
            </p>
            <p className="text-white/90 text-sm mt-6">
              Nos comprometemos a responder todas las consultas de privacidad dentro de 48 horas hábiles.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img src="/ordoapp_logo.svg" alt="OrdoApp" className="h-8" />
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <Link to="/terminos-servicio" className="hover:text-white transition-colors">
                Términos de Servicio
              </Link>
              <Link to="/politica-privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2025 OrdoApp. Gestión financiera con privacidad.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
