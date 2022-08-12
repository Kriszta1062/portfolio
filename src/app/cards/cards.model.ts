export class Card{
    public name: string;
    public description: string;
    public imagePath: string;
    public hover: string;
    public project: string;

    constructor(name: string, desc: string, imagePath: string, hover ? : string, project ? : string){
        this.name = name;
        this.description = desc;
        this.imagePath =imagePath;
        this.hover=hover;
        this.project= project;
        
    }
}