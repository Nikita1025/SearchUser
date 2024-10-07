export function getQueryParams(params:OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([param, value]) => {
        if (value) {
            searchParams.set(param, value);
        } else {
            searchParams.set(param, '');
        }
    });
    return `?${searchParams.toString()}`;
}

export function addQueryParams(params:OptionalRecord<string, string>) {
    return window.history.pushState(null, '', getQueryParams(params));
}
