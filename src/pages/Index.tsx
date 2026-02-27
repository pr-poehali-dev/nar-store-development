import { useState } from "react";
import Icon from "@/components/ui/icon";


type Section = "home" | "about" | "contacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (section: Section) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0F0A08] text-white noise-bg">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0A08]/90 backdrop-blur-xl border-b border-[#FF6B1A]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => navigate("home")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 gradient-bg rounded-xl flex items-center justify-center font-display font-bold text-white text-lg animate-pulse-glow">
              Н
            </div>
            <span className="font-display font-bold text-xl tracking-wide gradient-text">НАР</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {(["home", "about", "contacts"] as Section[]).map((s) => (
              <button
                key={s}
                onClick={() => navigate(s)}
                className={`nav-link text-sm font-medium tracking-wide uppercase transition-colors ${
                  activeSection === s ? "text-[#FF6B1A] active" : "text-white/70 hover:text-white"
                }`}
              >
                {s === "home" ? "Главная" : s === "about" ? "О нас" : "Контакты"}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#1A1108] border-t border-[#FF6B1A]/10 px-4 py-4 flex flex-col gap-4 animate-fade-in-up">
            {(["home", "about", "contacts"] as Section[]).map((s) => (
              <button
                key={s}
                onClick={() => navigate(s)}
                className={`text-left font-medium uppercase tracking-wide text-sm ${
                  activeSection === s ? "text-[#FF6B1A]" : "text-white/70"
                }`}
              >
                {s === "home" ? "Главная" : s === "about" ? "О нас" : "Контакты"}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ===================== HOME ===================== */}
      {activeSection === "home" && (
        <main>
          <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
            <div className="absolute inset-0">
              <img
                src="https://cdn.poehali.dev/projects/13a72fad-03ab-41cb-8d95-780145dcef8b/files/df2bb5c8-7927-419a-851d-308949310133.jpg"
                alt="Магазин Нар"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A08] via-[#0F0A08]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A08] via-transparent to-transparent" />
            </div>

            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B1A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#E8293A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
                  <span className="w-2 h-2 bg-[#FF6B1A] rounded-full animate-pulse" />
                  <span className="text-[#FF6B1A] text-sm font-medium">Открыто сейчас</span>
                </div>

                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
                  <span className="gradient-text">НАР</span>
                  <br />
                  <span className="text-white">Магазин</span>
                  <br />
                  <span className="text-white/40">у дома</span>
                </h1>

                <p className="text-white/60 text-lg mb-8 leading-relaxed animate-fade-in-up delay-200">
                  Свежие продукты, широкий ассортимент и выгодные цены<br className="hidden sm:block" /> в мкр. Птицефабрика, Якутск
                </p>

                <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                  <button
                    onClick={() => navigate("about")}
                    className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-2xl hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#FF6B1A]/30"
                  >
                    О магазине
                  </button>
                  <button
                    onClick={() => navigate("contacts")}
                    className="border border-white/20 text-white/80 font-semibold px-8 py-3.5 rounded-2xl hover:bg-white/5 transition-all hover:border-[#FF6B1A]/50"
                  >
                    Как найти нас
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
              <Icon name="ChevronDown" size={24} />
            </div>
          </section>

          <section className="py-16 border-y border-[#FF6B1A]/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "500+", label: "Товаров" },
                  { value: "8:00", label: "Открытие" },
                  { value: "23:00", label: "Закрытие" },
                  { value: "7/7", label: "Дней в неделю" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-4xl font-bold shimmer-text mb-2">{stat.value}</div>
                    <div className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>



          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="relative gradient-bg rounded-3xl p-10 sm:p-16 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Ждём вас каждый день!</h2>
                  <p className="text-white/80 text-lg mb-8">мкр. Птицефабрика, 10А · г. Якутск · 8:00–23:00</p>
                  <button
                    onClick={() => navigate("contacts")}
                    className="bg-white text-[#FF6B1A] font-bold px-8 py-3.5 rounded-2xl hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
                  >
                    Смотреть на карте
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ===================== ABOUT ===================== */}
      {activeSection === "about" && (
        <main className="pt-24 pb-20 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-[#FF6B1A] text-sm uppercase tracking-widest font-medium mb-2">История</p>
            <h1 className="font-display text-5xl font-bold mb-16">О магазине</h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6 leading-tight">
                  Магазин <span className="gradient-text">«Нар»</span> — рядом когда нужно
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Мы работаем для жителей микрорайона Птицефабрика и всего Якутска. Наш магазин — это место, где можно найти всё необходимое: свежие продукты, молочные изделия, мясо и рыбу, бакалею и многое другое.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  Название «Нар» означает «гранат» — символ изобилия и щедрости. Именно так мы строим отношения с нашими покупателями — богато и по-настоящему.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Свежие продукты", "Честные цены", "Удобное расположение", "Каждый день"].map((tag) => (
                    <span key={tag} className="bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 text-[#FF6B1A] text-sm px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/13a72fad-03ab-41cb-8d95-780145dcef8b/files/d4f12d95-e08a-41c8-818c-6548ef95a1cf.jpg"
                    alt="Товары магазина"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 border border-[#FF6B1A]/20">
                  <div className="font-display text-3xl font-bold text-[#FF6B1A]">500+</div>
                  <div className="text-white/60 text-sm">наименований товаров</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { icon: "Leaf", title: "Свежесть", text: "Ежедневная поставка свежих продуктов прямо на прилавки" },
                { icon: "Heart", title: "Забота", text: "Внимательное отношение к каждому покупателю" },
                { icon: "Zap", title: "Удобство", text: "Широкий выбор рядом с домом без долгих поездок" },
              ].map((val, i) => (
                <div key={i} className="glass-card rounded-2xl p-7 card-hover">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-5">
                    <Icon name={val.icon} fallback="Star" size={22} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ===================== CONTACTS ===================== */}
      {activeSection === "contacts" && (
        <main className="pt-24 pb-20 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-[#FF6B1A] text-sm uppercase tracking-widest font-medium mb-2">Найти нас</p>
            <h1 className="font-display text-5xl font-bold mb-16">Контакты</h1>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-5">
                {[
                  { icon: "MapPin", title: "Адрес", lines: ["мкр. Птицефабрика, 10А", "г. Якутск, Республика Саха (Якутия)"] },
                  { icon: "Clock", title: "Режим работы", lines: ["Ежедневно: 8:00 — 23:00", "Без выходных и праздников"] },
                  { icon: "Phone", title: "Телефон", lines: ["+7 (962) 732-75-12", "+7 (996) 316-57-79"] },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 flex gap-5 card-hover">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Star" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-white/50 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}

                <a
                  href="https://yandex.ru/maps/?text=мкр.+Птицефабрика+10А+Якутск"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 gradient-bg text-white font-semibold px-6 py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] w-full justify-center shadow-lg shadow-[#FF6B1A]/30"
                >
                  <Icon name="Navigation" size={18} />
                  Открыть на Яндекс.Картах
                </a>
              </div>

              <div className="relative rounded-3xl overflow-hidden glass-card border border-[#FF6B1A]/20 min-h-80">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?text=мкр.+Птицефабрика+10А+Якутск&z=16"
                  className="w-full h-full min-h-80 opacity-80"
                  title="Карта"
                  style={{ border: 0 }}
                  allowFullScreen
                />
                <div className="absolute inset-0 border-2 border-[#FF6B1A]/20 rounded-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </main>
      )}

      {/* FOOTER */}
      <footer className="border-t border-[#FF6B1A]/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 gradient-bg rounded-lg flex items-center justify-center font-display font-bold text-white text-sm">Н</div>
            <span className="font-display font-bold gradient-text">НАР</span>
          </div>
          <p className="text-white/30 text-sm text-center">мкр. Птицефабрика, 10А · Якутск · 8:00–23:00</p>
          <p className="text-white/20 text-xs">© 2025 Магазин «Нар»</p>
        </div>
      </footer>
    </div>
  );
}