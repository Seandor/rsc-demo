export const Sun = ({ className = DefaultClassName }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42M12 5a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7z" />
    </svg>
  );
};

export const Moon = ({ className = DefaultClassName }) => {
  return (
    <svg className={className} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <path d="M533.997 64.536C617.645 125.651 672 224.47 672 336c0 185.568-150.432 336-336 336-111.53 0-210.349-54.355-271.464-138.003C76.006 771.202 271.952 960 512 960c247.424 0 448-200.576 448-448 0-240.048-188.798-435.994-426.003-447.464zM288 224c17.6 0 32-14.4 32-32s-14.4-32-32-32h-64V96c0-17.6-14.4-32-32-32s-32 14.4-32 32v64H96c-17.6 0-32 14.4-32 32s14.4 32 32 32h64v64c0 17.6 14.4 32 32 32s32-14.4 32-32v-64h64z"></path>
      <path d="M416 416h-32v-32c0-17.6-14.4-32-32-32s-32 14.4-32 32v32h-32c-17.6 0-32 14.4-32 32s14.4 32 32 32h32v32c0 17.6 14.4 32 32 32s32-14.4 32-32v-32h32c17.6 0 32-14.4 32-32s-14.4-32-32-32z"></path>
    </svg>
  );
};
