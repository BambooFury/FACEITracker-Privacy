import React from "react";
import { Link } from "wouter";
import { Cpu, ArrowLeft, Info, Globe, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Background Ambience - subtle gradients if needed, but keeping it clean for now per reference */}
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-primary/20 bg-primary/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-wide">FORECAST</span>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        {/* Back Button */}
        <div className="mb-12">
          <Button variant="outline" className="gap-2 border-white/10 bg-transparent hover:bg-white/5 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Button>
        </div>

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
          <CardContent className="p-8 md:p-12 space-y-8">
            
            {/* Section 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Info className="w-5 h-5" />
                <h2 className="text-xl font-bold">1. Обзор</h2>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Faceit Forecast</strong> — это расширение для браузера, которое предоставляет подробную статистику и аналитику для матчей и игроков FACEIT. Основные функции включают:
                </p>

                <ul className="space-y-3 pl-2">
                  {[
                    "Расширенные уровни Faceit с подробной разбивкой по elo",
                    "Расширенная статистика матчей и процент побед команд",
                    "Детальная статистика игроков, отображаемая на карточках пользователей",
                    "Конкретная статистика истории матчей (Счет, рейтинг HLTV 2.1, K/D, K/R, ADR)",
                    "Быстрый просмотр информации о матче без перехода по ссылкам",
                    "Автоматическая отправка сообщений при выборе карт"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
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

          </CardContent>
        </Card>
        
        {/* Footer Ambient Effect */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </main>
    </div>
  );
}
