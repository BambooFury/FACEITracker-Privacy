import React, { useCallback } from "react";
import { Link } from "wouter";
import { Cpu, Info, Globe, Shield, Activity, HardDrive, UserCheck, ExternalLink, Mail, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

export default function PrivacyPage() {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // console.log(container);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 relative overflow-hidden">
      {/* Dynamic Background Particles */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute inset-0 z-0"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#ff6b00",
              },
              links: {
                color: "#ff6b00",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 60,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-primary/20 bg-primary/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-wide">FACEITracker</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Онлайн: 10189</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm font-medium border border-white/10 rounded-md px-3 py-1.5 cursor-pointer hover:bg-white/5 transition-colors">
              <span>Русский</span>
              <Globe className="w-4 h-4 opacity-50" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Политика конфиденциальности
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Последнее обновление: 15 октября 2025
          </p>
        </div>

        {/* Content Card */}
        <Card className="border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
          <CardContent className="p-8 md:p-12 space-y-12">
            
            {/* Section 1: Overview */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Info className="w-6 h-6" />
                <h2 className="text-2xl font-bold">1. Обзор</h2>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Faceit Forecast</strong> — это расширение для браузера, которое предоставляет подробную статистику и аналитику для матчей и игроков FACEIT. Основные функции включают:
                </p>

                <ul className="grid gap-3 pt-2">
                  {[
                    "Расширенные уровни Faceit с подробной разбивкой по elo",
                    "Расширенная статистика матчей и процент побед команд",
                    "Детальная статистика игроков, отображаемая на карточках пользователей",
                    "Конкретная статистика истории матчей (Счет, рейтинг HLTV 2.1, K/D, K/R, ADR)",
                    "Быстрый просмотр информации о матче без перехода по ссылкам",
                    "Автоматическая отправка сообщений при выборе карт"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <Zap className="w-4 h-4 text-primary/60 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="pt-2">
                  Данная политика объясняет, как расширение обрабатывает данные при предоставлении этих функций.
                </p>
              </div>

              {/* Key Point Box */}
              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <h3 className="text-primary font-bold mb-2 text-sm uppercase tracking-wider">Ключевой момент</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Данное расширение не собирает, не хранит и не обрабатывает никакой персональной информации, такой как имена, адреса электронной почты, история браузера, пароли или личные файлы.
                </p>
              </div>
            </div>

            <Separator className="bg-white/5" />

            {/* Section 2: Data Not Collected */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Shield className="w-6 h-6" />
                <h2 className="text-2xl font-bold">2. Данные, которые мы НЕ собираем</h2>
              </div>
              
              <ul className="space-y-3 pl-2 text-gray-300">
                  {[
                    "Персональную идентификационную информацию (имена, электронные адреса, номера телефонов)",
                    "Историю браузера или посещения веб-сайтов",
                    "Пароли или учетные данные для входа",
                    "Личные файлы или документы",
                    "Данные о местоположении, кроме автоматически включаемых в HTTP-запросы"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <X className="w-4 h-4 text-red-500/70 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>

             <Separator className="bg-white/5" />

            {/* Section 3: External Services */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 text-primary">
                <ExternalLink className="w-6 h-6" />
                <h2 className="text-2xl font-bold">3. Связь с внешними сервисами</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg bg-white/5 p-6 border border-white/5">
                   <h3 className="text-white font-semibold mb-3">3.1. Сервер аналитики разработчика</h3>
                   <div className="text-sm text-gray-400 space-y-2">
                     <p><span className="text-primary/70">Сервис:</span> api.fforecast.net</p>
                     <p><span className="text-primary/70">Цель:</span> Сервис для сбора и обработки анонимной аналитики, например для подсчёта количества активных пользователей и мониторинга онлайн</p>
                   </div>
                </div>

                <div className="rounded-lg bg-white/5 p-6 border border-white/5">
                   <h3 className="text-white font-semibold mb-3">3.2. Публичный API FACEIT</h3>
                   <div className="text-sm text-gray-400 space-y-2">
                     <p><span className="text-primary/70">Сервис:</span> open.faceit.com</p>
                     <p><span className="text-primary/70">Цель:</span> Доступ к публичной статистике матчей и игроков для анализа и отображения игровой информации</p>
                   </div>
                </div>
              </div>
            </div>

            <Separator className="bg-white/5" />

            {/* Section 4: Technical Info */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 text-primary">
                <Activity className="w-6 h-6" />
                <h2 className="text-2xl font-bold">4. Автоматическая техническая информация</h2>
              </div>
              <p className="text-gray-300">Как и во всех интернет-соединениях, HTTP-запросы могут автоматически включать стандартную техническую информацию, такую как:</p>
              <ul className="space-y-2 pl-4 list-disc text-gray-400 marker:text-primary/50">
                <li>IP-адрес (необходим для интернет-соединения)</li>
                <li>Строка user-agent браузера</li>
                <li>Базовые заголовки запросов</li>
              </ul>
              <div className="rounded-lg bg-white/5 p-4 text-sm text-gray-400 border border-white/5">
                <span className="text-primary font-semibold">Важно:</span> Эта техническая информация может временно сохраняться в логах сервера для технических целей и обеспечения надежности сервиса. Она не используется для идентификации пользователей и не передается третьим лицам.
              </div>
            </div>

            <Separator className="bg-white/5" />

             {/* Section 5: Local Storage */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 text-primary">
                <HardDrive className="w-6 h-6" />
                <h2 className="text-2xl font-bold">5. Локальное хранение данных</h2>
              </div>
              <p className="text-gray-300">Расширение может временно хранить данные локально в вашем браузере для оптимизации производительности, включая:</p>
               <ul className="space-y-2 pl-4 list-disc text-gray-400 marker:text-primary/50">
                <li>Кэшированная статистика FACEIT (временная, автоматически очищается)</li>
                <li>Настройки и предпочтения расширения</li>
              </ul>
              <p className="text-gray-300">Эти данные остаются на вашем устройстве и не передаются на внешние серверы.</p>
            </div>

            <Separator className="bg-white/5" />

             {/* Section 6: Your Rights */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 text-primary">
                <UserCheck className="w-6 h-6" />
                <h2 className="text-2xl font-bold">6. Ваши права и варианты выбора</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p><strong className="text-white">Удаление:</strong> Вы можете удалить расширение в любое время через страницу управления расширениями браузера</p>
                <p><strong className="text-white">Очистка данных:</strong> Удаление расширения удаляет все локально сохраненные данные</p>
                <p><strong className="text-white">Отказ:</strong> Просто удалите расширение, чтобы прекратить всю обработку данных</p>
              </div>
            </div>

            <Separator className="bg-white/5" />

             {/* Section 7: Third Party Services */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 text-primary">
                <Globe className="w-6 h-6" />
                <h2 className="text-2xl font-bold">7. Сторонние сервисы</h2>
              </div>
              <p className="text-gray-300">Это расширение использует публичный API FACEIT. Пожалуйста, ознакомьтесь с Политикой конфиденциальности FACEIT для получения информации об их методах обработки данных.</p>
              
               <div className="mt-4">
                 <h3 className="text-lg font-bold text-white mb-2">7.1. Реклама и партнёрские интеграции</h3>
                 <p className="text-gray-300">Расширение может отображать необязательные рекламные баннеры партнёров для поддержки разработки проекта. Эти баннеры не собирают никаких персональных данных, не отслеживают пользователей и могут быть отключены в любой момент через настройки расширения.</p>
               </div>
            </div>

             <Separator className="bg-white/5" />

            {/* Sections 8, 9, 10, 11 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Изменения в данной политике</h2>
                <p className="text-gray-300">Мы можем периодически обновлять данную политику конфиденциальности. Любые изменения будут отражены путем обновления даты "Последнее обновление" в верхней части страницы. Продолжение использования расширения после изменений означает принятие обновленной политики.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Правовая основа (для пользователей ЕС)</h2>
                <p className="text-gray-300">Для пользователей в Европейском Союзе наша правовая основа для обработки данных — законный интерес в предоставлении функциональности расширения и анонимном измерении статистики использования.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Безопасность данных</h2>
                <p className="text-gray-300">Хотя мы не собираем личные данные, мы применяем соответствующие технические меры для обеспечения безопасности любых передач данных и гарантируем, что расширение работает безопасно в рамках модели безопасности вашего браузера.</p>
              </div>
              
              <div className="rounded-xl bg-white/5 p-8 border border-white/5 text-center">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
                  <Mail className="w-6 h-6" />
                  11. Контактная информация
                </h2>
                <p className="text-gray-300 mb-4">Если у вас есть вопросы или замечания по поводу данной политики конфиденциальности:</p>
                <a href="mailto:forecast.extension@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">forecast.extension@gmail.com</a>
                <p className="text-sm text-gray-500 mt-4">Время ответа: Мы стремимся отвечать в течение 72 часов.</p>
              </div>
            </div>

          </CardContent>
        </Card>
        
        {/* Footer Ambient Effect */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </main>
    </div>
  );
}
