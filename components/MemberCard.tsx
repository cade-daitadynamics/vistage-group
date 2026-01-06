"use client";

import { useState } from "react";
import Image from "next/image";
import { Member } from "@/lib/types";

interface MemberCardProps {
  member: Member;
}

// Generate initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Generate consistent color based on name
function getAvatarColor(name: string): string {
  const colors = [
    "bg-navy-900",
    "bg-teal-600",
    "bg-violet-600",
    "bg-rose-600",
    "bg-amber-600",
    "bg-emerald-600",
    "bg-blue-600",
    "bg-indigo-600",
    "bg-pink-600",
    "bg-cyan-600",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

// Generate headshot path from member name
function getHeadshotPath(name: string): string {
  return `/headshots/${name.toLowerCase().replace(" ", "-")}.jpeg`;
}

export default function MemberCard({ member }: MemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(member.name);
  const avatarColor = getAvatarColor(member.name);
  const headshotPath = getHeadshotPath(member.name);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg ${
        isExpanded ? "shadow-xl ring-navy-200" : ""
      }`}
    >
      {/* Collapsed view - always visible */}
      <div
        className="cursor-pointer p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
            {!imageError ? (
              <Image
                src={headshotPath}
                alt={member.name}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                sizes="64px"
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center ${avatarColor} text-xl font-bold text-white`}
              >
                {initials}
              </div>
            )}
          </div>

          {/* Basic info */}
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-navy-900">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-navy-700">{member.title}</p>
            <p className="text-sm text-gray-500">{member.company}</p>
          </div>

          {/* Expand indicator */}
          <button
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-gray-400 transition-all hover:bg-navy-100 hover:text-navy-600"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Tagline */}
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          {member.tagline}
        </p>

        {/* Quick action hint when collapsed */}
        {!isExpanded && (
          <p className="mt-3 text-xs font-medium text-navy-600 opacity-0 transition-opacity group-hover:opacity-100">
            Click to learn more
          </p>
        )}
      </div>

      {/* Expanded content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-slate-50/50 px-6 pb-6 pt-5">
          {/* What we do */}
          <div className="mb-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-800">
              What We Do
            </h4>
            <p className="text-sm leading-relaxed text-gray-600">
              {member.what_we_do}
            </p>
          </div>

          {/* Who we help */}
          <div className="mb-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-800">
              Who We Help
            </h4>
            <p className="text-sm leading-relaxed text-gray-600">
              {member.who_we_help}
            </p>
          </div>

          {/* Key services */}
          <div className="mb-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-800">
              Key Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.key_services.map((service, index) => (
                <span
                  key={index}
                  className="rounded-full bg-navy-100 px-3 py-1 text-xs font-medium text-navy-800"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Differentiator */}
          <div className="mb-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-800">
              Why Choose Us
            </h4>
            <p className="text-sm leading-relaxed text-gray-600">
              {member.differentiator}
            </p>
          </div>

          {/* Notable results */}
          <div className="mb-6">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-800">
              Notable Results
            </h4>
            <p className="text-sm leading-relaxed text-gray-600">
              {member.notable_results}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* CTA Button */}
            <a
              href={member.cta_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-800 hover:shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              {member.cta_text}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* LinkedIn link */}
            <a
              href={member.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            {/* Company website link */}
            <a
              href={member.company_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-navy-700"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Website
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
