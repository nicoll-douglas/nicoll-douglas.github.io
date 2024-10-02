const A="data:image/gif;base64,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";export{A as default};
