let urlRedireccion = "https://ejemplo.com"; // URL por defecto

export default function (req, res) {
    if (req.method === "POST") {
        let { url } = req.body;
        if (url) {
            urlRedireccion = url;
            return res.status(200).json({ message: "URL actualizada correctamente" });
        }
        return res.status(400).json({ message: "Falta la URL" });
    }
    return res.status(405).json({ message: "Método no permitido" });
}
