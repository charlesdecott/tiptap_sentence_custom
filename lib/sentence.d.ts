import { Node } from '@tiptap/core';
export interface ParagraphOptions {
    HTMLAttributes: Record<string, any>;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        paragraph: {
            /**
             * Toggle a paragraph
             */
            setParagraph: () => ReturnType;
        };
    }
}
export declare const Sentence: Node<ParagraphOptions, any>;
