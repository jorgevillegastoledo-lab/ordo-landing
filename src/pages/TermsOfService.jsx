import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, CheckCircle, AlertCircle, Shield, UserX, Clock, ChevronRight } from 'lucide-react'

function TermsOfService() {
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
      <section className="py-16 bg-gradient-to-br from-ordo-blue via-blue-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Términos de Servicio
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Condiciones de uso de OrdoApp
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
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-ordo-blue mr-3" />
              Introducción
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bienvenido a OrdoApp. Estos Términos de Servicio ("Términos") establecen las condiciones legales bajo las cuales puedes acceder y utilizar OrdoApp, una aplicación multitenant de gestión financiera personal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Al crear una cuenta y utilizar OrdoApp, aceptas estar sujeto a estos Términos. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.
            </p>
          </div>

          {/* Descripción del Servicio */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-ordo-green mr-3" />
              Descripción del Servicio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp es una aplicación web que te permite:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Gestionar gastos únicos y recurrentes</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Realizar seguimiento de suscripciones (Netflix, Spotify, etc.)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Controlar préstamos y sus cuotas</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Administrar información de tarjetas de crédito y sus vencimientos</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Visualizar tu liquidez mensual en un calendario integrado</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Recibir notificaciones automáticas por email sobre vencimientos</span>
              </li>
            </ul>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-ordo-green">
              <p className="text-gray-700 leading-relaxed">
                <strong>Importante:</strong> OrdoApp <strong>NO se conecta a tus cuentas bancarias</strong>. Toda la información financiera es ingresada manualmente por ti, lo que garantiza tu privacidad y control total sobre tus datos.
              </p>
            </div>
          </div>

          {/* Requisitos de Elegibilidad */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisitos de Elegibilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para utilizar OrdoApp, debes:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Tener al menos 18 años de edad o la mayoría de edad legal en tu jurisdicción</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Proporcionar información veraz, precisa y actualizada durante el registro</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>No haber sido previamente suspendido o eliminado de OrdoApp</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Cumplir con todas las leyes y regulaciones aplicables</span>
              </li>
            </ul>
          </div>

          {/* Creación de Cuenta y Seguridad */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 text-ordo-green mr-3" />
              Creación de Cuenta y Seguridad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al crear una cuenta en OrdoApp:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Eres responsable de mantener la confidencialidad de tu contraseña</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Eres responsable de todas las actividades que ocurran bajo tu cuenta</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>No puedes compartir tu cuenta con terceros ni transferir tu cuenta a otra persona</span>
              </li>
            </ul>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-ordo-green">
              <p className="text-gray-700 leading-relaxed">
                OrdoApp implementa medidas de seguridad robustas, incluyendo encriptación de datos sensibles. Sin embargo, ningún sistema es 100% seguro, por lo que también dependemos de tu diligencia para proteger tu cuenta.
              </p>
            </div>
          </div>

          {/* Uso Aceptable */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-ordo-blue mr-3" />
              Uso Aceptable del Servicio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Te comprometes a utilizar OrdoApp únicamente para fines legítimos y personales. <strong>Está prohibido:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Utilizar el servicio para actividades ilegales, fraudulentas o engañosas</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Intentar acceder a cuentas de otros usuarios o a áreas restringidas del sistema</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Realizar ingeniería inversa, descompilar o alterar el código de la aplicación</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Enviar spam, malware, virus o cualquier código malicioso</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Realizar ataques de denegación de servicio (DoS) o sobrecargar intencionalmente el sistema</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Copiar, modificar o distribuir contenido de OrdoApp sin autorización previa por escrito</span>
              </li>
            </ul>
          </div>

          {/* Arquitectura Multitenant */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Arquitectura Multitenant</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp utiliza una arquitectura multitenant, lo que significa que:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Múltiples organizaciones (usuarios) comparten la misma infraestructura de aplicación</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Los datos de cada organización están completamente aislados y segregados</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Ninguna organización puede acceder a los datos de otra organización</span>
              </li>
            </ul>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-ordo-green">
              <p className="text-gray-700 leading-relaxed">
                Esta arquitectura nos permite ofrecer un servicio eficiente y escalable mientras mantenemos la <strong>privacidad y seguridad absoluta</strong> de los datos de cada organización.
              </p>
            </div>
          </div>

          {/* Ingreso Manual de Datos */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingreso Manual de Datos Financieros</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp se diferencia de otras aplicaciones financieras porque:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>No solicitamos acceso a tus cuentas bancarias</strong></span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Toda la información financiera es <strong>ingresada manualmente</strong> por ti</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Tú decides qué información compartir y qué información mantener privada</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al ingresar información financiera en OrdoApp:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Garantizas que tienes el derecho de ingresar y almacenar dicha información</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Eres responsable de la exactitud y veracidad de la información ingresada</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>OrdoApp no verifica ni valida la información que ingresas</span>
              </li>
            </ul>
          </div>

          {/* Notificaciones por Email */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-ordo-green mr-3" />
              Sistema de Notificaciones por Email
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp incluye un sistema de notificaciones automáticas por email:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Las notificaciones se envían automáticamente entre las <strong>9:00 y 10:00 AM</strong> (hora del servidor)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Recibirás alertas sobre vencimientos de gastos, suscripciones, préstamos y tarjetas</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Puedes pausar notificaciones de suscripciones y notificaciones manuales</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Las alertas de gastos, préstamos y tarjetas no se pueden pausar (son recordatorios financieros importantes)</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Al utilizar OrdoApp, consientes en recibir estas notificaciones por email a la dirección proporcionada durante el registro.
            </p>
          </div>

          {/* Propiedad Intelectual */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo el contenido, diseño, funcionalidad, código fuente, gráficos, logos y marcas comerciales de OrdoApp son propiedad exclusiva de OrdoApp o sus licenciantes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Tus datos son tuyos:</strong> Retienes todos los derechos de propiedad sobre la información financiera que ingresas en OrdoApp. No reclamamos ningún derecho de propiedad sobre tus datos personales o financieros.
            </p>
          </div>

          {/* Terminación y Eliminación de Cuenta */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserX className="h-6 w-6 text-red-500 mr-3" />
              Terminación y Eliminación de Cuenta
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Terminación por tu Parte</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Puedes eliminar tu cuenta de OrdoApp en cualquier momento desde la configuración de la aplicación.
            </p>
            <div className="bg-red-50 rounded-lg p-6 mb-6 border-l-4 border-red-500">
              <h4 className="font-semibold text-gray-900 mb-3">Política de Eliminación Inmediata</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Cuando eliminas tu cuenta o desactivas tu organización:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Todos tus datos se eliminan permanentemente</strong> de nuestros servidores</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>No realizamos revisión previa</strong> de tus datos antes de la eliminación</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>La eliminación es <strong>irreversible</strong> - no podemos recuperar tus datos después de eliminarlos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Respetamos tu privacidad</strong> - tus datos financieros son personales y no los retenemos</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Terminación por Nuestra Parte</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos reservamos el derecho de suspender o eliminar tu cuenta si:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Violas estos Términos de Servicio</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Realizas actividades fraudulentas o ilegales</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Intentas comprometer la seguridad del sistema</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Tu cuenta permanece inactiva por un período prolongado (con notificación previa)</span>
              </li>
            </ul>
          </div>

          {/* Limitación de Responsabilidad */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-ordo-green mr-3" />
              Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OrdoApp se proporciona "tal cual" y "según disponibilidad". No garantizamos que:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>El servicio estará disponible de forma ininterrumpida o sin errores</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Los resultados obtenidos del uso de OrdoApp sean precisos o confiables</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Todos los defectos serán corregidos inmediatamente</span>
              </li>
            </ul>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Importante:</strong> OrdoApp es una herramienta de gestión financiera personal, <strong>no un asesor financiero</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No somos responsables de las decisiones financieras que tomes basándote en la información ingresada o visualizada en la aplicación. Te recomendamos consultar con un profesional financiero para decisiones importantes.
              </p>
            </div>
          </div>

          {/* Exención de Garantías */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exención de Garantías</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En la máxima medida permitida por la ley aplicable:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>OrdoApp no será responsable por pérdidas de datos, aunque implementamos medidas de seguridad robustas</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>No garantizamos que el servicio cumpla con tus requisitos específicos</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>No somos responsables de daños indirectos, incidentales o consecuentes</span>
              </li>
            </ul>
          </div>

          {/* Indemnización */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnización</h2>
            <p className="text-gray-700 leading-relaxed">
              Aceptas indemnizar y eximir de responsabilidad a OrdoApp, sus directores, empleados y afiliados de cualquier reclamo, pérdida, daño, responsabilidad o gasto (incluyendo honorarios legales) que surjan de:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mt-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Tu uso del servicio</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Tu violación de estos Términos</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-green mr-2 mt-0.5 flex-shrink-0" />
                <span>Tu violación de derechos de terceros</span>
              </li>
            </ul>
          </div>

          {/* Modificaciones al Servicio */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modificaciones al Servicio y Términos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos reservamos el derecho de:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-ordo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span>Actualizar estos Términos de Servicio periódicamente</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Te notificaremos de cambios significativos por email o mediante un aviso en la aplicación. El uso continuado del servicio después de dichos cambios constituye tu aceptación de los nuevos términos.
            </p>
          </div>

          {/* Ley Aplicable */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-green/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed">
              Estos Términos se rigen por las leyes de Chile. Cualquier disputa relacionada con estos Términos o el uso de OrdoApp estará sujeta a la jurisdicción exclusiva de los tribunales competentes de Chile.
            </p>
          </div>

          {/* Divisibilidad */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-ordo-blue/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Divisibilidad</h2>
            <p className="text-gray-700 leading-relaxed">
              Si alguna disposición de estos Términos se considera inválida o inaplicable, dicha disposición se eliminará o limitará en la medida mínima necesaria, y las disposiciones restantes de estos Términos continuarán en pleno vigor y efecto.
            </p>
          </div>

          {/* Contacto */}
          <div className="bg-gradient-to-br from-ordo-blue to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">¿Preguntas sobre estos Términos?</h2>
            <p className="mb-4 leading-relaxed">
              Si tienes preguntas o inquietudes sobre estos Términos de Servicio, contáctanos:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> legal@ordoapp.cl
            </p>
            <p className="mb-2">
              <strong>Soporte:</strong> soporte@ordoapp.cl
            </p>
            <p className="text-white/90 text-sm mt-6">
              Nos comprometemos a responder todas las consultas dentro de 48 horas hábiles.
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

export default TermsOfService
