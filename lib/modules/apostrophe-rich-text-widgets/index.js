module.exports = {
  sanitizeHtml: {
    allowedClasses: {
      '*': ['sb-richText-p', 'sb-richText-h1', 'sb-richText-h3', 'title', 'subtitle', 'is-1', 'is-2', 'is-3', 'is-4', 'is-5', 'is-6', 'has-text-right', 'has-text-left', 'has-text-justified', 'has-text-centered']
    },
    allowedAttributes: {
      '*': ['style', 'href', 'target']
    },
    allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
    'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br',
    'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
  },
}
