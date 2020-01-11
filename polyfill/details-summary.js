"use strict";
const details = document.createElement("details");
const polyfilldetails = () => {
    const prototype = details.constructor.prototype;
    const open = Object.getOwnPropertyDescriptor(prototype, "open");
    Object.defineProperties(prototype, {
        open: {
            get() {
                var _a, _b;
                if (this.tagName === "DETAILS") {
                    return this.hasAttribute("open");
                }
                else {
                    return (_b = (_a = open) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(this);
                }
            },
            set(value) {
                var _a, _b;
                if (this.tagName === "DETAILS") {
                    if (value !== this.hasAttribute("open")) {
                        const event = document.createEvent("Event");
                        event.initEvent("toggle", false, false);
                        this.dispatchEvent(event);
                    }
                    return value ? this.setAttribute("open", "") : this.removeAttribute("open");
                }
                else {
                    return (_b = (_a = open) === null || _a === void 0 ? void 0 : _a.set) === null || _b === void 0 ? void 0 : _b.call(this, value);
                }
            },
        },
    });
    document.addEventListener("click", (event) => {
        const element = event.target;
        const summary = element.closest("summary");
        if (summary === null || summary.parentElement === null || summary.parentElement.tagName !== "DETAILS") {
            return;
        }
        const parentElement = summary.parentElement;
        parentElement.open = !parentElement.open;
    });
};
if (!("open" in details)) {
    polyfilldetails();
}
//# sourceMappingURL=details-summary.js.map