import { blobToJson } from './file'
const blob = new Blob([JSON.stringify()], { type: 'application/json' })
blobToJson(blob)
  .then((json) => {
    console.log(json)
  })
  .catch((e) => {
    console.log(e)
  })
