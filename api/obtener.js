import { urlRedireccion } from "./guardar";

export default function (req, res) {
    res.writeHead(302, { Location: urlRedireccion });
    res.end();
}
