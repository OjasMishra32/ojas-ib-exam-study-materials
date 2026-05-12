import { useState, useEffect } from "react";
import { createFileRoute, Link, useParams, useNavigate } from "@tanstack/react-router";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CentralIcon } from "@central-icons-react/all";
import { centralIconProps } from "@/lib/icon-props";
import type { Cheatsheet } from "@/types/cheatsheet";

export const Route = createFileRoute("/ib/cheatsheets/$id")({
  component: CheatsheetDetailPage,
});

function CheatsheetDetailPage() {
  const { id } = useParams({ strict: false });
  const navigate = useNavigate();
  const [cheatsheet, setCheatsheet] = useState<Cheatsheet | null>(null);
  const [allCheatsheets, setAllCheatsheets] = useState<Cheatsheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewScale, setPreviewScale] = useState(1);

  useEffect(() => {
    let cancelled = false;
    fetch("/cheatsheet_info.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((json: Cheatsheet[] | null) => {
        if (cancelled || !Array.isArray(json)) return;
        setAllCheatsheets(json);
        const found = json.find((c) => c.id === id) ?? null;
        setCheatsheet(found);
      })
      .catch(() => {
        if (!cancelled) setCheatsheet(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  useEffect(() => {
    if (!loading && !cheatsheet && id) {
      navigate({ to: "/ib/cheatsheets" });
    }
  }, [loading, cheatsheet, id, navigate]);

  const previewSrc = cheatsheet ? `/cheatsheets/${cheatsheet.thumbnailR2Key}` : "";

  const handleOpenPreview = () => {
    if (!cheatsheet) return;
    window.open(previewSrc, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="flex h-full min-h-0 w-full items-center justify-center">
        <p className="text-muted-foreground">Loading cheatsheet…</p>
      </div>
    );
  }

  if (!cheatsheet) {
    return null;
  }

  const currentIndex = allCheatsheets.findIndex((c) => c.id === id);
  const previousCheatsheet = currentIndex > 0 ? allCheatsheets[currentIndex - 1] : null;
  const nextCheatsheet =
    currentIndex >= 0 && currentIndex < allCheatsheets.length - 1
      ? allCheatsheets[currentIndex + 1]
      : null;

  return (
    <div className="flex h-full min-h-0 w-full flex-col lg:flex-row">
      <div className="flex min-h-0 flex-1 flex-col border-border lg:border-r">
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-border bg-muted/50 px-3 py-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setPreviewScale((scale) => Math.max(0.75, scale - 0.25))}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
              title="Zoom out"
            >
              <BiMinus className="size-4" aria-hidden />
            </button>
            <span className="min-w-[3rem] text-center text-sm font-medium text-foreground">
              {Math.round(previewScale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setPreviewScale((scale) => Math.min(2.5, scale + 0.25))}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
              title="Zoom in"
            >
              <BiPlus className="size-4" aria-hidden />
            </button>
          </div>
          <button
            type="button"
            onClick={handleOpenPreview}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
            title="Open preview"
          >
            <CentralIcon {...centralIconProps} name="IconArrowInbox" size={16} className="size-4" ariaHidden />
          </button>
        </div>
        <div className="h-full min-h-0 flex-1 overflow-auto bg-muted/30 p-4 sm:p-6">
          <div className="mx-auto w-fit rounded-lg border border-border bg-background p-3 shadow-sm">
            <img
              src={previewSrc}
              alt={`${cheatsheet.title} preview`}
              className="h-auto max-w-none select-none"
              style={{ width: `${827 * previewScale}px` }}
            />
          </div>
        </div>
      </div>

      <aside className="flex w-full shrink-0 flex-col border-t border-border bg-background lg:w-[360px] lg:max-w-[28rem] lg:border-t-0 lg:border-l">
        <div className="flex flex-col overflow-y-auto p-4 sm:p-6">
          <Link
            to="/ib/cheatsheets"
            className="mb-4 hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <HiChevronLeft className="size-5" aria-hidden />
            Back to Cheatsheets
          </Link>
          <h1 className="font-manrope text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
            {cheatsheet.title}
          </h1>
          <button
            type="button"
            onClick={handleOpenPreview}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-2 font-medium text-background ring-offset-background transition-all hover:bg-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            <CentralIcon {...centralIconProps} name="IconArrowInbox" size={24} className="size-6 opacity-60" ariaHidden />
            Open Preview
          </button>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Browse cheatsheets</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="min-w-0">
                {previousCheatsheet ? (
                  <Link
                    to="/ib/cheatsheets/$id"
                    params={{ id: previousCheatsheet.id }}
                    className="block h-full w-full"
                  >
                    <div className="flex h-full flex-col items-start gap-2 rounded-xl border-2 border-border p-4 text-left transition-colors hover:border-foreground/20 hover:bg-muted/50">
                      <div className="flex items-center gap-1">
                        <HiChevronLeft className="size-5 shrink-0 text-muted-foreground" aria-hidden />
                        <span className="font-medium text-foreground text-sm">Previous</span>
                      </div>
                      <p className="line-clamp-2 text-sm text-muted-foreground break-words">
                        {previousCheatsheet.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex h-full flex-col items-start gap-2 rounded-xl border-2 border-border bg-muted/30 p-4 text-left opacity-60">
                    <div className="flex items-center gap-1">
                      <HiChevronLeft className="size-5 shrink-0" aria-hidden />
                      <span className="font-medium text-sm">Previous</span>
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">No previous</p>
                  </div>
                )}
              </div>
              <div className="min-w-0">
                {nextCheatsheet ? (
                  <Link
                    to="/ib/cheatsheets/$id"
                    params={{ id: nextCheatsheet.id }}
                    className="block h-full w-full"
                  >
                    <div className="flex h-full flex-col items-end gap-2 rounded-xl border-2 border-border p-4 text-right transition-colors hover:border-foreground/20 hover:bg-muted/50">
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-foreground text-sm">Next</span>
                        <HiChevronRight className="size-5 shrink-0 text-muted-foreground" aria-hidden />
                      </div>
                      <p className="line-clamp-2 text-sm text-muted-foreground break-words">
                        {nextCheatsheet.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex h-full flex-col items-end gap-2 rounded-xl border-2 border-border bg-muted/30 p-4 text-right opacity-60">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm">Next</span>
                      <HiChevronRight className="size-5 shrink-0" aria-hidden />
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">No next</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
