"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentence = void 0;
var core_1 = require("@tiptap/core");
exports.Sentence = core_1.Node.create({
    name: 'sentence',
    priority: 1000,
    addOptions: function () {
        return {
            HTMLAttributes: {},
        };
    },
    group: 'block',
    content: 'inline*',
    parseHTML: function () {
        return [
            { tag: 'p' },
        ];
    },
    renderHTML: function (_a) {
        var HTMLAttributes = _a.HTMLAttributes;
        return ['p', (0, core_1.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands: function () {
        var _this = this;
        return {
            setParagraph: function () { return function (_a) {
                var commands = _a.commands;
                return commands.setNode(_this.name);
            }; },
        };
    },
    addKeyboardShortcuts: function () {
        var _this = this;
        return {
            'Mod-Alt-0': function () { return _this.editor.commands.setParagraph(); },
        };
    },
});
