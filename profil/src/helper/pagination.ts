// src/helper/pagination.ts

export interface PaginationResult {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  start: number;
  end: number;
  pages: (number | null)[];
  firstHref: string | null;
  lastHref: string | null;
  nextHref: string | null;
  prevHref: string | null;
  linkFor: (page: number) => string;
}

export function getPagination(
  url: URL,
  totalItems: number,
  defaultPerPage = 10
): PaginationResult {
  const searchParams = new URLSearchParams(url.search);

  const perPageRaw = Number(searchParams.get("perPage") ?? defaultPerPage);
  const perPage =
    Number.isFinite(perPageRaw) && perPageRaw > 0 ? perPageRaw : defaultPerPage;

  const requestedPage = Number(searchParams.get("page") ?? "1");
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const page =
    Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * perPage;
  const end = Math.min(start + perPage, totalItems);

  const makeHref = (pageNum: number): string => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(pageNum));
    return `${url.pathname}?${params.toString()}`;
  };

  const firstHref = totalPages > 1 ? makeHref(1) : null;
  const lastHref = totalPages > 1 ? makeHref(totalPages) : null;
  const prevHref = currentPage > 1 ? makeHref(currentPage - 1) : null;
  const nextHref = currentPage < totalPages ? makeHref(currentPage + 1) : null;

  const pages: (number | null)[] = [];
  const maxVisiblePages = 5;
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    const half = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push(null);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push(null);
      pages.push(totalPages);
    }
  }

  return {
    page: currentPage,
    perPage,
    totalItems,
    totalPages,
    start,
    end,
    pages,
    firstHref,
    lastHref,
    nextHref,
    prevHref,
    linkFor: makeHref,
  };
}
