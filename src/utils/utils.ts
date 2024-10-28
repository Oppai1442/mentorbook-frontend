export const changeTitle = (newTitle: string) => {
    document.title = newTitle;
};

export const changeIcon = (iconUrl: string) => {
    const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = iconUrl;

    if (!document.querySelector("link[rel*='icon']")) {
        document.head.appendChild(link);
    }
};

export const convertKeys = (obj: Record<string, any>, keyMap: Record<string, string>): Record<string, any> => {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = keyMap[key] || key;
        acc[newKey] = obj[key];
        return acc;
    }, {} as Record<string, any>);
};