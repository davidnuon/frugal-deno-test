import { context } from "https://deno.land/x/frugal@0.9.6/mod.ts"
import config from "./frugal.config.ts"

await context(config).watch()
