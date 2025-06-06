// src/types/images.d.ts
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  import * as React from 'react';
  const src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default src;
}
