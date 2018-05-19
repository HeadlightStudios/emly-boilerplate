function encodeOptimizedSVGDataUri(svgString) {

    const uriPayload = encodeURIComponent(svgString.replace(/\n+/g, ''))
      .replace(/%20/g, ' ')
      .replace(/%3D/g, '=')
      .replace(/%3A/g, ':')
      .replace(/%2F/g, '/')
      .replace(/%22/g, "'");
  
    return 'data:image/svg+xml,' + uriPayload;
  }

exports.getSVG = text => {
    const letter = text.toUpperCase();
    return `<svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M0,0 L32,0 L32,32 L0,32 L0,0 z" fill="#656565"/>
    <text transform="matrix(1, 0, 0, 1, 16, 16)">
      <tspan x="-11.403" y="5" font-family="Karla-Regular" font-size="18" fill="#FFFFFF">${letter}</tspan>
    </text></svg>`;
  };
  
  exports.getDataSVG =
      text => encodeOptimizedSVGDataUri(exports.getSVG(text));