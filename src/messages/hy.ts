import hy from "./hy.json";

export { hy };
export type HyMessages = typeof hy;

export function formatHy(
  template: string,
  vars: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? "")
  );
}
