export class UserNotes {

    noteId: number;
    title: string;
    discription: string;
    trash: boolean;
    archive: boolean;
    pin : boolean;
    color : string;
    reminder: Date;
    labels :Array<LabelObject>;
}

export class LabelObject{
    labelId : number;
    name : string;
}

