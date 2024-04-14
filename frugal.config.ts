import { Config } from "https://deno.land/x/frugal@0.9.6/mod.ts"

export default {
    self: import.meta.url,
    pages: ['pages/home.ts']
} satisfies Config;
