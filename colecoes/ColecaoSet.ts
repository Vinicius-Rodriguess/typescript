const frutas: Set<string> = new Set<string>()

frutas.add("banana")
frutas.add("maca")
frutas.add("caqui")
frutas.add("Banana")
frutas.add("manga")

console.table(frutas)

console.log("A fruta morango existe? ", frutas.has("morango"))

frutas.delete("Caqui")

console.table(frutas)

const setOrdenado: string[] = [...frutas].sort()

console.log(setOrdenado)
