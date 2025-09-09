import {
  Bell,
  Calendar,
  Edit3,
  ExternalLink,
  Filter,
  HelpCircle,
  Mail,
  Plus,
  Search,
  Users,
  ClipboardList,
  Phone,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      {/* Sidebar */}
      <aside className="hidden sm:flex w-[60px] flex-col items-center py-4 gap-2 bg-[#152E4A] text-white">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-6">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        {[
          "M4 6h16M4 12h16M4 18h16",
          "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a7 7 0 0 1 14 0H4Z",
          "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8m-5 11H8a2 2 0 0 1-2-2V7",
          "M9 19v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6",
          "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16",
        ].map((d, i) => (
          <button
            key={i}
            className="w-10 h-10 rounded-md hover:bg-white/10 transition grid place-items-center"
            aria-label={`nav-${i}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path d={d} />
            </svg>
          </button>
        ))}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl w-full relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                aria-label="Search companies, contacts, and jobs"
                placeholder="Search By Name, Job, Email & LinkedIn URL"
                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
                <Calendar size={16} /> Book a Demo
              </button>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-9 h-9 rounded-md grid place-items-center">
                <Plus />
              </button>
              <button className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
                Upgrade Your Account
              </button>
              <div className="flex items-center gap-1">
                <IconButton ariaLabel="help">
                  <HelpCircle size={18} />
                </IconButton>
                <IconButton ariaLabel="mail">
                  <Mail size={18} />
                </IconButton>
                <IconButton ariaLabel="notifications">
                  <Bell size={18} />
                </IconButton>
                <div className="w-8 h-8 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 sm:p-6 space-y-6">
          {/* Company header card */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 text-white relative bg-gradient-to-br from-indigo-400 to-purple-600">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl grid place-items-center text-2xl bg-white/20 backdrop-blur">
                    📊
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold">Dunder Mifflin</h1>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-white/80">
                      <span>📍 San Francisco</span>
                      <span className="text-sm bg-white/10 px-3 py-1 rounded-full">ID: 1</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GhostButton ariaLabel="edit">
                    <Edit3 size={16} />
                  </GhostButton>
                  <GhostButton ariaLabel="external">
                    <ExternalLink size={16} />
                  </GhostButton>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Active Jobs", value: 4 },
                  { label: "Contacts", value: 1 },
                  { label: "Candidates", value: 1 },
                  { label: "Placements", value: 0 },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-2xl font-bold">{m.value}</div>
                    <div className="text-sm/relaxed opacity-90">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Tabs */}
            <div className="bg-slate-50 border-t border-slate-200">
              <div className="px-6 overflow-x-auto">
                <div className="flex items-center gap-1">
                  {[
                    ["overview", "🏢", "Overview"],
                    ["contacts", "👥", "Contacts (1)"],
                    ["jobs", "💼", "Jobs (4)"],
                    ["candidates", "👤", "Candidates"],
                    ["activities", "📋", "Activities"],
                    ["deals", "💰", "Deals"],
                  ].map(([id, icon, label]) => (
                    <div
                      key={id as string}
                      className={`px-5 py-3 text-sm font-semibold rounded-t-md whitespace-nowrap hover:bg-white ${
                        id === "overview"
                          ? "text-primary bg-white border-x border-t border-slate-200"
                          : "text-slate-500"
                      }`}
                    >
                      <span className="mr-2">{icon as string}</span>
                      {label as string}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main grid */}
          <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
            {/* Left column */}
            <section className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-base font-semibold">Company Overview</h2>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                    <Plus size={16} /> Quick Action
                  </button>
                  <button className="inline-flex items-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-600 px-4 py-2 rounded-md text-sm font-medium">
                    ⚡ Quick Actions
                  </button>
                </div>
              </div>

              {/* Overview content */}
              <div className="p-6 space-y-8">
                {/* Company info */}
                <section>
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Company Information</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { label: "Website", value: "recruitcrm.io", link: true },
                      { label: "Industry", value: "Business supplies and equipment" },
                      { label: "Address", value: "705 Parnassus Ave San Francisco" },
                      { label: "Company Size", value: "50-200 employees" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-4 rounded-lg border border-slate-200 bg-slate-50"
                      >
                        <div className="text-[11px] uppercase font-semibold text-slate-500 mb-2">
                          {item.label}
                        </div>
                        <div
                          className={`text-sm ${item.link ? "text-primary underline" : "text-slate-900"}`}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Recent contacts */}
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold">Recent Contacts</h3>
                    <button className="text-primary text-sm underline">View All</button>
                  </div>
                  <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-white grid place-items-center font-semibold">
                        VP
                      </div>
                      <div>
                        <div className="font-semibold">Veerababu Palepu</div>
                        <div className="text-sm text-slate-500">Last updated: Sep 8, 2025</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Jobs list (sample) */}
                <section className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 bg-white text-sm">
                      <Filter size={16} /> Filter Jobs (4)
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm">
                      <Users size={16} /> View All Candidates
                    </button>
                  </div>

                  <div className="p-6 rounded-xl border border-slate-200 hover:shadow-md transition">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl grid place-items-center text-xl bg-amber-400">💼</div>
                        <div>
                          <h4 className="text-lg font-semibold">Paper Sales Executive</h4>
                          <p className="text-sm text-slate-500">San Francisco • Full-time</p>
                          <div className="mt-2 flex items-center gap-3 flex-wrap">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                              Open
                            </span>
                            <span className="text-xs text-slate-500">Posted 5 days ago</span>
                          </div>
                        </div>
                      </div>
                      <IconButton ariaLabel="more">
                        <ClipboardList size={18} />
                      </IconButton>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[11px] uppercase font-semibold text-slate-500">Contact</div>
                        <div className="text-sm text-primary underline">Michael Scott</div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase font-semibold text-slate-500">Owner</div>
                        <div className="text-sm">Veerababu Palepu</div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-8">
                        <Stat value="1" label="In Pipeline" />
                        <Stat value="0" label="Placed" highlight />
                      </div>
                      <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold">
                        View Pipeline
                      </button>
                    </div>
                  </div>

                  <div className="text-center text-slate-500 py-6">That's all the jobs 😊</div>
                </section>
              </div>
            </section>

            {/* Right column */}
            <aside className="bg-white rounded-xl shadow-sm h-fit sticky top-6">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="text-base font-semibold mb-4">Recent Activity</h3>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {[
                    { id: "all", label: "All", active: true, count: 0 },
                    { id: "notes", label: "Notes", active: false, count: 0 },
                    { id: "calls", label: "Calls", active: false, count: 0 },
                    { id: "tasks", label: "Tasks", active: false, count: 0 },
                  ].map((f) => (
                    <button
                      key={f.id}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                        f.active
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {f.label} ({f.count})
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-md text-xs font-semibold">
                    <Phone size={14} /> Log Call
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white px-3 py-2 rounded-md text-xs font-semibold">
                    📝 Add Note
                  </button>
                </div>
              </div>
              <div className="px-6 py-4 border-b border-slate-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input
                    placeholder="Search activities..."
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div className="px-6 py-10 text-center grid place-items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-emerald-50 grid place-items-center text-3xl">📋</div>
                <div>
                  <h4 className="text-base font-semibold">No activities yet</h4>
                  <p className="text-sm text-slate-500">Start by logging a call or adding a note</p>
                </div>
              </div>
            </aside>
          </div>

          {/* Floating quick actions */}
          <button className="fixed right-6 bottom-6 sm:right-8 sm:bottom-8 inline-flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg shadow-primary/40 hover:shadow-xl hover:-translate-y-0.5 transition">
            ⚡ Quick Actions
            <span className="ml-1 w-5 h-5 rounded-full bg-rose-500 text-[11px] font-bold grid place-items-center">
              7
            </span>
          </button>
        </main>
      </div>
    </div>
  );
}

function IconButton({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) {
  return (
    <button
      aria-label={ariaLabel}
      className="w-8 h-8 rounded-md hover:bg-slate-100 grid place-items-center text-slate-700"
    >
      {children}
    </button>
  );
}

function GhostButton({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) {
  return (
    <button
      aria-label={ariaLabel}
      className="p-3 rounded-md bg-white/20 hover:bg-white/30 text-white backdrop-blur transition"
    >
      {children}
    </button>
  );
}

function Stat({ value, label, highlight }: { value: string | number; label: string; highlight?: boolean }) {
  return (
    <div className="text-center">
      <div className={`text-2xl font-bold ${highlight ? "text-emerald-500" : ""}`}>{value}</div>
      <div className="text-xs text-slate-500 font-medium">{label}</div>
    </div>
  );
}
