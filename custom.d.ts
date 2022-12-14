declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';

declare module '*.woff' {
    const content: string;
    export default content;
}
declare module '*.woff2' {
    const content: string;
    export default content;
}
declare module '*.eot' {
    const content: string;
    export default content;
}
declare module '*.ttf' {
    const content: string;
    export default content;
}