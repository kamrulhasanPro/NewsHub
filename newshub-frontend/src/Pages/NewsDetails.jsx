import React from "react";
import {
  FiCalendar,
  FiUser,
  FiGlobe,
  FiFlag,
  FiExternalLink,
  FiClock,
  FiTag,
  FiInfo,
} from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";

const NewsDetails = ({ article }) => {
//   if (!article) return null;

  const {
    title,
    description,
    content,
    link,
    image_url,
    creator,
    source_name,
    source_url,
    pubDate,
    fetched_at,
    language,
    country,
    category,
    datatype,
  } = article || {
"article_id": "c4424e60cef939dc801ff88df0582502",
"link": "https://www.sn.at/sport/fussball/zweite-liga/verzicht-auf-einspruch-klagenfurts-abstieg-ist-besiegelt-art-636745",
"title": "Verzicht auf Einspruch: Klagenfurts Abstieg ist besiegelt",
"description": "Fußball-Zweitligist Austria Klagenfurt wird das Anfang Februar eröffnete Insolvenzverfahren gegen den Club nicht beeinspruchen. Der Abstieg ist damit besiegelt. Wie die Kärntner am Freitag bekanntgaben, soll der Spiel- und Geschäftsbetrieb bis Saisonende aufrechterhalten werden, ehe man 2026/27 mit einem Antritt in der Regionalliga plant. Mittelfristiges Ziel sei die Rückkehr in den Profifußball, hieß es in einer Mitteilung.",
"content": "ONLY AVAILABLE IN PAID PLANS",
"keywords": null,
"creator": [
"salzburger nachrichten"
],
"language": "german",
"country": [
"austria"
],
"category": [
"sports"
],
"datatype": "news",
"pubDate": "2026-02-20 16:23:00",
"pubDateTZ": "UTC",
"fetched_at": "2026-02-20 16:40:40",
"image_url": "https://www.sn.at/storage/image/5/7/5/7/1077575_klagenfurt-wird-naechste-saison-in-der-regionalliga-spielen_structured-data-img_1FC8GW_Rtu8FK.jpg",
"video_url": null,
"source_id": "sn",
"source_name": "Salzburger Nachrichten",
"source_priority": 121342,
"source_url": "https://www.sn.at",
"source_icon": "https://n.bytvi.com/sn.png",
"sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
"sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
"ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
"ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
"ai_summary": "ONLY AVAILABLE IN PAID PLANS",
"duplicate": false
};

  const publishedDate = new Date(pubDate).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const fetchedDate = fetched_at
    ? new Date(fetched_at).toLocaleString()
    : null;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* HERO IMAGE */}
        {image_url && (
          <img
            src={image_url}
            alt={title}
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        )}

        {/* CATEGORY + TYPE */}
        <div className="flex flex-wrap gap-2">
          {category?.map((cat, i) => (
            <span
              key={i}
              className="flex items-center gap-1 bg-blue-900/40 text-blue-400 px-3 py-1 rounded-full text-xs"
            >
              <FiTag />
              {cat}
            </span>
          ))}

          {datatype && (
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs">
              {datatype}
            </span>
          )}
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {title}
        </h1>

        {/* META INFO */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-400">

          {source_name && (
            <div className="flex items-center gap-2">
              <HiOutlineNewspaper />
              <span>{source_name}</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <FiCalendar />
            <span>{publishedDate}</span>
          </div>

          {creator?.length > 0 && (
            <div className="flex items-center gap-2">
              <FiUser />
              <span>{creator.join(", ")}</span>
            </div>
          )}

          {language && (
            <div className="flex items-center gap-2">
              <FiGlobe />
              <span>{language}</span>
            </div>
          )}

          {country && (
            <div className="flex items-center gap-2">
              <FiFlag />
              <span>{country.join(", ")}</span>
            </div>
          )}
        </div>

        {/* DESCRIPTION / LEAD */}
        {description && (
          <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4">
            {description}
          </p>
        )}

        {/* MAIN CONTENT */}
        <div className="space-y-4 text-gray-400 leading-relaxed">
          {content && content !== "ONLY AVAILABLE IN PAID PLANS" ? (
            <p>{content}</p>
          ) : (
            <div className="flex items-start gap-2 text-gray-500 italic">
              <FiInfo className="mt-1" />
              <p>
                Full article content is not available on the free plan.
                Please read the complete article on the publisher’s website.
              </p>
            </div>
          )}
        </div>

        {/* EXTRA INFORMATION */}
        <div className="grid md:grid-cols-2 gap-6 bg-gray-900 border border-gray-800 rounded-xl p-6 text-sm text-gray-400">

          {source_url && (
            <div>
              <strong className="text-gray-300">Publisher Website</strong>
              <p>{source_url}</p>
            </div>
          )}

          {fetchedDate && (
            <div className="flex items-center gap-2">
              <FiClock />
              <span>Fetched at: {fetchedDate}</span>
            </div>
          )}
        </div>

        {/* READ FULL ARTICLE */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg font-medium"
        >
          Read Full Article on Source
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};

export default NewsDetails;