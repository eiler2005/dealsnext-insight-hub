
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { RecommendationCard, RecommendationType } from "@/components/ai-recommendations/RecommendationCard";
import { RecommendationDetailSidebar } from "@/components/ai-recommendations/RecommendationDetailSidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Search } from "lucide-react";

type Recommendation = {
  id: string;
  type: RecommendationType;
  description: string;
  potential: string;
  date: string;
  status: "new" | "inprogress" | "done" | "ignored";
  detailsText: string;
  comment?: string;
  region?: string;
  segment?: string;
  history?: { date: string; event: string }[];
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "1",
    type: "Потенциал роста",
    description: "3 клиента готовы к допродажам",
    potential: "₽180 млн",
    date: "10.06.2025",
    status: "new",
    detailsText: "Клиенты: СибСтройХолдинг, ГТЛ, Альфа-Капитал.<br>Интересуются: факторинг, инвестиционные продукты. Рекомендовано связаться через менеджеров: Беляев, Козлова.",
    region: "Москва",
    segment: "Крупный бизнес",
    history: [
      { date: "28.05.2025", event: "Рост закупок, положительная динамика по счёту" },
      { date: "09.06.2025", event: "Согласован интерес на факторинг" }
    ]
  },
  {
    id: "2",
    type: "Риск оттока",
    description: "2 клиента снизили активность на 40%",
    potential: "-",
    date: "09.06.2025",
    status: "new",
    detailsText: "Клиенты: МеталИнвест, СеверТех. Снижение операций на 40% за май-июнь. Рекомендуется активировать спецпредложения и выяснить причины.",
    region: "Урал",
    segment: "Средний бизнес",
    history: [
      { date: "05.06.2025", event: "Снижение объёма платежей" },
      { date: "08.06.2025", event: "Перевод части оборота в сторонний банк" }
    ]
  },
  {
    id: "3",
    type: "Оптимизация",
    description: "Сократить SLA на 1.2 дня в сегменте МСБ",
    potential: "+16% вовремя",
    date: "08.06.2025",
    status: "done",
    detailsText: "За счёт перехода на цифровую выдачу сокращается средний SLA. Внедрение пилотировано в 3 регионах.",
    region: "Сибирь",
    segment: "МСБ",
    history: [
      { date: "23.05.2025", event: "Анализ SLA показал просрочки" },
      { date: "02.06.2025", event: "Внедрение цифровой выдачи" }
    ]
  },
  {
    id: "4",
    type: "Проблемные зоны",
    description: "Убыточность в ЮФО выросла на 15%",
    potential: "-₽42 млн",
    date: "07.06.2025",
    status: "inprogress",
    detailsText: "Зафиксирован значимый спад маржинальности по продукту 'Гарантии' в сегменте региона ЮФО. Необходима донастройка условий и анализ структуры сделок.",
    region: "ЮФО",
    segment: "Крупный бизнес",
    history: [
      { date: "30.05.2025", event: "Резкое падение показателя маржи" },
    ]
  },
];

const RECOMMENDATION_TYPES: RecommendationType[] = [
  "Потенциал роста",
  "Риск оттока",
  "Оптимизация",
  "Проблемные зоны"
];

const REGIONS = [
  "Все регионы",
  "Москва",
  "Урал",
  "Сибирь",
  "ЮФО"
];

const SEGMENTS = [
  "Все сегменты",
  "Крупный бизнес",
  "Средний бизнес",
  "МСБ"
];

const PERIODS = ["За неделю", "За месяц", "За квартал"];

const AiRecommendations = () => {
  const [selectedType, setSelectedType] = useState<string>("Все типы");
  const [selectedRegion, setSelectedRegion] = useState<string>("Все регионы");
  const [selectedSegment, setSelectedSegment] = useState<string>("Все сегменты");
  const [selectedPeriod, setSelectedPeriod] = useState<string>(PERIODS[0]);
  const [search, setSearch] = useState<string>("");
  const [showDetailId, setShowDetailId] = useState<string | null>(null);
  const [cards, setCards] = useState(RECOMMENDATIONS);

  // Найти по фильтрам и поиску
  const filteredCards = cards.filter((c) => {
    const matchType = selectedType === "Все типы" || c.type === selectedType;
    const matchRegion = selectedRegion === "Все регионы" || c.region === selectedRegion;
    const matchSegment = selectedSegment === "Все сегменты" || c.segment === selectedSegment;
    const matchSearch =
      !search ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      (c.potential && c.potential.toLowerCase().includes(search.toLowerCase()));
    return matchType && matchRegion && matchSegment && matchSearch;
  });

  const currentCard = showDetailId
    ? cards.find((c) => c.id === showDetailId) ?? null
    : null;

  // Обработчик изменения статуса
  const setStatus = (id: string, status: "done" | "inprogress" | "ignored") => {
    setCards((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status } : c
      )
    );
  };
  // Обработчик комментария
  const handleComment = (value: string) => {
    if (currentCard) {
      setCards((prev) =>
        prev.map((c) =>
          c.id === currentCard.id ? { ...c, comment: value } : c
        )
      );
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col px-4 md:px-8 py-4 gap-4">
        {/* Заголовок и фильтры */}
        <div className="flex flex-wrap gap-2 md:gap-4 items-center">
          <h1 className="font-bold text-2xl mr-2">🤖 AI-рекомендации</h1>

          <Select onValueChange={setSelectedType} defaultValue="Все типы">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Все типы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Все типы">Все типы</SelectItem>
              {RECOMMENDATION_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedPeriod} defaultValue={PERIODS[0]}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              {PERIODS.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedRegion} defaultValue="Все регионы">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Регион" />
            </SelectTrigger>
            <SelectContent>
              {REGIONS.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedSegment} defaultValue="Все сегменты">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Сегмент" />
            </SelectTrigger>
            <SelectContent>
              {SEGMENTS.map((segment) => (
                <SelectItem key={segment} value={segment}>
                  {segment}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="relative flex-1 max-w-sm ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по описанию или сумме..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Лента рекомендаций */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCards.length === 0 && (
            <div className="text-center col-span-full text-muted-foreground py-8">
              Нет рекомендаций с такими параметрами.
            </div>
          )}
          {filteredCards.map((c) => (
            <RecommendationCard
              key={c.id}
              type={c.type}
              description={c.description}
              potential={c.potential}
              date={c.date}
              status={c.status}
              onDetails={() => setShowDetailId(c.id)}
              onSetStatus={(st) => setStatus(c.id, st)}
            />
          ))}
        </div>
        {/* Детали */}
        <RecommendationDetailSidebar
          open={!!showDetailId}
          onClose={() => setShowDetailId(null)}
          data={
            showDetailId
              ? {
                  type: currentCard?.type || "",
                  description: currentCard?.description || "",
                  potential: currentCard?.potential || "",
                  date: currentCard?.date || "",
                  detailsText:
                    currentCard?.detailsText?.replace(/<br\s*\/?>/g, "\n") ||
                    "",
                  comment: currentCard?.comment,
                  history: currentCard?.history,
                }
              : null
          }
          onComment={handleComment}
        />
      </div>
    </>
  );
};

export default AiRecommendations;
