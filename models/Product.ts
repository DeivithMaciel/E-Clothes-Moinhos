class Roupa {
  category: string
  description: string
  image: string
  infos: string[]
  estilo: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    estilo: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.estilo = estilo
    this.title = title
  }
}

export default Roupa
