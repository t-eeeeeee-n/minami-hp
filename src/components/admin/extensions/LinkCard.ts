import { Node, mergeAttributes } from "@tiptap/core";
import { DOMOutputSpec } from "@tiptap/pm/model";

export interface LinkCardOptions {
  HTMLAttributes: Record<string, unknown>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    linkCard: {
      setLinkCard: (options: {
        url: string;
        title: string;
        description?: string;
        image?: string;
        favicon?: string;
        siteName?: string;
      }) => ReturnType;
    };
  }
}

export const LinkCard = Node.create<LinkCardOptions>({
  name: "linkCard",

  group: "block",

  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      url: {
        default: null,
      },
      title: {
        default: null,
      },
      description: {
        default: null,
      },
      image: {
        default: null,
      },
      favicon: {
        default: null,
      },
      siteName: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[class="link-card"]',
        getAttrs: (dom) => {
          const element = dom as HTMLElement;
          const url = element.getAttribute("data-url") || "";
          const titleEl = element.querySelector(".link-card-title");
          const descEl = element.querySelector(".link-card-description");
          const imgEl = element.querySelector(".link-card-image img") as HTMLImageElement | null;
          const faviconEl = element.querySelector(".link-card-favicon") as HTMLImageElement | null;
          const siteEl = element.querySelector(".link-card-site");

          return {
            url,
            title: titleEl?.textContent || "",
            description: descEl?.textContent || "",
            image: imgEl?.src || null,
            favicon: faviconEl?.src || null,
            siteName: siteEl?.textContent || null,
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const { url, title, description, image, favicon, siteName } = HTMLAttributes;

    let hostname = "";
    try {
      hostname = new URL(url as string).hostname.replace("www.", "");
    } catch {
      hostname = url as string;
    }

    // Build inner children - image first (left side)
    const innerChildren: DOMOutputSpec[] = [];

    if (image) {
      innerChildren.push([
        "div",
        { class: "link-card-image" },
        ["img", { src: image, alt: title || "" }],
      ]);
    }

    // Build content children
    const contentChildren: DOMOutputSpec[] = [
      ["div", { class: "link-card-title" }, title || ""],
    ];

    if (description) {
      contentChildren.push(["div", { class: "link-card-description" }, description]);
    }

    // Meta with favicon, site name, and external link icon
    const metaChildren: DOMOutputSpec[] = [];
    if (favicon) {
      metaChildren.push(["img", { src: favicon, alt: "", class: "link-card-favicon" }]);
    }
    metaChildren.push(["span", { class: "link-card-site" }, siteName || hostname]);
    // SVG external link icon
    metaChildren.push([
      "svg",
      {
        class: "link-card-external-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
      },
      ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" }],
    ]);

    contentChildren.push(["div", { class: "link-card-meta" }, ...metaChildren]);

    innerChildren.push(["div", { class: "link-card-content" }, ...contentChildren]);

    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, {
        class: "link-card",
        "data-url": url,
      }),
      [
        "a",
        {
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "link-card-inner",
        },
        ...innerChildren,
      ],
    ];
  },

  addCommands() {
    return {
      setLinkCard:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  // カスタムNodeViewでレンダリング
  addNodeView() {
    return ({ node }) => {
      const { url, title, description, image, favicon, siteName } = node.attrs;

      let hostname = "";
      try {
        hostname = new URL(url as string).hostname.replace("www.", "");
      } catch {
        hostname = url as string;
      }

      const dom = document.createElement("div");
      dom.className = "link-card";
      dom.setAttribute("data-url", url);

      const externalIcon = `<svg class="link-card-external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path></svg>`;

      dom.innerHTML = `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="link-card-inner">
          ${image ? `<div class="link-card-image"><img src="${image}" alt="${title || ""}" /></div>` : ""}
          <div class="link-card-content">
            <div class="link-card-title">${title || ""}</div>
            ${description ? `<div class="link-card-description">${description}</div>` : ""}
            <div class="link-card-meta">
              ${favicon ? `<img src="${favicon}" alt="" class="link-card-favicon" />` : ""}
              <span class="link-card-site">${siteName || hostname}</span>
              ${externalIcon}
            </div>
          </div>
        </a>
      `;

      return {
        dom,
      };
    };
  },
});

export default LinkCard;
