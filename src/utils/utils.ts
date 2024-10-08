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