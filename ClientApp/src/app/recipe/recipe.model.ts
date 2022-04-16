export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constrctor(name: string, desc: string, imagepath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagepath;
  }
}
