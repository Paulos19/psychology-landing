"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Star, 
  Clock, 
  HelpCircle, 
  Smile, 
  Sparkles,
  Paperclip,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

export default function PsychologyLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState("all");

  const categories = [
    {
      title: "Основы психологии",
      coursesCount: "6 курсов",
      icon: "❓",
      rotate: "-rotate-2",
      badgeColor: "bg-amber-100 text-amber-800",
      description: "Фундаментальные теории, этика и базовые приемы консультирования"
    },
    {
      title: "Детская психология",
      coursesCount: "3 курса",
      icon: "🧸",
      rotate: "rotate-2",
      badgeColor: "bg-pink-100 text-pink-800",
      description: "Возрастные кризисы, диагностика и помощь родителям"
    },
    {
      title: "Травмы и расстройства",
      coursesCount: "2 курса",
      icon: "🪴",
      rotate: "-rotate-1",
      badgeColor: "bg-emerald-100 text-emerald-800",
      description: "Работа с ПТСР, тревожностью и паническими атаками"
    },
    {
      title: "Сексология",
      coursesCount: "1 курс",
      icon: "⚧️",
      rotate: "rotate-3",
      badgeColor: "bg-purple-100 text-purple-800",
      description: "Психологические аспекты близости и гармония отношений"
    }
  ];

  const courses = [
    {
      id: 1,
      badge: "Бесплатный",
      badgeType: "free",
      format: "Онлайн",
      category: "для начинающих",
      categoryColor: "bg-[#e0f2fe] text-[#0369a1]",
      title: "Введение в профессию психолога: первые шаги",
      description: "Разберитесь в направлениях психотерапии, определите свои сильные стороны и составьте пошаговый план перехода в профессию.",
      rating: "4.9",
      reviews: "1,240",
      theory: "8 часов",
      practice: "4 часа",
      speaker: {
        name: "Елена Соколова",
        role: "Кандидат психологических наук",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
      },
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      badge: "Хит продаж 🔥",
      badgeType: "hit",
      format: "Онлайн",
      category: "гештальт",
      categoryColor: "bg-[#fce7f3] text-[#be185d]",
      title: "Гештальт-терапия: контакт, осознанность и тело",
      description: "Практический интенсив с супервизией, реальными кейсами и отработкой техник закрытия гештальтов в тройках.",
      rating: "5.0",
      reviews: "890",
      theory: "42 часа",
      practice: "38 часов",
      speaker: {
        name: "Максим Громов",
        role: "Практикующий гештальт-терапевт",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
      },
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      badge: "Продвинутый",
      badgeType: "pro",
      format: "Онлайн",
      category: "для практикующих",
      categoryColor: "bg-[#fef9c3] text-[#854d0e]",
      title: "Когнитивно-поведенческая терапия тревоги и депрессии",
      description: "Золотой стандарт доказательной психотерапии: протоколы Бека, сократический диалог и когнитивная реструктуризация.",
      rating: "4.95",
      reviews: "640",
      theory: "56 часов",
      practice: "60 часов",
      speaker: {
        name: "Анна Данилова",
        role: "КПТ-терапевт, супервизор АКПП",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
      },
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2b7fff] text-slate-900 px-3 py-4 md:px-8 md:py-8 font-sans selection:bg-[#bef264]">
      {/* Outer wrapper replicating the card canvas in reference design */}
      <div className="max-w-7xl mx-auto bg-[#f8fafc] rounded-[36px] md:rounded-[54px] shadow-2xl overflow-hidden border border-white/40">
        
        {/* Top bar with hashtags & signature */}
        <div className="flex items-center justify-between px-6 md:px-12 pt-6 pb-2 text-xs md:text-sm font-semibold tracking-wider text-slate-500">
          <div className="flex gap-4">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">#лендинг</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">#психология</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="lowercase font-bold tracking-tight text-slate-700">vlada remizova</span>
          </div>
        </div>

        {/* Navigation Bar */}
        <header className="px-6 md:px-12 py-4">
          <div className="bg-white/80 backdrop-blur-md rounded-full px-4 md:px-6 py-3 border border-slate-200/80 shadow-sm flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-900 text-white px-3.5 py-1.5 rounded-full font-bold text-sm tracking-wide shadow-sm">
                <span className="text-base">😊</span>
                <span className="bg-[#bef264] text-black text-[10px] px-1.5 py-0.5 rounded font-black tracking-widest uppercase">ТУТ</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight hidden sm:inline text-slate-900">
                Psycho<span className="text-[#2b7fff]">Lab</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-7 text-xs md:text-sm font-medium text-slate-600">
              <a href="#courses" className="hover:text-blue-600 transition-colors font-semibold text-slate-900">Курсы</a>
              <a href="#speakers" className="hover:text-blue-600 transition-colors">Спикеры</a>
              <a href="#methodology" className="hover:text-blue-600 transition-colors">Как проходит обучение</a>
              <a href="#cases" className="hover:text-blue-600 transition-colors">Кейсы учеников</a>
              <a href="#contacts" className="hover:text-blue-600 transition-colors">Контакты</a>
            </nav>

            {/* CTA Login Button */}
            <div className="flex items-center gap-3">
              <button className="bg-slate-900 hover:bg-black text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-sm">
                Войти
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-700"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 bg-white rounded-3xl p-5 border border-slate-200 shadow-xl flex flex-col gap-3 text-sm font-medium">
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Курсы</a>
              <a href="#speakers" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Спикеры</a>
              <a href="#methodology" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Как проходит обучение</a>
              <a href="#cases" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Кейсы учеников</a>
              <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="py-2">Контакты</a>
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="px-6 md:px-12 pt-6 pb-14 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#bef264] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles size={14} className="text-black" />
                Старт нового потока — 15 мая
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.06] text-slate-950">
                Онлайн-обучение <br />
                <span className="text-[#2b7fff] inline-block">по психологии</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Main Action Button */}
                <a 
                  href="#courses"
                  className="inline-flex items-center justify-between gap-6 bg-slate-950 hover:bg-slate-900 text-white pl-8 pr-3 py-3 rounded-full text-base font-bold shadow-lg shadow-blue-900/10 transition-all hover:gap-8 group"
                >
                  <span>Выбрать курс</span>
                  <span className="w-10 h-10 rounded-full bg-[#2b7fff] flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </span>
                </a>

                {/* Free Access Pill / Promo Box */}
                <div className="bg-[#bef264]/90 border border-black/10 rounded-3xl p-4 flex items-center gap-3.5 max-w-sm">
                  <div className="w-9 h-9 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 font-black text-lg">
                    7
                  </div>
                  <p className="text-xs font-bold leading-snug text-slate-900">
                    Получите бесплатный семидневный доступ к обучающей платформе
                  </p>
                </div>
              </div>

              {/* Trust stats pill */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#2b7fff]" />
                  <span>Диплом установленного образца</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#2b7fff]" />
                  <span>Практика с реальными клиентами</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#2b7fff]" />
                  <span>Супервизия опытных наставников</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              {/* Organic blob background */}
              <div className="relative w-full max-w-[420px] aspect-square rounded-[60px] bg-gradient-to-tr from-[#bef264] to-[#a3e635] p-3 shadow-xl transform rotate-1">
                
                {/* Embedded hero photo of happy students */}
                <div className="w-full h-full rounded-[50px] overflow-hidden relative border-4 border-white shadow-inner bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80" 
                    alt="Ученики психологической школы" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating sticker badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center gap-3 border border-slate-100">
                    <span className="text-2xl">🌿</span>
                    <div>
                      <div className="text-xs font-black text-slate-900">12 400+</div>
                      <div className="text-[10px] text-slate-500 font-bold">выпускников по всему миру</div>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Character Avatar Bubble */}
                <div className="absolute -top-6 -right-6 bg-[#2b7fff] text-white p-4 rounded-3xl shadow-xl border-4 border-white animate-subtle-bounce flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center text-xl font-bold shadow-inner">
                    💙
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-black leading-tight">Поддержка 24/7</div>
                    <div className="text-[9px] text-blue-100 font-semibold">Личный куратор</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* STUDY DIRECTIONS SECTION (Направления обучения) */}
        <section className="bg-[#2b7fff] text-white px-6 md:px-12 py-16 md:py-20 relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-600/40 blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
                  Специализации
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  Направления обучения
                </h2>
              </div>
              <p className="text-blue-100 text-sm md:text-base max-w-md font-medium">
                Выберите направление в зависимости от ваших целей: для глубокого самопознания или профессиональной частной практики.
              </p>
            </div>

            {/* Direction Cards with paperclip effect and slight angles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {categories.map((cat, idx) => (
                <div 
                  key={idx}
                  className={`bg-white text-slate-900 rounded-[32px] p-6 shadow-xl border border-white/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:rotate-0 relative ${cat.rotate}`}
                >
                  {/* Paperclip graphic simulation */}
                  <div className="absolute -top-3 left-8 text-slate-400 transform -rotate-12">
                    <Paperclip size={24} className="stroke-[2.5]" />
                  </div>

                  <div className="pt-2 flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl shadow-inner">
                      {cat.icon}
                    </div>
                    <span className="bg-slate-900 text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                      {cat.coursesCount}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950 tracking-tight leading-snug">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500 font-medium leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2b7fff] group-hover:underline flex items-center gap-1 cursor-pointer">
                      Смотреть курсы <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES CATALOG SECTION (Курсы) */}
        <section id="courses" className="px-6 md:px-12 py-16 md:py-24 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            
            {/* Catalog Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950">
                  Курсы
                </h2>
                <p className="text-slate-500 text-sm mt-1 font-medium">
                  Актуальные программы с подтвержденной эффективностью и поддержкой наставников
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-sm transition-colors">
                  <span>+ Все курсы (12)</span>
                </button>
              </div>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-[36px] overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Course Card Media & Tags */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                      {/* Top floating pill badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className={`text-[11px] font-black px-3 py-1 rounded-full shadow-sm ${
                          course.badgeType === "free" ? "bg-[#bef264] text-black" :
                          course.badgeType === "hit" ? "bg-amber-400 text-black" :
                          "bg-slate-900 text-white"
                        }`}>
                          {course.badge}
                        </span>
                        <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                          {course.format}
                        </span>
                      </div>

                      {/* Bottom category tag */}
                      <div className="absolute bottom-3 left-4">
                        <span className={`text-[11px] font-black px-3 py-1 rounded-full ${course.categoryColor}`}>
                          #{course.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 md:p-7 space-y-4">
                      {/* Rating & reviews */}
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star size={15} fill="currentColor" />
                          <span className="font-bold text-slate-900">{course.rating}</span>
                          <span className="text-slate-400">({course.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock size={14} />
                          <span>{course.theory} теории</span>
                        </div>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-lg md:text-xl font-black text-slate-950 leading-snug group-hover:text-[#2b7fff] transition-colors">
                        {course.title}
                      </h3>

                      {/* Course Description */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Theory vs Practice indicators */}
                      <div className="bg-slate-50 rounded-2xl p-3 grid grid-cols-2 gap-2 text-[11px] font-bold border border-slate-100">
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Теория</span>
                          <span className="text-slate-800">{course.theory}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Практика</span>
                          <span className="text-[#2b7fff]">{course.practice}</span>
                        </div>
                      </div>

                      {/* Speaker info */}
                      <div className="pt-2 flex items-center gap-3">
                        <img 
                          src={course.speaker.avatar} 
                          alt={course.speaker.name} 
                          className="w-10 h-10 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-900 leading-tight">{course.speaker.name}</div>
                          <div className="text-[10px] text-slate-500">{course.speaker.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 md:p-7 pt-0">
                    <button className="w-full bg-[#2b7fff] hover:bg-blue-600 text-white py-3.5 px-6 rounded-full font-bold text-xs md:text-sm shadow-md transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                      <span>Подробнее</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-6 md:px-12 py-8 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-3">
              <span className="text-white font-extrabold tracking-tight">PsychoLab</span>
              <span>•</span>
              <span>Дизайн UI/UX: @remizovaweb</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#terms" className="hover:text-white transition-colors">Оферта</a>
              <span className="text-slate-500">2025</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
