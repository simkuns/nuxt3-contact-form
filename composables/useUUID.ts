export function useUUID(pattern?: string) {
  const _pattern = pattern ? pattern : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

  return _pattern.replace(/[xy]/g, replacePattern);
}

function replacePattern(c: string) {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;

    return v.toString(16);
}
