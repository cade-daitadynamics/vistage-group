export default function Footer() {
  return (
    <footer className="bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* About Vistage */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              About Vistage
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Vistage is the world&apos;s largest executive coaching organization
              for small and midsize business leaders. Through peer advisory
              groups and one-on-one executive coaching, Vistage helps CEOs and
              business owners make better decisions, achieve better results, and
              become better leaders.
            </p>
            <a
              href="https://www.vistage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              Learn more about Vistage
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
          </div>

          {/* Event info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Thank you for joining us at our networking event. We hope
              you&apos;ve found valuable connections among our group members.
              Feel free to reach out to any of our members directly&mdash;we&apos;re
              here to help.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Denver Vistage Group. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              <span>Powered by Vistage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
