import React from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Link } from "react-router";

const NewsCard = ({ article }) => {
  const {
    title,
    description,
    image_url,
    source_name,
    pubDate,
    category,
    article_id,
  } = article || {
    article_id: "c4424e60cef939dc801ff88df0582502",
    link: "https://www.sn.at/sport/fussball/zweite-liga/verzicht-auf-einspruch-klagenfurts-abstieg-ist-besiegelt-art-636745",
    title: "Verzicht auf Einspruch: Klagenfurts Abstieg ist besiegelt",
    description:
      "Fußball-Zweitligist Austria Klagenfurt wird das Anfang Februar eröffnete Insolvenzverfahren gegen den Club nicht beeinspruchen. Der Abstieg ist damit besiegelt. Wie die Kärntner am Freitag bekanntgaben, soll der Spiel- und Geschäftsbetrieb bis Saisonende aufrechterhalten werden, ehe man 2026/27 mit einem Antritt in der Regionalliga plant. Mittelfristiges Ziel sei die Rückkehr in den Profifußball, hieß es in einer Mitteilung.",
    content: "ONLY AVAILABLE IN PAID PLANS",
    keywords: null,
    creator: ["salzburger nachrichten"],
    language: "german",
    country: ["austria"],
    category: ["sports"],
    datatype: "news",
    pubDate: "2026-02-20 16:23:00",
    pubDateTZ: "UTC",
    fetched_at: "2026-02-20 16:40:40",
    image_url:
      "https://www.sn.at/storage/image/5/7/5/7/1077575_klagenfurt-wird-naechste-saison-in-der-regionalliga-spielen_structured-data-img_1FC8GW_Rtu8FK.jpg",
    video_url: null,
    source_id: "sn",
    source_name: "Salzburger Nachrichten",
    source_priority: 121342,
    source_url: "https://www.sn.at",
    source_icon: "https://n.bytvi.com/sn.png",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_summary: "ONLY AVAILABLE IN PAID PLANS",
    duplicate: false,
  };

  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition duration-300 group">
      {/* Image */}
      {image_url && (
        <Link to={`/news/${article_id}`}>
          <img
            src={image_url}
            alt={title}
            className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>
      )}

      <div className="p-4 space-y-3">
        {/* Category (only first one) */}
        {category?.[0] && (
          <span className="text-xs bg-blue-900/40 text-blue-400 px-2 py-1 rounded-full">
            {category[0]}
          </span>
        )}

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-100 line-clamp-2 group-hover:text-blue-400 transition">
          <Link to={`/news/${article_id}`}>{title}</Link>
        </h2>

        {/* Short Description */}
        {description && (
          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-800">
          <div className="flex items-center gap-3">
            {source_name && (
              <span className="flex items-center gap-1">
                <HiOutlineNewspaper />
                {source_name}
              </span>
            )}

            <span className="flex items-center gap-1">
              <FiCalendar />
              {formattedDate}
            </span>
          </div>

          <FiArrowRight className="group-hover:translate-x-1 transition" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
