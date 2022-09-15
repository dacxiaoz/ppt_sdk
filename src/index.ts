import Konva from "konva"


export interface PptSdk {
    container:string,
    width:number,
    height:number,
}

export default class PPT_SDK{
    container:string
    width:number
    height:number
    stage:Konva.Stage

    constructor(config: PptSdk){
        this.container = config.container
        this.width = config.width
        this.height = config.height
        this.stage = new Konva.Stage({
            container: this.container,
            width: this.width,
            height: this.height
        });
    }
}
