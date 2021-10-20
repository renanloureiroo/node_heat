import { serverHttp } from "./app"

serverHttp.listen(4000, () =>
  console.log("Server running http://localhost:4000")
)
