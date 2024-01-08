import { createBuilder } from "@content-collections/core";
import path from "node:path";
import { isUnknownError, registerErrorListeners } from "../errors.js";

export default async function watch(configPath: string) {
  const builder = await createBuilder(configPath);

  builder.on("build:start", () => {
    console.log("build started ...");
  });

  builder.on("build:end", (event) => {
    console.log(
      "... finished build in",
      event.endedAt - event.startedAt + "ms"
    );
  });

  builder.on("watch:file-changed", (event) => {
    const relativePath = path.relative(process.cwd(), event.filePath);
    if (event.modification === "delete") {
      console.log("... file deleted", relativePath);
    } else {
      console.log("... file changed", relativePath);
    }
  });

  registerErrorListeners(builder);

  builder.on("_error", ({ _event, error }) => {
    if (isUnknownError(_event)) {
      console.log("... error", error.message);
    }
  });

  await builder.build();

  console.log("start watching ...");
  builder.watch();
}
