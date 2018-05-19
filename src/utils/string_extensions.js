String.prototype.slugify = function(text) {
    return this.toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
  
  String.prototype.capitalize = function() {
    if (this.length == 0) return ""
    if (this.length == 1) return this.toUpperCase()
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  String.prototype.replaceCharAtIndex = function(replacement, index) {
    if (this.length == 0) return ""
    if (index >= this.length) throw new Error(`index ${index} is out of bounds for ${this}`)
    return `${this.substr(0, index)}${replacement}${this.substr(index+replacement.length)}`
  }
  
  export function incrementChar(c) {
      return String.fromCharCode(c.charCodeAt(0) + 1)
  }
  