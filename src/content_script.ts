const fileTypeRegExp = new RegExp("type=([^&=]+)");
const itemAreas = document.querySelectorAll("div.item-area");

itemAreas.forEach((itemArea) => {
    const titleElement = itemArea.querySelector("h3.title");
    const linkElements = itemArea.querySelectorAll("a.download_btn") as NodeListOf<HTMLAnchorElement>;
    const title = titleElement.textContent;

    linkElements.forEach((linkElement) => {
        const href = linkElement.protocol + "//" + linkElement.host + linkElement.pathname + linkElement.search + linkElement.hash;
        const fileTypeMatchResult = href.match(fileTypeRegExp);
        if (fileTypeMatchResult) {
            const extension = fileTypeMatchResult[1];
            linkElement.addEventListener("click", (ev) => {
                ev.preventDefault();
                chrome.runtime.sendMessage({data: "download", href: href, path: "OReilly EBooks/" + title + "." + extension});
            });
        }
    });
});
