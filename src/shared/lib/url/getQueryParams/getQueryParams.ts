export function getQueryParam(param: string) {
    const searchParams = new URLSearchParams(window.location.search.slice(1));

    return searchParams.get(param);
}
